import { initializeApp } from 'firebase/app';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
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

// collection ref
const usersRef = collection(db, 'users');

export const checkExistingUser = async (tel) => {
  const q = query(usersRef, where('phoneNumber', '==', tel));
  let alreadyExist = false;

  try {
    const snapshot = await getDocs(q);
    snapshot.forEach((user) => (user.data() ? (alreadyExist = true) : null));
  } catch (error) {
    console.log('Catches error: ' + error.message);
  }

  return alreadyExist;
};
