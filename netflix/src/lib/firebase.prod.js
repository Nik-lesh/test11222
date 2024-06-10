import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyC8WnNWp_dgKeZ9ogOKglBItvTOyIiW4jw',
  authDomain: 'netflix-14eaa.firebaseapp.com',
  projectId: 'netflix-14eaa',
  storageBucket: 'netflix-14eaa.appspot.com',
  messagingSenderId: '863228942115',
  appId: '1:863228942115:web:a1998ba5c5656e68545e96',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

seedDatabase(firestore);

export { firebaseApp, firestore, auth };
