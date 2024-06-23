import { useState, useContext, FormEvent, ChangeEvent } from "react";
import FirebaseContext, { FirebaseContextProps } from "../../context/firebase";
import UserContext from "../../context/user";
import { arrayUnion, getFirestore, doc, updateDoc } from "firebase/firestore";

interface AddCommentProps {
  docId: string;
  comments: Array<{ displayName: string; comment: string }>;
  setComments: React.Dispatch<
    React.SetStateAction<Array<{ displayName: string; comment: string }>>
  >;
  commentInput: React.RefObject<HTMLInputElement>;
}

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}: AddCommentProps) {
  const [comment, setComment] = useState("");
  const context = useContext(FirebaseContext);

  // Type assertion
  const { firebase, FieldValue } = context as FirebaseContextProps;
  const userContext = useContext(UserContext);

  // Ensure userContext is not null and has the correct properties
  const displayName = userContext?.username || "";

  const db = getFirestore(firebase);

  const handleSubmitComment = async (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, { displayName, comment }]);
    setComment("");

    const commentRef = doc(db, "photos", docId);
    try {
      await updateDoc(commentRef, {
        comments: arrayUnion({ displayName, comment }),
      });
    } catch (error: any) {
      console.log("error:", error);
    }
  };

  return (
    <div className="border-t border-gray-primary">
      <form
        className="flex justify-between pl-0 pr-5"
        method="POST"
        onSubmit={(event) =>
          comment.length >= 1
            ? handleSubmitComment(event)
            : event.preventDefault()
        }
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
            setComment(target.value)
          }
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-medium ${!comment && "opacity-25"}`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}
