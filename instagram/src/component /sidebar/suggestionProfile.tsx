import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
  getUserByUserId,
} from "../../servies/firebase";
import LoggedInUserContext from "../../context/loggedInUser";

interface SuggestedProfileProps {
  profileDocId: string;
  username: string;
  profileId: string;
  userId: string;
  loggedInUserDocId: string;
}

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}: SuggestedProfileProps) {
  const [followed, setFollowed] = useState(false);
  const context = useContext(LoggedInUserContext);

  if (!context) {
    return null;
  }

  const { setActiveUser } = context;

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
    const [user] = await getUserByUserId(userId);
    setActiveUser(user);
  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            (e.target as HTMLImageElement).src = `/images/avatars/default.png`;
          }}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}
