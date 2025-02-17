import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpyS60-9CS0bE7MdXpRfeOPcnIVAE9kDY",
  authDomain: "blrgrooveco.firebaseapp.com",
  projectId: "blrgrooveco",
  storageBucket: "blrgrooveco.firebasestorage.app",
  messagingSenderId: "407726769220",
  appId: "1:407726769220:web:aa9d1b4e3f51c45a286811"
};

const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc, ref, uploadBytesResumable, getDownloadURL };
