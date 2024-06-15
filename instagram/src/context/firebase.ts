import { createContext } from "react";
import { FirebaseApp } from "firebase/app";
import { FieldValue as FirestoreFieldValue } from "firebase/firestore";
import firebase from "firebase/app";

interface FirebaseContextProps {
  firebase: firebase.FirebaseApp;
  FieldValue: typeof FirestoreFieldValue;
}

const firebaseContext = createContext<FirebaseContextProps | null>(null);

export default firebaseContext;
