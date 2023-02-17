import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnpwzvzvdnenoKvO9BsIFk24wMR5HUHuk",
  authDomain: "track-daily.firebaseapp.com",
  projectId: "track-daily",
  storageBucket: "track-daily.appspot.com",
  messagingSenderId: "928958807448",
  appId: "1:928958807448:web:eae5dafe0d3e104f34bfed",
  measurementId: "G-MZ0YLLRFMG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);