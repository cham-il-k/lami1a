import  firebase from 'firebase/app'
//import * as firebaseui from 'firebaseui'
import "firebase/auth";
import "firebase/firestore";
import config from '../../config'

  
  const defaultApp = firebase.initializeApp(config.firebaseConfig);
  export const  auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signWithGoogle =  () => {
      auth.signInWithPopup(provider)
      .then(function(result) {
          // This gives you a Google Access Token.
          const token = result.credential.accessToken;
          console.log(`redential Token ${token}`)
          // The signed-in user info.
          const user = result.user;
          console.log(`user  ${user} with Token ${token}`)    
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(`ERROR ${errorCode} , Message ${errorMessage}
          , EMAIL ${email}
        
        `)
        // ...
      });
      
  }
  const uiConfig = {
    signInSuccessUrl: 'http://localhost:3000/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'http://localhost:3000/service',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('http://localhost:3000/privacy');
    }
  };
  export const redirect = firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
export const signout =   firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  


  // Initialize the FirebaseUI Widget using Firebase.
/* export  const start = () => {
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig)
}  // The start method will wait until the DOM is loaded.
 */  
export default firebase
