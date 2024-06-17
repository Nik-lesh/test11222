import firebase from "firebase/compat";
import { firestore, FieldValue } from "../lib/firebase";

// Types for the returned data
interface UserData {
  userId: string;
  username: string;
  fullName: string;
  emailAddress: string;
  following: string[];
  followers: string[];
  dateCreated: number;
  docId?: string;
}

export async function doesUsernameExist(username: string): Promise<boolean> {
  const result = await firestore
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();

  return result.docs.length > 0;
}
