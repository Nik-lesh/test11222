import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUsername } from "../servies/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../component /header";
import UserProfile from "../component /profile";
import { User } from "../types";

export default function Profile() {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      if (username) {
        const [user] = await getUserByUsername(username);
        if (user?.userId) {
          setUser(user);
        } else {
          navigate(ROUTES.NOT_FOUND);
        }
      }
    }
    checkUserExists();
  }, [username, navigate]);

  return user?.username ? (
    <div className="bg-gray-background">
      <Header navigate={navigate} />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}
