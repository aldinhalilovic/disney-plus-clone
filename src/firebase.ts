import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
  projectId: process.env.REACT_APP_PROJECT_ID, 
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export async function getMovies() {
    const db = getFirestore();
    const moviesCol = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesCol);
    const cityList = moviesSnapshot.docs.map(doc => doc.data());
    return cityList
}

