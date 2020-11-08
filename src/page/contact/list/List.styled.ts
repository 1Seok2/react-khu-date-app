/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { keyframes } from 'styled-components';
import { color } from '@/theme/color';
import { SmallTabletWidth } from '@/theme/width';

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  margin-top: 24px;

  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background-color: white;
`;

export const Title = styled.h1`
  margin-top: 32px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 400;
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
  width: 33%;
  height: calc(100vw * 0.33);
  max-height: calc(767px * 0.33);
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 1px;

  /* box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.5); */
  transition: background-size 0.4s;
  z-index: 0;
  ${(props: ItemProps) =>
    props.bgUri
      ? `
  background-image : url(${props.bgUri});
  background-size : cover;
  background-position : center;
  background-repeat : no-repeat;
  `
      : null}

  /* animation : ${popIn} .2s ${props =>
    props.delay * 80}ms both ease-in; */

  /* &:hover {
    background-size: 110%;
    transition: background-size 0.4s;
  } */

  /* border: 1px solid ${color.grayborder}; */
  border: 1px solid white;

  @media (max-width: 600px) {
    width: 32.7%;
    height: calc(100vw * 0.327);
  }

  @media (max-width: 320px) {
    width: 32.4%;
    height: calc(100vw * 0.324);
  }
`;
