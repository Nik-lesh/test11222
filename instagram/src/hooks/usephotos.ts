import { useState, useEffect } from "react";
import { getPhotos } from "../servies/firebase";
import { Photo } from "../types";

export default function usePhotos(user: {
  [x: string]: any;
  userId: string;
  following: string[];
}) {
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      if (user?.userId && user?.following) {
        const fetchedPhotos = await getPhotos(user.userId, user.following);
        const photosWithAdditionalData = fetchedPhotos.map((photo: any) => ({
          ...photo,
          username: photo.username || user.username,
          userLikedPhoto: photo.userLikedPhoto || false,
        }));
        setPhotos(photosWithAdditionalData);
      }
    }

    fetchPhotos();
  }, [user]);

  return { photos };
}
