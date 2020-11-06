/**
 * @description 사이드 바의 프로필 부분
 */

import React, { memo } from 'react';
import { UserObj } from '@/components/util/usertype';
import * as s from './Navigation.styled';

interface ProfileProps {
  userObj: UserObj | null;
  logOut: () => Promise<void>;
}

const Profile = ({ userObj, logOut }: ProfileProps) => (
  <s.Profile>
    {/* <s.UserImageContainer>
      <img
        src=""
        alt="profile-img"
        width="100%"
        height="100%"
      />
    </s.UserImageContainer> */}
    <s.UserInfoContainer>
      <s.UserGroup>{userObj?.college}</s.UserGroup>
      <s.UserName>
        {userObj?.nickname} <s.Sir>학우님</s.Sir>
      </s.UserName>
    </s.UserInfoContainer>
    <s.SignOut onClick={logOut}>로그아웃</s.SignOut>
  </s.Profile>
);

export default memo(Profile);
