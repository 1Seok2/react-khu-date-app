import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import Select, {
  ValueType,
  OptionTypeBase,
} from 'react-select';
import { SelfIntroducePresenterProps } from '../type';
import DropZone from './DropZone';
import {
  SelfIntroduceFormat,
  Title,
  InputWrapper,
  InputBundler,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from '../Intro.styled';

const SelfIntroducePresenter = ({
  privateData,
  onChangeSelectSex,
  collegeOptions,
  onChangeSelectCollege,
}: SelfIntroducePresenterProps): JSX.Element => {
  return (
    <SelfIntroduceFormat>
      <Title>본인을 소개해주세요.</Title>
      <InputWrapper>
        <InputBundler>
          <Label>성별</Label>
          <Select
            value={{
              value: privateData.sex,
              label: privateData.sex,
            }}
            onChange={onChangeSelectSex}
            options={[
              { label: '남성', value: 'M' },
              { label: '여성', value: 'F' },
            ]}
          />
        </InputBundler>
        <InputBundler>
          <Label>나이</Label>
          <Input></Input>
        </InputBundler>
        <InputBundler>
          <Label>단과대</Label>
          <Select
            value={{
              value: privateData.college,
              label: privateData.college,
            }}
            onChange={onChangeSelectCollege}
            options={collegeOptions}
          />
        </InputBundler>
        <InputBundler>
          <Label>사는 지역</Label>
          <Input></Input>
        </InputBundler>
        <InputBundler>
          <Label>손 사진</Label>
          <DropZone />
        </InputBundler>
        <InputBundler
          style={{
            alignItems: 'flex-start',
          }}
        >
          <Label>자기 소개</Label>
          <TextArea></TextArea>
        </InputBundler>
        <SubmitButton>제출하기</SubmitButton>
      </InputWrapper>
    </SelfIntroduceFormat>
  );
};

export default SelfIntroducePresenter;
