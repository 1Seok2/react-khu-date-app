/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10%;
`;

export const ContainerTitle = styled.h1`
  font-size: 32px;
`;

export const ContentWrapper = styled.div``;

export const ContentBundler = styled.div`
  margin-top: 8%;
  display: flex;
  align-items: center;
`;

export const ContentLabel = styled.h2`
  width: 30%;
  font-size: 24px;
  font-weight: 500;
  color: gray;
`;

export const ContentValue = styled.div`
  font-size: 20px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ImageProps {
  uri?: string;
}

export const HandImage = styled.img`
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

  width: 20vh;
  height: 20vh;
  margin-bottom: 10%;
`;
