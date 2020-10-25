import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from '@/assets/global/GlobalStyle';
import {
  FirebaseAuth,
  FirebaseRDB,
} from './config/firebase.config';
import { BrowserRouter } from 'react-router-dom';

/**
 * props로 전달할 user정보
 */
import { UserObj } from './components/util/usertype';

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

          FirebaseRDB.ref(`users/${uid}`)
            .once('value')
            .then(snap => {
              const obj = snap.val();
              setUserObj({
                ...obj,
                uid: uid,
              });
            });
          /* loading time ... */
          setTimeout(() => {
            setLoading(false);
          }, 300);
          setSignIn(true);
        } else {
          setUserObj(null);
          setSignIn(false);
        }
        setInit(true);
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
