import { useState, useEffect } from "react";
import { getUserByUserId } from "../servies/firebase";

// Define the UserData interface based on the structure of the user object
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

export default function useUser(userId: string | null) {
  const [activeUser, setActiveUser] = useState<UserData | null>(null);

  useEffect(() => {
    async function getUserObjByUserId(userId: string) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || null);
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);

  return { user: activeUser, setActiveUser };
}
