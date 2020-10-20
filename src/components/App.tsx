import React, { useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from '@/assets/global/GlobalStyle';

const App: React.FC = () => {
  const [isSignIn, setSignIn] = useState(false);

  return (
    <>
      <AppRouter isSignIn={isSignIn} />
      <GlobalStyle />
    </>
  );
};

export default App;
