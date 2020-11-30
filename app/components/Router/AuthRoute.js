import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from 'site-auth';

export const AuthRoute = ({
  Component, path, exact = false, role
}) => {
  const isAuthed = isAuth(role);

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (isAuthed.auth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={isAuthed.dashboard}
        />
      ))}
    />
  );
};
