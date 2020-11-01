/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface ImageProps {
  uri?: string;
}

export const ImageContainer = styled.div`
  ${(props: ImageProps) =>
    props.uri
      ? `
background-image: url(${`${props.uri}`});
`
      : `
background-image: url('https://1seok2.github.io/CSS-exercises/assets/tranditional/woman-1822646_640.jpg');`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 20rem;
  max-height: 28rem;
`;
