/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  text-align: center;
`;

interface ItemProps {
  bgUri?: string;
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
  transition: box-shadow 0.4s;
  z-index: 0;
  ${(props: ItemProps) =>
    props.bgUri
      ? `
  background-image : url(${props.bgUri});
  background-size : 100%;
  background-position : center;
  background-repeat : no-repeat;
  `
      : null}

  &:hover {
    box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 0.9);
    transition: box-shadow 0.4s;
  }

  @media (max-width: 475px) {
    max-width: 8rem;
    height: 8rem;
  }
  @media (max-width: 405px) {
    max-width: 6rem;
    height: 6rem;
  }
  @media (max-width: 320px) {
    max-width: 5.3rem;
    height: 5.3rem;
  }
  @media (max-width: 295px) {
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

export const Group = styled.h2`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 6px;
  color: #fafafa;
  text-align: left;
  margin: 4px;
`;

export const NickName = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: #fafafa;
  text-align: left;
  margin-left: 4px;
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
