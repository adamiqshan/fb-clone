import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDKeaktqxD6fWADkBB3AA520H32-MIKIxY",
    authDomain: "fb-clone-eeaee.firebaseapp.com",
    projectId: "fb-clone-eeaee",
    storageBucket: "fb-clone-eeaee.appspot.com",
    messagingSenderId: "693108670401",
    appId: "1:693108670401:web:12a4e7f2bea3b8fb3b3940"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db