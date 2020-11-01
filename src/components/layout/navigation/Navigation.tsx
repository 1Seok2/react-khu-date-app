/**
 * @description 햄버거 버튼 관련 메뉴 모음
 */

import React, { memo } from 'react';
import { FirebaseAuth } from '@/config/firebase.config';
import { UserObj } from '@/components/util/usertype';

import MenuList from './Menu';
import Profile from './Profile';

interface NavigationProps {
  pathname: string;
  userObj: UserObj | null;
}

const Navigation = ({
  pathname,
  userObj,
}: NavigationProps) => {
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
        <Profile userObj={userObj} logOut={logOut} />
        <ul className="nav" style={{ paddingTop: '.5rem' }}>
          {MenuValueList.map(value => (
            <MenuList
              key={value.name + value.path}
              name={value.name}
              path={value.path}
              icon={value.icon}
              pathname={pathname}
              onClickHBG={onClickHBG}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default memo(Navigation);

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
