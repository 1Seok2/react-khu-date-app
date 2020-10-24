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
  uid: string;
  name: string;
  nickname: string;
  age: string;
  createdAt: number;
  introduce: string;
  gender: string;
  email: string;
}

interface RouterProps {
  isSignIn: boolean;
  userObj: UserObj | null;
  isLoading: boolean;
}

const AppRouter: React.FC<RouterProps> = ({
  isSignIn,
  userObj,
  isLoading,
}): JSX.Element => (
  <div style={OuterContainer}>
    {isSignIn ? (
      <>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/intro" render={() => <Intro />} />
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
        )}
      </>
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
);

export default AppRouter;

const OuterContainer = {
  maxWidth: SmallTabletWidth,
  minHeight: '100vh',
  margin: '0 auto',
  backgroundColor: 'gray',
};
