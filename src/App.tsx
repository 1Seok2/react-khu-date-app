import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from '@/assets/global/GlobalStyle';
import {
  FirebaseAuth,
  FirebaseRDB,
} from './config/firebase.config';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/Menu.css';

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
              });
              if (isLoading) {
                setTimeout(() => {
                  setLoading(false);
                }, 200);
              }
            },
          );
          // .once('value')
          // .then(snap => {
          //   const obj = snap.val();
          //   setUserObj({
          //     ...obj,
          //     uid: uid,
          //   });
          // })
          // .finally(() => {
          //   /* loading time ... */
          //   setTimeout(() => {
          //     setLoading(false);
          //   }, 200);
          // });
        } else {
          setUserObj(null);
          setSignIn(false);
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
