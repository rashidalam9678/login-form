import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTPy43gOugsYnklIzMXQQKZoqi2O4NQFI",
  authDomain: "image-downloader-15b9f.firebaseapp.com",
  projectId: "image-downloader-15b9f",
  storageBucket: "image-downloader-15b9f.appspot.com",
  messagingSenderId: "451278600051",
  appId: "1:451278600051:web:1259c4f5e5e00322817706"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
export { projectStorage, projectFirestore,auth};