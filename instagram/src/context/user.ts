import { createContext } from "react";
import { UserProps } from "../types";

const UserContext = createContext<UserProps | null>(null);

export default UserContext;
