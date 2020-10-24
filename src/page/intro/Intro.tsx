import React, { useState, useEffect } from 'react';
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import { ScriptDatas } from './ScriptData';
import ContentText from './ContentText';
import SelfIntroduce from './SelfIntroduce';
import {
  IntroSection,
  ContentContainer,
  ArrowWrapper,
  KyoboFont,
} from './Intro.styled';

const Intro = (): JSX.Element => {
  const [introState, setIntroState] = useState({
    scriptIndex: 0,
    scriptContent: ScriptDatas[0],
  });

  //fade in effect
  const FadeInEffectOnText = () => {
    const target = document.querySelector('.fadeinTarget');
    if (target) {
      target.animate(
        [
          {
            //from
            opacity: 0,
          },
          {
            //to
            opacity: 1,
          },
        ],
        500,
      );
    }
  };

  const onClickNextButton = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
  ) => {
    setIntroState({
      scriptIndex: introState.scriptIndex + 1,
      scriptContent:
        ScriptDatas[introState.scriptIndex + 1],
    });
    FadeInEffectOnText();
  };

  const onClickPrevButton = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
  ) => {
    setIntroState({
      scriptIndex: introState.scriptIndex - 1,
      scriptContent:
        ScriptDatas[introState.scriptIndex - 1],
    });
    FadeInEffectOnText();
  };

  return (
    <IntroSection>
      <KyoboFont />
      <ContentContainer>
        <ArrowWrapper>
          {introState.scriptIndex > 0 && (
            <IoIosArrowBack
              size={24}
              onClick={onClickPrevButton}
            />
          )}
        </ArrowWrapper>
        {introState.scriptIndex < ScriptDatas.length ? (
          <ContentText
            content={introState.scriptContent}
          ></ContentText>
        ) : (
          <SelfIntroduce />
        )}
        <ArrowWrapper>
          {introState.scriptIndex < ScriptDatas.length && (
            <IoIosArrowForward
              size={24}
              onClick={onClickNextButton}
            />
          )}
        </ArrowWrapper>
      </ContentContainer>
    </IntroSection>
  );
};

export default Intro;
