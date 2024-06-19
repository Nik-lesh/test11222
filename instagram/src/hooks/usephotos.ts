import { useState, useEffect } from "react";
import { getPhotos } from "../servies/firebase";

interface User {
  userId: string;
  emailAddress: string;
  following: string[];
  dateCreated: number;
}

interface Photo {
  photoId: number;
  userId: string;
  dateCreated: number;
}

// Update the usePhotos hook
export default function usePhotos(user: User | null) {
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  useEffect(() => {
    async function getTimelinePhotos() {
      // does the user actually follow people?
      if (user?.following && user.following?.length > 0) {
        const followedUserPhotos = await getPhotos(user.userId, user.following);

        // Transform the PhotoData to Photo by adding a photoId
        const transformedPhotos: Photo[] = followedUserPhotos.map(
          (photo, index) => ({
            ...photo,
            photoId: index,
          })
        );

        // re-arrange array to be newest photos first by dateCreated
        transformedPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(transformedPhotos);
      }
    }

    getTimelinePhotos();
  }, [user?.userId, user?.following]);

  return { photos };
}
