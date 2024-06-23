import { useContext } from "react";
import User from "./user";
import Suggestions from "./suggestion";
import LoggedInUserContext, {
  LoggedInUserContextType,
} from "../../context/loggedInUser";

export default function Sidebar() {
  const { user } = useContext(LoggedInUserContext) as LoggedInUserContextType;

  if (!user) {
    return null;
  }

  const { docId = "", fullName, username, userId, following } = user;

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
