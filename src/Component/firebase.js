
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA-nEVtRPbCRv6m2ND7uqYJ0p1nuIJ1Xr4",
  authDomain: "chatapp-afba0.firebaseapp.com",
  projectId: "chatapp-afba0",
  storageBucket: "chatapp-afba0.appspot.com",
  messagingSenderId: "118373408938",
  appId: "1:118373408938:web:1bbbb0e75484048f1ff0d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db=getFirestore();