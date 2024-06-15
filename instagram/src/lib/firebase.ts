import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { FirebaseApp } from "firebase/app";
import { FieldValue as FieldValueType } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";
//import { seedDatabase } from "../seed";
const config = {
  apiKey: "AIzaSyBouE6QMn1C_Skqcw4PBBzA2JcXucE_MF8",
  authDomain: "instagram-8c9ac.firebaseapp.com",
  projectId: "instagram-8c9ac",
  storageBucket: "instagram-8c9ac.appspot.com",
  messagingSenderId: "943170621949",
  appId: "1:943170621949:web:15ca9c18ce824d473dc994",
};

const firebaseApp: FirebaseApp = Firebase.initializeApp(config);
const auth: Auth = getAuth(firebaseApp);
const FieldValue: typeof FieldValueType = Firebase.firestore.FieldValue;
//eedDatabase(firebaseApp);

export { firebaseApp as firebase, FieldValue, auth };
