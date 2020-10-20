import React, { useState } from 'react';
import AppRouter from './Router';
import GlobalStyle from '@/assets/style/GlobalStyle';

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
