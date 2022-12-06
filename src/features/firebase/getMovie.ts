import { doc, getDoc, getFirestore } from "firebase/firestore";

export async function getMovie(id: any) {
  const db = getFirestore();
  const docRef = doc(db, "movies", id);
  const docSnap = await getDoc(docRef);
  const movie = docSnap.data();
  return movie;
}
