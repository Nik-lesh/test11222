// App.tsx or another component
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavigateFunction,
} from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";

import Dashboard from "./pages/dashborard";

import * as ROUTES from "./constants/routes";

function App() {
  const navigate: NavigateFunction = () => {};

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login navigate={navigate} />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp navigate={navigate} />} />
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <Dashboard
              navigate={navigate}
              user={{
                uid: "string ",
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
