/**
 * @description 로그인 여부에 따른 router 전환
 */

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { UserObj } from './components/util/usertype';

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
import Loading from './components/util/loading';
import Header from './components/layout/header';

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
  <div
    style={{
      maxWidth: SmallTabletWidth,
      minHeight: '100vh',
      margin: '0 auto',
      position: 'relative',
      boxShadow: '0px 0px 14px -5px rgba(100,100,100,0.5)',
    }}
  >
    {isSignIn ? (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <div
            style={{
              paddingTop: 70,
              overflowY: 'scroll',
              minHeight: 'calc(100vh - 90px)',
            }}
          >
            <Header userObj={userObj} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/intro"
                render={() => <Intro />}
              />
              <Route
                path="/contact/list"
                render={props => (
                  <List userObj={userObj} {...props} />
                )}
              />
              <Route
                path="/contact/detail"
                component={Detail}
              />
              <Route
                path="/mypage/edit"
                render={props => (
                  <Edit userObj={userObj} {...props} />
                )}
              />
              <Route
                path="/mypage/receive"
                render={props => (
                  <Receive userObj={userObj} {...props} />
                )}
              />
              <Route
                path="/mypage/send"
                render={props => (
                  <Send userObj={userObj} {...props} />
                )}
              />
              <Redirect to="/" />
            </Switch>
          </div>
        )}
      </>
    ) : (
      <Switch>
        <Route
          exact
          path="/auth/signin"
          component={SignIn}
        />
        <Route
          exact
          path="/auth/signup"
          component={SignUp}
        />
        <Redirect path="*" to="/auth/signin" />
      </Switch>
    )}
  </div>
);

export default AppRouter;

const OuterContainer = {
  maxWidth: SmallTabletWidth,
  minHeight: '110vh',
  margin: '0 auto',
  position: 'relative',
};
