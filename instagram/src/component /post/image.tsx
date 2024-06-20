interface imageProp {
  src: string;
  caption: string;
}
export default function Image({ src, caption }: imageProp) {
  return <img src={src} alt={caption} />;
}
