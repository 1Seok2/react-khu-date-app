import React, { useState, useEffect } from 'react';
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';
import { ScriptDatas } from './data';
import ContentText from './ContentText';
import SelfIntroduce from './self/SelfIntroduceContainer';
import {
  IntroSection,
  ContentContainer,
  ArrowWrapper,
  KyoboFont,
} from './Intro.styled';

const Intro = ({ userObj, ...props }: any): JSX.Element => {
  const [introState, setIntroState] = useState({
    scriptIndex: ScriptDatas.length,
    scriptContent: ScriptDatas[0],
  });

  const [selfIntroState, setSelfIntroState] = useState(0);

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

  //이것들 나중에 한번에 하나의 함수로 관리하는게 나을듯
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

  const onClickSelfButton = (direction: number) => {
    setSelfIntroState(selfIntroState + direction);
  };

  return (
    <IntroSection>
      <KyoboFont />
      <ContentContainer>
        <ArrowWrapper>
          {introState.scriptIndex === 0 ? (
            ''
          ) : selfIntroState === 0 ? (
            <IoIosArrowBack
              size={32}
              color={'gray'}
              onClick={onClickPrevButton}
            />
          ) : (
            <IoIosArrowBack
              size={32}
              color={'gray'}
              onClick={() => onClickSelfButton(-1)}
            />
          )}
        </ArrowWrapper>
        {introState.scriptIndex < ScriptDatas.length ? (
          <ContentText
            content={introState.scriptContent}
          ></ContentText>
        ) : (
          <SelfIntroduce
            userObj={userObj}
            index={selfIntroState}
          />
        )}
        <ArrowWrapper>
          {userObj?.age &&
          introState.scriptIndex ===
            ScriptDatas.length - 1 ? (
            ''
          ) : selfIntroState === 6 ? (
            ''
          ) : introState.scriptIndex <
            ScriptDatas.length ? (
            <IoIosArrowForward
              size={32}
              color={'gray'}
              onClick={onClickNextButton}
            />
          ) : (
            <IoIosArrowForward
              size={32}
              color={'gray'}
              onClick={() => onClickSelfButton(1)}
            />
          )}
        </ArrowWrapper>
      </ContentContainer>
    </IntroSection>
  );
};

export default Intro;
