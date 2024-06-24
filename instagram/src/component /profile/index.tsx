import { useReducer, useEffect } from "react";
import Header from "./header";
import Photos from "./photo";
import { getUserPhotosByUserId } from "../../servies/firebase";
import { UserProps, PhotoProps } from "../../types";

interface ProfileState {
  profile: UserProps;
  photosCollection: PhotoProps[] | null;
  followerCount: number;
}
interface ProfileProps {
  user: UserProps;
}

const reducer = (
  state: ProfileState,
  newState: Partial<ProfileState>
): ProfileState => ({
  ...state,
  ...newState,
});

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const initialState: ProfileState = {
    profile: {} as UserProps,
    photosCollection: null,
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserId(user.userId);
      dispatch({
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={(newFollowerCount: number) =>
          dispatch({ followerCount: newFollowerCount })
        }
      />
      <Photos photos={photosCollection} />
    </>
  );
};

export default Profile;
