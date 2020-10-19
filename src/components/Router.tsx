import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './page/home';

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Redirect path="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
