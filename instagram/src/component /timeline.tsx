// // src/components/timeline.tsx

// import { useContext } from "react";
// import Skeleton from "react-loading-skeleton";
// import LoggedInUserContext from "../context/loggedInUser";
// import usePhotos from "../hooks/usephotos";
// import Post from "./post";
// import { Photo } from "../types"; // Import Photo interface

// export default function Timeline() {
//   const { user } = useContext(LoggedInUserContext);

//   const { user: { following } = {} } = useContext(LoggedInUserContext);

//   const { photos } = usePhotos(user);

//   return (
//     <div className="container col-span-2">
//       {following === undefined ? (
//         <Skeleton count={2} width={640} height={500} className="mb-5" />
//       ) : following.length === 0 ? (
//         <p className="flex justify-center font-bold">
//           Follow other people to see Photos
//         </p>
//       ) : photos ? (
//         photos.map((content: Photo) => (
//           <Post key={content.docId} content={content} />
//         ))
//       ) : null}
//     </div>
//   );
// }
import React from "react";
