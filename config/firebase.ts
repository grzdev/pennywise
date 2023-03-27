import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from 'firebase/database' 
import { getFirestore } from "firebase/firestore"


export const firebaseConfig = {
  apiKey: "AIzaSyAnpwzvzvdnenoKvO9BsIFk24wMR5HUHuk",
  authDomain: "track-daily.firebaseapp.com",
  projectId: "track-daily",
  storageBucket: "track-daily.appspot.com",
  messagingSenderId: "928958807448",
  appId: "1:928958807448:web:eae5dafe0d3e104f34bfed",
  // measurementId: "G-MZ0YLLRFMG"
  measurementId: "G-J0QHMRSE6T"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const initFirebase = () => {
  return app
}