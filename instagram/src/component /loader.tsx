import { ClipLoader } from "react-spinners";

const ReactLoader: React.FC = () => {
  return (
    <div className="flex justify-center mt-12">
      <ClipLoader color="#00000059" size={70} />
    </div>
  );
};

export default ReactLoader;
