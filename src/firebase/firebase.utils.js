import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAT05u-VzK8KQu9QxDWOtJ3VSUil75wX4M",
    authDomain: "crwn-db-f3933.firebaseapp.com",
    projectId: "crwn-db-f3933",
    storageBucket: "crwn-db-f3933.appspot.com",
    messagingSenderId: "112870855038",
    appId: "1:112870855038:web:d2f616ad85fbcff343e32f",
    measurementId: "G-4SZL6KDZZW"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user', error.mesag)

        }
    }

    return userRef;
};


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt :'select_account'});
  export const signInWithGoogle = () =>auth.signInWithPopup(provider);


  export default firebase;