import firebaseApp, {
    firestore
} from '../../util/db/db'

export const apifetchSelections = async () => {
    try {
        const selectionSnapshot = await firestore.collection('selections').get()
        const selections = []
        console.log({selectionSnapshot})
        await selectionSnapshot.onSnapshot(async snapshot => {
            console.log(`Api Fetch Selections ${snapshot.docs}`)
             selections = await snapshot.docs.map(docRef => {
                        return docRef.data()
                    })
        }) 
        return selections
    } catch (error) {
        throw error
    }    
}

export const apifetchCollections = async () => {
    const selectionSnapshot = await firestore.collection('selections').get()
    const collections = []

    selectionSnapshot.onSnapshot(async snapshot => {
        console.log(`Api Fetch collections ${snapshot.docs}`)
        collections = await snapshot.docs.map(docRef => {
            const collection_Ref = docRef.get()
            return collection_Ref.data()
        })
    })
    return collections
}

