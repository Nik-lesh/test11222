import React, { useEffect } from "react";
import Header from "../component /header";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <Header navigate={navigate} />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
