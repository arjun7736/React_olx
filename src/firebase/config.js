import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDSG2sDKLeMyrVzx9B7KeNu4u_pBqEgfsQ",
  authDomain: "olxapp-6d33d.firebaseapp.com",
  projectId: "olxapp-6d33d",
  storageBucket: "olxapp-6d33d.appspot.com",
  messagingSenderId: "574804381683",
  appId: "1:574804381683:web:8d7dfb78c4257fe2eacc86",
  measurementId: "G-M257P38LWT"
};


  export default firebase.initializeApp(firebaseConfig)