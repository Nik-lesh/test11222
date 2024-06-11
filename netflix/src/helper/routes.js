import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        !user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: loggedInPath,
            }}
          />
        )
      }
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: '/signin',
              state: { from: rest.location },
            }}
          />
        )
      }
    />
  );
}
