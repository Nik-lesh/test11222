import { useState, useEffect, useContext } from "react";
import FirebaseContext, { FirebaseContextProps } from "../context/firebase";
import { getAuth, onAuthStateChanged, Auth } from "firebase/auth";

interface AuthUser {
  userId: string;
  username: string;
  fullName: string;
  emailAddress: string;
  following: string[];
  followers: string[];
  dateCreated: number;
}

export default function useAuthListener() {
  const [user, setUser] = useState<AuthUser | null>(
    JSON.parse(localStorage.getItem("authUser") as string)
  );
  const context = useContext(FirebaseContext);

  // Type assertion
  const { firebase } = context as FirebaseContextProps;
  const auth = getAuth(firebase) as Auth;
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (authUser: any) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser as AuthUser);
      } else {
        // we don't have an authUser therefore clear the localstorage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
