import firebase, {
    firestore, auth
} from '../../util/db/db'


export const apiCreateMessage = (uid,message) => {


}
export const  apiFetchMessages = () => {
    firestore.collection('messages').orderBy('timestamp','desc').limit(20).onSnapshot(snapshot => {
        return snapshot.docs
    })
}
/* export const requestNotificationPermissions = () => {
firebase.messaging().requestPermission().then(() => {
    firebase.messaging().getToken().then(currentToken => {
        if(currentToken) {
            return currentToken
            firestore.collection('fcmTokens').doc(currentToken).set({uid:auth.currentUser.uid})
        }else {
            requestNotificationPermissions()
        }})

}).catch(error => {
    return Promise.reject(error)
})

} */