export interface User {
  user: any;
  userId: string;
  username: string;
  fullName: string;
  emailAddress: string;
  following: string[];
  followers: string[];
  dateCreated: number;
}

export interface Photo {
  docId: string;
  photoId: number;
  userId: string;
  imageSrc: string;
  caption: string;
  likes: string[];
  comments: { displayName: string; comment: string }[];
  userLatitude: string;
  userLongitude: string;
  dateCreated: number;
  userLikedPhoto: boolean;
  username: string;
}

export type UserProps = User;
export type PhotoProps = Photo;
