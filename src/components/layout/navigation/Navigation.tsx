import { FirebaseAuth } from '@/config/firebase.config';
import React, { memo, useState } from 'react';
import MenuList from './Menu';
import * as s from './Navigation.styled';

const Navigation = ({ pathname, userObj }: any) => {
  const MenuValueList = [
    {
      name: '이성목록',
      path: '/contact/list',
      icon: 'icon-heart',
    },
    {
      name: '받은 목록',
      path: '/mypage/receive',
      icon: 'icon-envelope-open-o',
    },
    {
      name: '보낸 목록',
      path: '/mypage/send',
      icon: 'icon-paper-plane-empty',
    },
    {
      name: '내 정보 수정',
      path: '/mypage/edit',
      icon: 'icon-user',
    },
  ];

  const onClickHBG = () => {
    const wrapper: Element | null = document.querySelector(
      '.other-menu-wrapper',
    );
    if (wrapper) {
      wrapper.classList.toggle('nav-visible');
    }
  };

  const logOut = () => FirebaseAuth.signOut();

  return (
    <div className="other-menu-wrapper">
      <header>
        <button
          aria-label="Toggle menu"
          className="nav-button button-lines button-lines-x close"
          type="button"
          onClick={onClickHBG}
        >
          <span className="lines"></span>
        </button>
      </header>
      <nav className="nav-wrapper">
        <s.Profile>
          <s.UserImageContainer>
            <img
              src=""
              alt="profile-img"
              width="100%"
              height="100%"
            />
          </s.UserImageContainer>
          <s.UserInfoContainer>
            <s.UserGroup>단과대학</s.UserGroup>
            <s.UserName>{userObj.name}</s.UserName>
          </s.UserInfoContainer>
          <s.SignOut onClick={logOut}>로그아웃</s.SignOut>
        </s.Profile>
        <ul className="nav" style={{ paddingTop: '.5rem' }}>
          {MenuValueList.map(value => (
            <MenuList
              key={value.name + value.path}
              name={value.name}
              path={value.path}
              icon={value.icon}
              pathname={pathname}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Navigation);
