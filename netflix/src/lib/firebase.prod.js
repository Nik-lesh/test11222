// import firebase from 'firebase/compat/app';
// // Required for side-effects
// import 'firebase/firestore';
// import 'firebase/auth';
// import { seedDatabase } from '../seed';

// const config = {
//   apiKey: 'AIzaSyC8WnNWp_dgKeZ9ogOKglBItvTOyIiW4jw',
//   authDomain: 'netflix-14eaa.firebaseapp.com',
//   projectId: 'netflix-14eaa',
//   storageBucket: 'netflix-14eaa.appspot.com',
//   messagingSenderId: '863228942115',
//   appId: '1:863228942115:web:a1998ba5c5656e68545e96',
// };

// const firebaseapp = firebase.initializeApp(config);
// seedDatabase(firebase);

// export { firebaseapp };
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyC8WnNWp_dgKeZ9ogOKglBItvTOyIiW4jw',
  authDomain: 'netflix-14eaa.firebaseapp.com',
  projectId: 'netflix-14eaa',
  storageBucket: 'netflix-14eaa.appspot.com',
  messagingSenderId: '863228942115',
  appId: '1:863228942115:web:a1998ba5c5656e68545e96',
};
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

//const auth = getAuth(firestore);

export { firebaseapp };
