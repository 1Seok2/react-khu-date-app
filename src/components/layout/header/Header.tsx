/**
 * @description 공통 헤더부분
 */

import React from 'react';
import { withRouter } from 'react-router';
import Navigation from '../navigation';
import * as s from './Header.styled';

export default withRouter(
  ({ location: { pathname }, userObj }: any) => (
    <s.HeaderContainer>
      <s.HeaderTitle to="/">손개팅</s.HeaderTitle>
      <Navigation pathname={pathname} userObj={userObj} />
    </s.HeaderContainer>
  ),
);
