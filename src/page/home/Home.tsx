/**
 * @description home 화면
 */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/util/logo';
import * as s from './Home.styled';

const Home = (): JSX.Element => (
  <s.HomeImageContainer>
    <Link to="/intro">Intro</Link>
    <img src={Logo} width="240px" height="240px" />
  </s.HomeImageContainer>
);

export default Home;
