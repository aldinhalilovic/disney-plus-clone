import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCHydZVFCmsf7ZcblgrkMof1c0XHShjgyI",
  authDomain: "disney-clone-5baf3.firebaseapp.com",
  projectId: "disney-clone-5baf3",
  storageBucket: "disney-clone-5baf3.appspot.com",
  messagingSenderId: "1005873755223",
  appId: "1:1005873755223:web:8f60e88e31810cab7d5f12",
  measurementId: "G-NLV9429KX6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export async function getMovies() {
    const db = getFirestore();
    const moviesCol = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesCol);
    const cityList = moviesSnapshot.docs.map(doc => doc.data());
    return cityList
}

