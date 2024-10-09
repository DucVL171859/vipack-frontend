// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk1_v7CQdGyAOhctR4a80_NaiBEhNNSVw",
    authDomain: "vipack-frontend-6eccd.firebaseapp.com",
    projectId: "vipack-frontend-6eccd",
    storageBucket: "vipack-frontend-6eccd.appspot.com",
    messagingSenderId: "360612359697",
    appId: "1:360612359697:web:f70e230d4c3a49e3ae8bb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);