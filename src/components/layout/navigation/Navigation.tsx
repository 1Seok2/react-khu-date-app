/**
 * @description 햄버거 버튼 관련 메뉴 모음
 */

import React, { memo, useEffect, useState } from 'react';
import {
  FirebaseAuth,
  FirebaseRDB,
} from '@/config/firebase.config';
import { UserObj } from '@/components/util/usertype';

import MenuList from './Menu';
import Profile from './Profile';
import { color } from '@/theme/color';

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

  const [unread, setUnread] = useState(0);

  useEffect(() => {
    let countUnread = 0;
    let subs: any;

    subs = FirebaseRDB.ref(`chat`).on(
      'value',
      (snap: firebase.database.DataSnapshot) => {
        let key: any;
        for (key in snap.val()) {
          if (
            snap.val()[key].receiver === userObj?.email &&
            snap.val()[key].receiverSaw === 0
          ) {
            countUnread++;
            FirebaseRDB.ref(
              `chat/${snap.val()[key].createdAt}`,
            ).on('value', snap => {
              if (snap.val().receiverSaw === 1) {
                countUnread--;
              }
            });
          }
        }
        setUnread(countUnread);
      },
    );

    // return () => subs();
  }, [unread]);

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
          {unread !== 0 && (
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 16,
                position: 'absolute',
                right: 3,
                top: 10,
                backgroundColor: color.date,
              }}
            />
          )}
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
              userObj={userObj}
              unread={unread}
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
