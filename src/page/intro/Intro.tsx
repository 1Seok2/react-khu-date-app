import React, { useState, useEffect } from 'react';
import { ScriptDatas } from './IntroScript';
import {
  IntroSection,
  ContentContainer,
  ContentText,
} from './Intro.styled';

const Intro = (): JSX.Element => {
  const [introState, SetIntroState] = useState({
    scriptIndex: 0,
    scriptContent: '',
  });

  const onClickNextButton = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {};

  const onClickPrevButton = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {};

  useEffect(() => {});

  return (
    <IntroSection>
      <ContentContainer>
        <ContentText>
          안녕하세요. 경희의 손개팅입니다 :)
        </ContentText>
      </ContentContainer>
    </IntroSection>
  );
};

export default Intro;
