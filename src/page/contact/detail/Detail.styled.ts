/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { keyframes } from 'styled-components';

const change = keyframes`
0%{
  display : none;
  opacity : 0.3;
  transform : scaleY(-8px);
}
1%{
  display : block;
}
100%{
  opacity : 1;
  transform : none;
}
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
  background-size: 18rem;
  background-repeat: no-repeat;
  height: 18rem;
  display: ${(props: ImageProps) =>
    props.current ? 'block' : 'none'};
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
    props.prev ? `left : 0;` : `right:0;`}

  padding : 10px;
  width: 42px;
  height: 42px;
  margin: 0;
`;
