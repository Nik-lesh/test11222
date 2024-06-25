import React, { ReactElement } from "react";
import { Route, RouteProps, NavigateFunction } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  user: any;
  children: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  children,
  ...rest
}) => {
  const navigate = useNavigate();

  return <Route {...rest} element={user ? children : <NavigateToLogin />} />;

  function NavigateToLogin() {
    navigate(ROUTES.LOGIN);
    return null;
  }
};

export default ProtectedRoute;
