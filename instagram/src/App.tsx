import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ReactLoader from "./component /loader";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/userAuth";
import ProtectedRoute from "./helper/protectedRoutes";
import { useNavigate } from "react-router-dom";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashborard"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/notfound"));

export default function App() {
  const { user } = useAuthListener();
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Suspense fallback={<ReactLoader />}>
          <Routes>
            <Route
              path={ROUTES.LOGIN}
              element={<Login navigate={navigate} />}
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={<SignUp navigate={navigate} />}
            />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user}>
                  {user ? (
                    <Dashboard user={user} />
                  ) : (
                    <Navigate to={ROUTES.LOGIN} />
                  )}
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
