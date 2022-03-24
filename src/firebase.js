import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAhzauEWxIAHsLqO3BaPJYIJ8oBSBbYnXs",
    authDomain: "firechat-6686d.firebaseapp.com",
    projectId: "firechat-6686d",
    storageBucket: "firechat-6686d.appspot.com",
    messagingSenderId: "546396340945",
    appId: "1:546396340945:web:20602a3caae142ac197bf0"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {
    db,
    auth
}