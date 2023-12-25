// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection, getDocs } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA-tQ08m7LClNWlM7IzUl9726wJ-Jhf8bM",
	authDomain: "expense-tracker-2-9bcb3.firebaseapp.com",
	projectId: "expense-tracker-2-9bcb3",
	storageBucket: "expense-tracker-2-9bcb3.appspot.com",
	messagingSenderId: "455752972042",
	appId: "1:455752972042:web:342ce90d48dcd95e396cf3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
