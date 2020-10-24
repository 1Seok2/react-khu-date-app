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
import Intro from './page/intro';
import Home from './page/home';
import Detail from './page/contact/detail';
import List from './page/contact/list';
import Edit from './page/mypage/edit';
import Receive from './page/mypage/receive';
import Send from './page/mypage/send';
import { SmallTabletWidth } from './theme/width';

interface UserObj {
  displayName: string | null;
  uid: string | null;
  updateProfile: any;
}

interface RouterProps {
  isSignIn: boolean;
  userObj: UserObj | null;
}

const AppRouter: React.FC<RouterProps> = ({
  isSignIn,
  userObj,
}): JSX.Element => (
<<<<<<< HEAD
  <Router>
    <Switch>
      {isSignIn ? (
        <div style={OuterContainer}>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/intro"
            render={() => <Intro />}
          />

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
          {/* <Redirect path="*" to="/" /> */}
        </div>
      ) : (
        <div style={OuterContainer}>
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
        </div>
      )}
    </Switch>
  </Router>
=======
  <div style={OuterContainer}>
    {!isSignIn ? (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/contact/list"
          render={() => <List />}
        />
        <Route
          path="/contact/detail"
          render={() => <Detail />}
        />
        <Route
          path="/mypage/edit"
          render={() => <Edit />}
        />
        <Route
          path="/mypage/receive"
          render={() => <Receive />}
        />
        <Route
          path="/mypage/send"
          render={() => <Send />}
        />
        <Redirect to="/" />
      </Switch>
    ) : (
      <Switch>
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
      </Switch>
    )}
  </div>
>>>>>>> e52c30707c35f4993c927a031938153b20118fe4
);

export default AppRouter;

const OuterContainer = {
  maxWidth: SmallTabletWidth,
  minHeight: '100vh',
  margin: '0 auto',
  backgroundColor: 'gray',
};
