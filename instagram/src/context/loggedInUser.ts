import { createContext } from "react";
import { User } from "../types";

interface LoggedInUserContextType {
  user: User | null;
  setActiveUser: (user: User) => void;
}

const LoggedInUserContext = createContext<LoggedInUserContextType | null>(null);

export default LoggedInUserContext;
