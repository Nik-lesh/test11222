export interface Content {
  username: string;
  imageSrc: string;
  caption: string;
  docId: string;
  userLikedPhoto: boolean;
  likes: string[];
  comments: { displayName: string; comment: string }[];
  dateCreated: number;
}
