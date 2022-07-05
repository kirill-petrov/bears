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

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);
export const auth = getAuth(app);
