import { createContext } from "react";
import { FirebaseApp } from "firebase/app";
import { FieldValue as FirestoreFieldValue } from "firebase/firestore";
import { Auth } from "firebase/auth";

export interface FirebaseContextProps {
  firebase: FirebaseApp;
  auth: Auth;
  FieldValue: typeof FirestoreFieldValue;
}

const firebaseContext = createContext<FirebaseContextProps | null>(null);

export default firebaseContext;
