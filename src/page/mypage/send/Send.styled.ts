/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { keyframes } from 'styled-components';
import { color } from '@/theme/color';
import {
  SmallTabletWidth,
  SmartPhoneWidth,
} from '@/theme/width';
import { Link } from 'react-router-dom';

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
  margin-top: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  delay?: number;
  read?: boolean;
}

export const ListItem = styled.div`
  width: 90%;
  height: calc(100vw * 0.15);
  min-height: 52px;
  max-height: calc(${SmallTabletWidth} * 0.15);
  margin-bottom: calc(${SmallTabletWidth} * 0.03);
  border-radius: 10px;

  background-color: ${props =>
    props.read
      ? 'rgb(202, 123, 103,0.3)'
      : 'rgba(202, 123, 103,0.8)'};
  animation: ${popIn} 0.2s
    ${(props: ItemProps) =>
      props.delay ? props.delay * 80 : 0}ms
    both ease-in;
`;

export const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 24px;
  margin: 0 5%;
  color: ${(props: ItemProps) =>
    props.read ? color.gray : color.grayborder};
  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 40px;
    margin: 0 3%;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

export const Strong = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${color.black};
  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 24px;
  }
`;

export const FixDesc = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${(props: ItemProps) =>
    props.read ? color.gray : color.grayborder};
  margin-left: 4px;
  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 24px;
  }
`;

export const DateContainer = styled.div`
  margin-right: 5%;
  width: 60px;
  @media (min-width: ${SmartPhoneWidth}) {
    width: 80px;
  }
`;

export const Date = styled.h3`
  font-size: 10px;
  font-weight: 400;
  color: ${(props: ItemProps) =>
    props.read ? color.gray : color.grayborder};
  width: 100%;
  text-align: right;
  margin-bottom: 8px;
  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 20px;
  }
`;

export const Read = styled.h5`
  font-size: 10px;
  font-weight: ${(props: ItemProps) =>
    props.read ? 300 : 400};
  color: ${props =>
    props.read ? color.gray : color.black};
  width: 100%;
  text-align: right;
  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 20px;
  }
`;
