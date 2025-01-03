import { useRef } from "react";
import Header from "./header";
import Image from "./image";
import Actions from "./action";
import Footer from "./footer";
import Comments from "./comments";
import { Photo } from "../../types";
import { Content } from "./interface";

interface PostProps {
  content: Content;
}

export default function Post({ content }: PostProps) {
  const commentInput = useRef<HTMLInputElement>(null);
  const handleFocus = () => commentInput.current?.focus();

  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}
