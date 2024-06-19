import { useState, useEffect } from "react";
import { getUserByUserId } from "../servies/firebase";
import { User } from "../types";

export default function useUser(userId: string | null) {
  const [activeUser, setActiveUser] = useState<User | null>(null);

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
