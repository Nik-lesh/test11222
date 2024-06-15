import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { FirebaseApp } from "firebase/app";
import { FieldValue as FieldValueType } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyBouE6QMn1C_Skqcw4PBBzA2JcXucE_MF8",
  authDomain: "instagram-8c9ac.firebaseapp.com",
  projectId: "instagram-8c9ac",
  storageBucket: "instagram-8c9ac.appspot.com",
  messagingSenderId: "943170621949",
  appId: "1:943170621949:web:15ca9c18ce824d473dc994",
};

const firebaseApp: FirebaseApp = Firebase.initializeApp(config);
const FieldValue: typeof FieldValueType = Firebase.firestore.FieldValue;
console.log("firebaseApp", firebaseApp);

export { firebaseApp as firebase, FieldValue };
