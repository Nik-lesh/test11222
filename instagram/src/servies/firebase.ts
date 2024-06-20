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

interface PhotoData {
  userId: string;
  imageSrc: string;
  caption: string;
  likes: string[];
  comments: { displayName: string; comment: string }[];
  userLatitude: string;
  userLongitude: string;
  dateCreated: number;
  docId?: string;
  userLikedPhoto?: boolean;
  username?: string;
}

export async function doesUsernameExist(username: string): Promise<boolean> {
  const result = await firestore
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();

  return result.docs.length > 0;
}

export async function getUserByUsername(username: string): Promise<UserData[]> {
  const result = await firestore
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();

  return result.docs.map(
    (item: any) =>
      ({
        ...item.data(),
        docId: item.id,
      }) as UserData
  );
}

export async function getUserByUserId(userId: string): Promise<UserData[]> {
  const result = await firestore
    .collection("users")
    .where("userId", "==", userId)
    .get();

  return result.docs.map(
    (item: any) =>
      ({
        ...item.data(),
        docId: item.id,
      }) as UserData
  );
}

export async function getSuggestedProfiles(
  userId: string,
  following: string[]
): Promise<UserData[]> {
  let query: firebase.firestore.Query = firestore.collection("users");

  if (following.length > 0) {
    query = query.where("userId", "not-in", [...following, userId]);
  } else {
    query = query.where("userId", "!=", userId);
  }
  const result = await query.limit(10).get();

  return result.docs.map(
    (user: any) =>
      ({
        ...user.data(),
        docId: user.id,
      }) as UserData
  );
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId: string,
  profileId: string,
  isFollowingProfile: boolean
): Promise<void> {
  return firestore
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  profileDocId: string,
  loggedInUserDocId: string,
  isFollowingProfile: boolean
): Promise<void> {
  return firestore
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    });
}

export async function getPhotos(
  userId: string,
  following: string[]
): Promise<PhotoData[]> {
  const result = await firestore
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map(
    (photo: any) =>
      ({
        ...photo.data(),
        docId: photo.id,
      }) as PhotoData
  );

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}

export async function getUserPhotosByUserId(
  userId: string
): Promise<PhotoData[]> {
  const result = await firestore
    .collection("photos")
    .where("userId", "==", userId)
    .get();

  return result.docs.map(
    (photo: any) =>
      ({
        ...photo.data(),
        docId: photo.id,
      }) as PhotoData
  );
}

export async function isUserFollowingProfile(
  loggedInUserUsername: string,
  profileUserId: string
): Promise<string | undefined> {
  const result = await firestore
    .collection("users")
    .where("username", "==", loggedInUserUsername)
    .where("following", "array-contains", profileUserId)
    .get();

  const [response = {}] = result.docs.map((item: any) => ({
    ...item.data(),
    docId: item.id,
  }));

  return response.userId;
}

export async function toggleFollow(
  isFollowingProfile: boolean,
  activeUserDocId: string,
  profileDocId: string,
  profileUserId: string,
  followingUserId: string
): Promise<void> {
  await updateLoggedInUserFollowing(
    activeUserDocId,
    profileUserId,
    isFollowingProfile
  );
  await updateFollowedUserFollowers(
    profileDocId,
    followingUserId,
    isFollowingProfile
  );
}
