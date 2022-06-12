import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBXEZVsoQcU5l0VIULV5O7WKJopWRPiTDQ',
  authDomain: 'bears-somehow-74f39.firebaseapp.com',
  projectId: 'bears-somehow-74f39',
  storageBucket: 'bears-somehow-74f39.appspot.com',
  messagingSenderId: '165393945406',
  appId: '1:165393945406:web:27a9f1d27965a521e6926f',
};

// Init Firebase app
const app = initializeApp(firebaseConfig);

// Init Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// collection ref
const users = collection(db, 'users');

// get collection data
getDocs(users)
  .then((data) => {
    const arrUsers = [];
    data.docs.forEach((doc) => {
      arrUsers.push({ ...doc.data(), id: doc.id });
    });
    // console.log(arrUsers);
  })
  .catch((err) => console.log(err.message));

export default db;
