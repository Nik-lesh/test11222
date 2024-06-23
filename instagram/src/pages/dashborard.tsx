import { useEffect } from "react";
import Header from "../component /header";
import Timeline from "../component /timeline";
import Sidebar from "../component /sidebar";
import useUser from "../hooks/useUser";
import LoggedInUserContext from "../context/loggedInUser";
import { User as FirebaseUser } from "../types";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
  user: FirebaseUser;
}

const Dashboard: React.FC<DashboardProps> = ({ user: loggedInUser }) => {
  const { user, setActiveUser } = useUser(loggedInUser.user);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header navigate={navigate} />
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
};

export default Dashboard;
