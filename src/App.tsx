import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from '@/assets/global/GlobalStyle';
import { FirebaseAuth } from './config/firebase.config';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
const App: React.FC = () => {
  const [isSignIn, setSignIn] = useState(true);
=======
interface UserObj {
  displayName: string | null;
  uid: string | null;
  updateProfile: any;
}

const App: React.FC = (): JSX.Element => {
  const [isSignIn, setSignIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState<UserObj | null>({
    displayName: '',
    uid: '',
    updateProfile: '',
  });

  /**
   * 로그인 상태 변경 감지
   */
  useEffect(() => {
    FirebaseAuth.onAuthStateChanged(
      (user: firebase.User | null): void => {
        if (user) {
          setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args: any): Promise<void> =>
              user.updateProfile(args),
          });
          setSignIn(true);
        } else {
          setUserObj(null);
          setSignIn(false);
        }
        setInit(true);
      },
    );
  }, []);
>>>>>>> e52c30707c35f4993c927a031938153b20118fe4

  return (
    <>
      {init && (
        <BrowserRouter>
          <AppRouter
            isSignIn={isSignIn}
            userObj={userObj}
          />
          <GlobalStyle />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
