/**
 * @description 앱 시작
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import {
  FirebaseAuth,
  FirebaseRDB,
} from './config/firebase.config';

import GlobalStyle from '@/assets/global/GlobalStyle';
import './assets/css/Menu.css';
import './assets/font/fontello-c7778059/css/fontello-embedded.css';

/**
 * props로 전달할 user정보
 */
import { UserObj } from './components/util/usertype';
import Loading from './components/util/loading';

const App: React.FC = (): JSX.Element => {
  const [isSignIn, setSignIn] = useState(false);
  const [init, setInit] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [userObj, setUserObj] = useState<UserObj | null>({
    uid: '',
    name: '',
    createdAt: 0,
    email: '',
  });

  /**
   * 로그인 상태 변경 감지
   */
  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(
      (user: firebase.User | null): void => {
        if (user) {
          const userEmail: string | null = user.email;
          const userVerified = user.emailVerified;
          const emailGroup:
            | string
            | undefined = userEmail?.split('@')[1];

          if (emailGroup === 'khu.ac.kr') {
            const { uid }: any = user;
            setSignIn(true);

            /**
             * 유저 정보 실시간 업데이트
             */
            FirebaseRDB.ref(`users/${uid}`).on(
              'value',
              (snap: firebase.database.DataSnapshot) => {
                const obj = snap.val();
                setUserObj({
                  ...obj,
                  uid: uid,
                  emailVerified: userVerified,
                  email: userEmail,
                });
                if (isLoading) {
                  setTimeout(() => {
                    setLoading(false);
                  }, 200);
                }
              },
            );
          }
          // else if (!userVerified) {
          //   alert('이메일 링크 확인 필요');
          // }
        } else {
          setUserObj(null);
          setSignIn(false);
          FirebaseAuth.signOut();
        }
        setTimeout(() => {
          setInit(true);
        }, 300);
      },
    );
  }, []);

  return (
    <>
      {init && (
        <BrowserRouter>
          <AppRouter
            isSignIn={isSignIn}
            userObj={userObj}
            isLoading={isLoading}
          />
          <GlobalStyle />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
