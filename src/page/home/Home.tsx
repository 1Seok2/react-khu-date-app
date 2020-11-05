/**
 * @description home 화면
 */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (): JSX.Element => (
  <>
    <div>
      <Link to="/intro">Intro</Link>
    </div>
  </>
);

export default Home;
