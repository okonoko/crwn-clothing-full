import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyBuEMu_KVL17DTJaBlkyGmVcGCCVZIrfyw",
authDomain: "crwn-clo.firebaseapp.com",
projectId: "crwn-clo",
storageBucket: "crwn-clo.appspot.com",
messagingSenderId: "687005184465",
appId: "1:687005184465:web:098154e0152f0ee6a4f0f0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

