/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { keyframes } from 'styled-components';
import { color } from '@/theme/color';

export const ListContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  margin-top: 24px;
`;

const popIn = keyframes`
0%{
  visibility: hidden;
  transform : scale(0.6) translateY(-8px);
}
100%{
  visibility: visible;
  transform : none;
}
`;

interface ItemProps {
  bgUri?: string;
  delay: number;
}

export const ListItem = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 10rem;
  height: 10rem;
  border-radius: 1rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  margin-bottom: 12px;
  overflow: hidden;
  margin: 0.4rem;

  box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.4s, background-size 0.4s;
  z-index: 0;
  background-image: url(${(props: ItemProps) =>
    props.bgUri
      ? props.bgUri
      : 'https://1seok2.github.io/CSS-exercises/assets/tranditional/beauty-1822519_640.jpg'});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  animation: ${popIn} 0.2s ${props => props.delay * 80}ms
    both ease-in;

  &:hover {
    box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.9);
    background-size: 110%;
    transition: box-shadow 0.4s, background-size 0.4s;
  }

  @media (max-width: 475px) {
    max-width: 9.2rem;
    height: 9.2rem;
  }
  @media (max-width: 427px) {
    max-width: 8rem;
    height: 8rem;
  }
  @media (max-width: 385px) {
    max-width: 6.8rem;
    height: 6.8rem;
  }
  @media (max-width: 344px) {
    max-width: 6rem;
    height: 6rem;
  }
  @media (max-width: 320px) {
    max-width: none;
    width: 80%;
    height: 80%;
  }
`;

export const Like = styled.button`
  padding: 3px 5px;
  background-color: ${color.date};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescContainer = styled.div`
  height: 25%;
  margin-top: 59%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 3%;
  border-radius: 6px;
  @media (max-width: 427px) {
    height: 32%;
  }
`;

export const Group = styled.h2`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 6px;
  color: #fafafa;
  text-align: left;
  margin: 4px;

  @media (max-width: 427px) {
    font-size: 13px;
  }
  @media (max-width: 385px) {
    font-size: 11px;
  }
  @media (max-width: 344px) {
    font-size: 9px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

export const NickName = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #fafafa;
  text-align: left;
  margin-left: 4px;

  @media (max-width: 427px) {
    font-size: 16px;
  }
  @media (max-width: 385px) {
    font-size: 14px;
  }
  @media (max-width: 344px) {
    font-size: 13px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const HandImage = styled.div`
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;
