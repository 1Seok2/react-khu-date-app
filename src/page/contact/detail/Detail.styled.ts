/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
import {
  SmallTabletWidth,
  SmartPhoneWidth,
} from '@/theme/width';
import styled, { keyframes } from 'styled-components';

const change = keyframes`
0%{
  opacity : 0;
  z-index : -1;
}
1%{
  transform : scaleY(-10%);
}
60%{
  transform : scale(10%);
}
100%{
  opacity : 1;
  transform : none;
  z-index : 1;
}
`;

export const HandImageSlider = styled.div`
  position: relative;
  /* background-color: rgba(222, 222, 222, 0.5); */
  text-align: center;
  height: 21rem;
`;

export const ImageWrappser = styled.div`
  width: 100%;
  max-width: 21rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-100%);
`;

interface ImageProps {
  uri?: string;
  current?: boolean;
}

export const ImageContainer = styled.div`
  ${(props: ImageProps) =>
    props.uri
      ? `
background-image: url(${`${props.uri}`});
`
      : `
background-image: url('https://1seok2.github.io/CSS-exercises/assets/tranditional/woman-1822646_640.jpg');`}
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 21rem;
  margin: 0;
  padding: 0;
  opacity: ${(props: ImageProps) =>
    props.current ? 1 : 0};
  animation: ${(props: ImageProps) =>
      props.current ? change : null}
    0.3s both ease-in;
  border: 1px solid ${color.grayborder};
  border-radius: 3px;
`;

interface ButtonProps {
  prev?: boolean;
}

export const StatusButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props: ButtonProps) =>
    props.prev ? `left : 1rem;` : `right:1rem;`}

  padding : 0px;
  width: 42px;
  height: 42px;
  margin: 0;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 1px 12px -3px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  &:focus {
    outline: none;
    background-color: ${color.datelight};
  }
  &:hover {
    background-color: ${color.datelight};
    transition: background-color 0.3s;
    cursor: pointer;
  }
  z-index: 1;
`;

export const ShowCount = styled.h3`
  width: 3rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  position: absolute;
  bottom: 4px;
  right: 1rem;
  padding: 3px;
  font-size: 12px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100vw;
  max-width: ${SmallTabletWidth};
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid lightgray;

  @media (max-width: ${SmartPhoneWidth}) {
    height: 42px;
  }
`;

interface SButtonProps {
  Btype?: string;
  bgColor?: string;
  color?: string;
  enable?: boolean;
}

export const SButton = styled.button`
  flex: 1;
  flex-grow: 1;
  background-color: ${(props: SButtonProps) =>
    props.Btype !== 'back' ? props.bgColor : '#fafafa'};
  color: ${(props: SButtonProps) =>
    props.Btype !== 'back' ? props.color : color.gray};
  border-radius: 0;
  height: 100%;

  &:focus {
    outline: none;
  }

  ${(props: SButtonProps) =>
    props.enable
      ? `
    background-color : ${color.datedark};
  `
      : `
    &:hover {
      cursor: pointer;
    background-color: ${(props: SButtonProps) =>
      props.Btype !== 'back' ? color.datelight : '#fff'};
    }
    `}
`;

/**
 * description
 */

export const DescContainer = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  padding: 0 12px;
  max-width: 28rem;
`;

export const Title = styled.h1`
  margin-bottom: 22px;
  margin-top: 30px;
  font-size: 20px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${color.grayborder};
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  margin-left: 8px;
  margin-right: 6px;
  width: 80px;
  font-size: 14px;
  font-weight: 400;
`;

export const Description = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

export const Empty = styled.div`
  height: 100px;
`;
