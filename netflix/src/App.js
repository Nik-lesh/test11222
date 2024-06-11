// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Home, Signin, Signup, Browser } from './pages';
// import * as ROUTES from './ constants/routes';
// import { IsUserRedirect, ProtectedRoute } from './helper/routes';
// import useAuthListener from './hooks/use-auth-listner';

// export default function App() {
//   const { user } = useAuthListener();
//   return (
//     <Router>
//       <Routes>
//         <IsUserRedirect
//           user={user}
//           loggedInPath={ROUTES.browse}
//           path={ROUTES.SIGNIN}
//         >
//           <Signin />
//         </IsUserRedirect>
//         <IsUserRedirect
//           user={user}
//           loggedInPath={ROUTES.browse}
//           path={ROUTES.SIGNUP}
//         >
//           <Signup />
//         </IsUserRedirect>
//         <ProtectedRoute user={user} path={ROUTES.browse}>
//           <Browser />
//         </ProtectedRoute>
//         <IsUserRedirect
//           user={user}
//           loggedInPath={ROUTES.browse}
//           path={ROUTES.HOME}
//         >
//           <Home />
//         </IsUserRedirect>
//       </Routes>
//     </Router>
//   );
// }
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Signin, Signup, Browser } from './pages';
import * as ROUTES from './ constants/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.browse} element={<Browser />} />
        <Route exact path={ROUTES.SIGNIN} element={<Signin />} />
        <Route exact path={ROUTES.SIGNUP} element={<Signup />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
