import { useEffect } from "react";
import Header from "../component /header";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/loggedInUser";
import { NavigateFunction } from "react-router-dom";

// Define the type for the loggedInUser prop

export interface DashboardProps {
  navigate: NavigateFunction;
  user: {
    uid: string;
    [key: string]: any;
  };
}

const Dashboard: React.FC<DashboardProps> = ({
  user: loggedInUser,
  navigate,
}) => {
  const { user, setActiveUser } = useUser(loggedInUser.uid);
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  if (!user) return null;

  return (
    <div className="bg-gray-background">
      <Header navigate={navigate} />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        {/* Include Timeline and Sidebar if needed */}
      </div>
    </div>
  );
};

export default Dashboard;
