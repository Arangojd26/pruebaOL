import app from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDqfEXu_prZ3diwVl0NX6AtJ841N0a5sGE",
    authDomain: "crud-test-olsoftware.firebaseapp.com",
    databaseURL: "https://crud-test-olsoftware.firebaseio.com",
    projectId: "crud-test-olsoftware",
    storageBucket: "crud-test-olsoftware.appspot.com",
    messagingSenderId: "764008829303",
    appId: "1:764008829303:web:ba880782ed2b38051e5172"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth}