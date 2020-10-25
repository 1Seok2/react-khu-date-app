import React, { useState, useEffect } from 'react';
import {
  SelfIntroduceFormat,
  Title,
  InputWrapper,
  InputBundler,
  Label,
  Input,
  TextArea,
} from './Intro.styled';

const SelfIntroduce = ({}): JSX.Element => {
  const [sex, setSex] = useState('남');

  return (
    <SelfIntroduceFormat>
      <Title>본인을 소개해주세요.</Title>
      <InputWrapper>
        <InputBundler>
          <Label>성별</Label>
          <Input type="radio" value="남"></Input>
        </InputBundler>
        <InputBundler>
          <Label>나이</Label>
          <Input></Input>
        </InputBundler>
        <InputBundler>
          <Label>단과대</Label>
          <Input></Input>
        </InputBundler>
        <InputBundler>
          <Label>사는 지역</Label>
          <Input></Input>
        </InputBundler>
        <InputBundler>
          <Label>손 사진</Label>
          <Input></Input>
        </InputBundler>
        <InputBundler>
          <Label>자기 소개</Label>
          <TextArea></TextArea>
        </InputBundler>
      </InputWrapper>
    </SelfIntroduceFormat>
  );
};

export default SelfIntroduce;
