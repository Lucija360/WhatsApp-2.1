import {initializeApp, getApp, getApps} from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtgSkOL6NtFRQk_EZ_fzr_3A_E2_wPGQU",
    authDomain: "whatsapp-21-b6e65.firebaseapp.com",
    projectId: "whatsapp-21-b6e65",
    storageBucket: "whatsapp-21-b6e65.appspot.com",
    messagingSenderId: "117598962485",
    appId: "1:117598962485:web:55db372cf119465f06827c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();
  
  export {app, auth , db, googleProvider};
