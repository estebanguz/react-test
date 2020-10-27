import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import LoginDedicated from '../Pages/Standalone/LoginDedicated';
import Application from './Application';
import ThemeWrapper, { AppContext } from './ThemeWrapper';
import { isLogged } from '../../utils/auth';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

class App extends React.Component {
  render() {
    if (isLogged() && (window.location.pathname === '/' || window.location.pathname === '/login')) window.location.href = '/app';
    return (
      <ThemeWrapper>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              <Route
                path="/"
                exact
                component={LoginDedicated}
              />
              <Route
                path="/app"
                component={(props) => {
                  if (isLogged()) return <Application {...props} changeMode={changeMode} />;
                  return <LoginDedicated />;
                }}
              />
              <Route component={Auth} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ThemeWrapper>
    );
  }
}

export default App;
