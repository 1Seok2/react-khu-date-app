import { FirebaseAuth } from '@/config/firebase.config';
import React from 'react';
import { Link } from 'react-router-dom';
import { Hello } from './Home.styled';

const Home = (): JSX.Element => (
  <>
    <Hello>home!!</Hello>
    <div>
      <Link to="/intro">Intro</Link>
    </div>
    <div>
      <Link to="/contact/list">이성 목록</Link>
    </div>
    <div>
      <Link to="/contact/detail">이성 디테일</Link>
    </div>
    <div>
      <Link to="/mypage/edit">내 정보 수정</Link>
    </div>
    <div>
      <Link to="/mypage/receive">받은 목록</Link>
    </div>
    <div>
      <Link to="/mypage/send">보낸 목록</Link>
    </div>
    <div>
      <button onClick={() => FirebaseAuth.signOut()}>
        signout
      </button>
    </div>
  </>
);

export default Home;
