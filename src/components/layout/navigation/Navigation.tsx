import { FirebaseAuth } from '@/config/firebase.config';
import React, { useState } from 'react';
import MenuList from './Menu';

const Navigation = ({ pathname, userObj }: any) => {
  const MenuValueList = [
    {
      name: '이성목록',
      path: '/contact/list',
    },
    {
      name: '받은 목록',
      path: '/mypage/receive',
    },
    {
      name: '보낸 목록',
      path: '/mypage/send',
    },
    {
      name: '내 정보 수정',
      path: '/mypage/edit',
    },
  ];

  const onClickHBG = () => {
    const wrapper: Element | null = document.querySelector(
      '.other-menu-wrapper',
    );
    const nav_wrapper: Element | null = document.querySelector(
      '.nav-wrapper',
    );
    if (wrapper && nav_wrapper) {
      wrapper.classList.toggle('nav-visible');
      nav_wrapper.classList.toggle('nav-display');
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
      <nav className="nav-wrapper nav-display">
        <ul className="nav" style={{ paddingTop: '7rem' }}>
          {MenuValueList.map(value => (
            <MenuList
              key={value.name + value.path}
              name={value.name}
              path={value.path}
              onClickHBG={onClickHBG}
              pathname={pathname}
            />
          ))}

          <li className="nav-list">
            <a
              style={{
                marginTop: '4rem',
                textAlign: 'right',
                fontFamily: 'Nanum Gothic',
              }}
              href="#"
              onClick={logOut}
            >
              로그아웃
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
