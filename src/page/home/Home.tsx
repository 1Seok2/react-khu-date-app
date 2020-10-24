import React from 'react';
import { Link } from 'react-router-dom';
import { Hello } from './Home.styled';

const Home = (): JSX.Element => (
  <>
    <Hello>home!!</Hello>
    <div>
      <Link to="/contact/list">zzz</Link>
    </div>
    <div>
      <Link to="/contact/detail">zzz</Link>
    </div>
    <div>
      <Link to="/mypage/edit">zzz</Link>
    </div>
    <div>
      <Link to="/mypage/receive">zzz</Link>
    </div>
    <div>
      <Link to="/mypage/send">zzz</Link>
    </div>
  </>
);

export default Home;
