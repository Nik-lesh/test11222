import { createContext } from "react";
import { UserProps } from "../types"; // Import ContextProps from types.ts

const LoggedInUserContext = createContext<UserProps | null>(null);

export default LoggedInUserContext;
