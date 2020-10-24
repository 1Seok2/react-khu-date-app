import React from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from '@/theme/color';

const key1 = keyframes`
0% {
  background-color: ${color.datedark};
}
33% {
  background-color : ${color.date};
}
50% {
  background-color: ${color.datelight};
}
83% {
  background-color: ${color.date};
}
100% {
  background-color: ${color.datedark};
}
`;

const key2 = keyframes`
0% {
  background-color: ${color.date};
}
17% {
  background-color : ${color.datelight};
}
50% {
  background-color: ${color.date};
}
83% {
  background-color: ${color.datedark};
}
100% {
  background-color: ${color.date};
}
`;

const key3 = keyframes`
0% {
  background-color: ${color.datelight};
}
17% {
  background-color : ${color.date};
}
50% {
  background-color: ${color.datedark};
}
83% {
  background-color: ${color.date};
}
100% {
  background-color: ${color.datelight};
}
`;

export const LoadingContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PropsType {
  typeKey: string;
}

export const Circle = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 2px;
  border-radius: 6px;
  animation: ${(props: PropsType) =>
      props.typeKey === 'key1'
        ? key1
        : props.typeKey === 'key2'
        ? key2
        : key3}
    0.5s infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Circle typeKey="key1"></Circle>
      <Circle typeKey="key2"></Circle>
      <Circle typeKey="key3"></Circle>
    </LoadingContainer>
  );
};

export default Loading;
