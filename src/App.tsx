import React, { useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from '@/assets/global/GlobalStyle';

const App: React.FC = () => {
  const [isSignIn, setSignIn] = useState(true);

  return (
    <>
      <AppRouter isSignIn={isSignIn} />
      <GlobalStyle />
    </>
  );
};

export default App;
