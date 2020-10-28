const functions = require('firebase-functions');
const path = require('path')
const os = require('os') 
const rimraf = require('rimraf')
const admin = require('firebase-admin')

//const getUidFromEmail = require('./profilMangmt')
const firestore = admin.firestore()

const spawn = require('child-process-promise').spawn
const { Storage } = require('@google-cloud/storage')
const mkdirp =  require('mkdir-promise');
const { object, bucket } = require('firebase-functions/lib/providers/storage');
const gcs = new Storage()
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

exports.resizeImage =  functions.storage.object().onFinalize(async (object, context) => {
    const filePath = object.name || '',
        contentType = object.contentType || '',
        fileDir =  path.dirname(filePath),
        fileName = path.basename(filePath),
        tempDir = path.join(os.tmpdir(), fileDir)
        console.log({fileDir, fileName})
        if(!contentType.startsWith('image/') || fileName.startsWith('thumb_')) {
            console.log('exiting file system sorage')
            return null 
        } 
        const rootDir = await mkdirp(tempDir)
        const originalBucket = gcs.bucket(object.bucket)
        const originalImage = bucket.file(filePath)
        const tempLocalFile =  path.join(os.tempdir(),filePath )
        await originalImage.download({destination: tempLocalFile})
        
        const outputThumbnail = path.join(fileDir, `thumb-${fileName}`)
        const outputFile =  path.join(os.tmpdir(), outputThumbnail)
        //process image
        await spawn('convert',[tempLocalFile, '-thumbnail','500x500 >', outputFile], {
            capture:['stdout', 'stderr']}) 
        
        const metadata ={
            contentType:object.contentType,
            cacheControl: 'public, max-age=2592000, s-maxage=2592000'
        }    
        const uploadedFiles = await bucket.upload(outputFile, { destination: outputThumbnail, metadata})
        rimraf.sync(tempDir)
        await originalImage.delete()
        // create link to file in order to store it i  database
        const thumbNail = uploadedFiles[0]
         const url = await thumbNail.getSignedUrl({ action: 'read', expires: new Date(3000,0,1)})
        const frag = filePath.split('/'),
            productId= frag[1]
        return  firestore.doc(`products/${productId}`).update({imageUrl: url })   
   

}) 