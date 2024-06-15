// App.tsx or another component
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavigateFunction,
} from "react-router-dom";
import Login from "./pages/login";
import * as ROUTES from "./constants/routes";

function App() {
  const navigate: NavigateFunction = () => {}; // Define your navigate function here

  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login navigate={navigate} />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
