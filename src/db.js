import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // для реги

// firebase Кирила
// const firebaseConfig = {
//   apiKey: 'AIzaSyBXEZVsoQcU5l0VIULV5O7WKJopWRPiTDQ',
//   authDomain: 'bears-somehow-74f39.firebaseapp.com',
//   projectId: 'bears-somehow-74f39',
//   storageBucket: 'bears-somehow-74f39.appspot.com',
//   messagingSenderId: '165393945406',
//   appId: '1:165393945406:web:27a9f1d27965a521e6926f',
// };

// // // Init Firebase app
// const app = initializeApp(firebaseConfig);

// firebase PK
const app = initializeApp ({
  apiKey: "AIzaSyA1QKNWt7S2oSR_U5Gxj_nEPwWJOUWU7fE",
  authDomain: "bears-project-7e4ec.firebaseapp.com",
  projectId: "bears-project-7e4ec",
  storageBucket: "bears-project-7e4ec.appspot.com",
  messagingSenderId: "206054931619",
  appId: "1:206054931619:web:02984828a512a39c359316",
  measurementId: "G-HMY3ZQ8S85"
})

export const auth = getAuth(app) // (под сомнением)

// Init Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
