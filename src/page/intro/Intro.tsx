import React, { useState, useEffect } from 'react';
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import { ScriptDatas } from './IntroScript';
import {
  IntroSection,
  ContentContainer,
  ContentText,
  ArrowWrapper,
} from './Intro.styled';

const Intro = (): JSX.Element => {
  const [introState, setIntroState] = useState({
    scriptIndex: 0,
    scriptContent: ScriptDatas[0],
  });

  const onClickNextButton = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
  ) => {
    setIntroState({
      scriptIndex: introState.scriptIndex + 1,
      scriptContent:
        ScriptDatas[introState.scriptIndex + 1],
    });
  };

  const onClickPrevButton = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
  ) => {
    setIntroState({
      scriptIndex: introState.scriptIndex - 1,
      scriptContent:
        ScriptDatas[introState.scriptIndex - 1],
    });
  };

  return (
    <IntroSection>
      <ContentContainer>
        <ArrowWrapper>
          {introState.scriptIndex > 0 && (
            <IoIosArrowBack onClick={onClickPrevButton} />
          )}
        </ArrowWrapper>
        <ContentText>
          {introState.scriptContent}
        </ContentText>
        <ArrowWrapper>
          {introState.scriptIndex <
            ScriptDatas.length - 1 && (
            <IoIosArrowForward
              onClick={onClickNextButton}
            />
          )}
        </ArrowWrapper>
      </ContentContainer>
    </IntroSection>
  );
};

export default Intro;
