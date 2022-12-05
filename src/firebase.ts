// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHydZVFCmsf7ZcblgrkMof1c0XHShjgyI",
  authDomain: "disney-clone-5baf3.firebaseapp.com",
  projectId: "disney-clone-5baf3",
  storageBucket: "disney-clone-5baf3.appspot.com",
  messagingSenderId: "1005873755223",
  appId: "1:1005873755223:web:8f60e88e31810cab7d5f12",
  measurementId: "G-NLV9429KX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

 export async function getCities(db: any) {
    const citiesCol = collection(db, 'movies');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList
    }

export { db }