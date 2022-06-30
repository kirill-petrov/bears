import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'app-for-reports.firebaseapp.com',
  projectId: 'app-for-reports',
  storageBucket: 'app-for-reports.appspot.com',
  messagingSenderId: '1060539765177',
  appId: '1:1060539765177:web:6ddadaa40da6505fc66668',
};

const app = initializeApp(firebaseConfig);

// Init Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
