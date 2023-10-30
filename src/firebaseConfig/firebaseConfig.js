import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, setDoc , doc ,addDoc,collection} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoG_X30Q9N1FAapVoK68a2VEG_7Tu2VNY",
  authDomain: "devathon-smit-be7eb.firebaseapp.com",
  projectId: "devathon-smit-be7eb",
  storageBucket: "devathon-smit-be7eb.appspot.com",
  messagingSenderId: "274179331320",
  appId: "1:274179331320:web:bdbb2b829baabde3b4d70d",
  measurementId: "G-9Y46H8LN9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
// const storage = getStorage(app);

export{
    createUserWithEmailAndPassword,
    auth,
    app,
    db,
    getAuth,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    addDoc,
    collection
}