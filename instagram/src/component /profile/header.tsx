import { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/useUser";
import { isUserFollowingProfile, toggleFollow } from "../../servies/firebase";
import UserContext from "../../context/user";
import { DEFAULT_IMAGE_PATH } from "../../constants/paths";

interface HeaderProps {
  photosCount: number;
  followerCount: number;
  setFollowerCount: (count: number) => void;
  profile: {
    docId: string;
    userId: string;
    fullName: string;
    followers: string[];
    following: string[];
    username: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  photosCount,
  followerCount,
  setFollowerCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    followers,
    following,
    username: profileUsername,
  },
}) => {
  const loggedInUser = useContext(UserContext);
  const { user } = useUser(loggedInUser?.userId ?? null);
  const [isFollowingProfile, setIsFollowingProfile] = useState<boolean | false>(
    false
  );
  const activeBtnFollow = user?.username && user?.username !== profileUsername;

  const handleToggleFollow = async () => {
    if (user) {
      setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
      setFollowerCount(
        isFollowingProfile ? followerCount - 1 : followerCount + 1
      );
      await toggleFollow(
        isFollowingProfile,
        user.docId,
        profileDocId,
        profileUserId,
        user.userId
      );
    }
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      if (user) {
        const isFollowing = await isUserFollowingProfile(
          user.username,
          profileUserId
        );
        setIsFollowingProfile(!!isFollowing);
      }
    };

    if (user?.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user?.username, profileUserId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center items-center">
        {profileUsername ? (
          <img
            className="rounded-full h-40 w-40 flex"
            alt={`${fullName} profile picture`}
            src={`/images/avatars/${profileUsername}.jpg`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = DEFAULT_IMAGE_PATH;
            }}
          />
        ) : (
          <Skeleton circle height={150} width={150} count={1} />
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{profileUsername}</p>
          {activeBtnFollow && isFollowingProfile === null ? (
            <Skeleton count={1} width={80} height={32} />
          ) : (
            activeBtnFollow && (
              <button
                className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                type="button"
                onClick={handleToggleFollow}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleToggleFollow();
                  }
                }}
              >
                {isFollowingProfile ? "Unfollow" : "Follow"}
              </button>
            )
          )}
        </div>
        <div className="container flex mt-4">
          {!followers || !following ? (
            <Skeleton count={1} width={677} height={24} />
          ) : (
            <>
              <p className="mr-10">
                <span className="font-bold">{photosCount}</span> photos
              </p>
              <p className="mr-10">
                <span className="font-bold">{followerCount}</span>
                {` `}
                {followerCount === 1 ? `follower` : `followers`}
              </p>
              <p className="mr-10">
                <span className="font-bold">{following?.length}</span> following
              </p>
            </>
          )}
        </div>
        <div className="container mt-4">
          <p className="font-medium">
            {!fullName ? <Skeleton count={1} height={24} /> : fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
