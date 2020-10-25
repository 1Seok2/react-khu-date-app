/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, {
  createGlobalStyle,
} from 'styled-components';

export const KyoboFont = createGlobalStyle`
  @font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

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
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding: 0 3%;
`;

export const ArrowWrapper = styled.div`
  align-items: center;
`;

export const ContentTextWrapper = styled.div`
  font-size: 32px;
  width: 100%;
  padding: 0 5%;
  line-height: 1.5;
`;

export const ContentTextParagraph = styled.p`
  margin-bottom: 3%;
  font-family: 'Kyobohand';
`;

//Self Introduce
export const SelfIntroduceFormat = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 5%;
  text-align: left;
`;

export const Title = styled.h1`
  margin-top: 10%;
  font-size: 32px;
  font-family: 'Kyobohand';
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Kyobohand';
`;

export const InputBundler = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  font-family: 'Kyobohand';
`;

export const Input = styled.input`
  margin: 0%;
`;

export const TextArea = styled.textarea``;
