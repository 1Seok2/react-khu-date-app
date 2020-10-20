/**
 * @description 로그인 여부에 따른 router 전환
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

/* before sign in ... */
import SignIn from './page/auth/signin';
import SignUp from './page/auth/signup';

/* after sign in ... */
import Home from './page/home';
import Detail from './page/contact/detail';
import List from './page/contact/list';
import Edit from './page/mypage/edit';
import Receive from './page/mypage/receive';
import Send from './page/mypage/send';

interface RouterProps {
  isSignIn: boolean;
}

const AppRouter: React.FC<RouterProps> = ({
  isSignIn,
}): JSX.Element => (
  <Router>
    <Switch>
      {isSignIn ? (
        <>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/contact/list"
            render={() => <List />}
          />
          <Route
            exact
            path="/contact/detail"
            render={() => <Detail />}
          />
          <Route
            exact
            path="/mypage/edit"
            render={() => <Edit />}
          />
          <Route
            exact
            path="/mypage/receive"
            render={() => <Receive />}
          />
          <Route
            exact
            path="/mypage/send"
            render={() => <Send />}
          />
          <Redirect path="*" to="/" />
        </>
      ) : (
        <>
          <Route
            exact
            path="/auth/signin"
            render={() => <SignIn />}
          />
          <Route
            exact
            path="/auth/signup"
            render={() => <SignUp />}
          />
          <Redirect path="*" to="/auth/signin" />
        </>
      )}
    </Switch>
  </Router>
);

export default AppRouter;
