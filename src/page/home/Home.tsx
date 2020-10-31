import { FirebaseAuth } from '@/config/firebase.config';
import React from 'react';
import { Link } from 'react-router-dom';
import { Hello } from './Home.styled';

const Home = (): JSX.Element => (
  <>
    <div>
      <Link to="/intro">Intro</Link>
    </div>
  </>
);

export default Home;
