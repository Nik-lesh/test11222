import { useEffect } from "react";
import Header from "../component /header";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/loggedInUser";
import { User } from "../types";
// Define the type for the loggedInUser prop
interface DashboardProps {
  user: {
    uid: string;
    [key: string]: any;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ user: loggedInUser }) => {
  const { user, setActiveUser } = useUser(loggedInUser.uid);

  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg"></div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

export default Dashboard;
