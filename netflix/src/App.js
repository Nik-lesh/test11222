import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Signin, Signup, Browser } from './pages';
import * as ROUTES from './ constants/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/browser" element={<Browser />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
