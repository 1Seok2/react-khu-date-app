/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const IntroSection = styled.section`
  background: #fffafa;
  height: 100vh;
  width: 768px;
  transition: opacity 0.5s;
`;

export const ContentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const ArrowWrapper = styled.div`
  align-items: center;
`;

export const ContentText = styled.p`
  font-size: 40px;
`;
