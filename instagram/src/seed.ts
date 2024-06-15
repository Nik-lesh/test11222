import { FirebaseApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

interface User {
  userId: string;
  username: string;
  fullName: string;
  emailAddress: string;
  following: string[];
  followers: string[];
  dateCreated: number;
}

interface Comment {
  displayName: string;
  comment: string;
}

interface Photo {
  photoId: number;
  userId: string;
  imageSrc: string;
  caption: string;
  likes: string[];
  comments: Comment[];
  userLatitude: string;
  userLongitude: string;
  dateCreated: number;
}

export async function seedDatabase(firebase: FirebaseApp) {
  const firestore = getFirestore(firebase);

  const users: User[] = [
    {
      userId: "NvPY9M9MzFTARQ6M816YAzDJxZ72",
      username: "karl",
      fullName: "Karl Hadwen",
      emailAddress: "karlhadwen@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["NvPY9M9MzFTARQ6M816YAzDJxZ72"],
      dateCreated: Date.now(),
    },
  ];

  for (let k = 0; k < users.length; k++) {
    await addDoc(collection(firestore, "users"), users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    const photo: Photo = {
      photoId: i,
      userId: "2",
      imageSrc: `/images/users/raphael/${i}.jpg`,
      caption: "Saint George and the Dragon",
      likes: [],
      comments: [
        {
          displayName: "dali",
          comment: "Love this place, looks like my animal farm!",
        },
        {
          displayName: "orwell",
          comment: "Would you mind if I used this picture?",
        },
      ],
      userLatitude: "40.7128°",
      userLongitude: "74.0060°",
      dateCreated: Date.now(),
    };

    await addDoc(collection(firestore, "photos"), photo);
  }
}
