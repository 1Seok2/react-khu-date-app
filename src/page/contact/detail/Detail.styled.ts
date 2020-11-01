/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
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
  background-color: rgba(222, 222, 222, 0.5);
  text-align: center;
  height: 18rem;
`;

export const ImageWrappser = styled.div`
  width: 100%;
  max-width: 18rem;
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
  height: 18rem;
  margin: 0;
  padding: 0;
  opacity: ${(props: ImageProps) =>
    props.current ? 1 : 0};
  animation: ${(props: ImageProps) =>
      props.current ? change : null}
    0.3s both ease-in;
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
  right: 4px;
  padding: 3px;
  font-size: 12px;
  font-weight: 500;
`;
