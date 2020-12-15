import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from 'site-auth';

export const AuthRoute = ({
  Component, path, exact = false, roles
}) => {
  const isAuthed = isAuth(roles);

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
