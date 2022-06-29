import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'bears-somehow-74f39.firebaseapp.com',
  projectId: 'bears-somehow-74f39',
  storageBucket: 'bears-somehow-74f39.appspot.com',
  messagingSenderId: '165393945406',
  appId: '1:165393945406:web:27a9f1d27965a521e6926f',
};

const app = initializeApp(firebaseConfig);

// Init Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth();
