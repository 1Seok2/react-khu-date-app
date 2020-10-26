import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import Select from 'react-select';
import { SelfIntroducePresenterProps } from '../type';
import DropZone from './DropZone';
import SelectOption from './SelectOption';
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
  onChangeTextInput,
  onChangeSelectSex,
  collegeOptions,
  onChangeSelectCollege,
  onChangeSelectArea,
}: SelfIntroducePresenterProps): JSX.Element => {
  return (
    <SelfIntroduceFormat>
      <Title>본인을 소개해주세요.</Title>
      <InputWrapper>
        <InputBundler>
          <Label>성별</Label>
          <SelectOption
            value={{
              value: privateData.sex,
              label: privateData.sex,
            }}
            onChange={onChangeSelectSex}
            options={[
              { label: '남성', value: '남자' },
              { label: '여성', value: '여자' },
            ]}
          />
        </InputBundler>
        <InputBundler>
          <Label>나이</Label>
          <Input
            name={'age'}
            onChange={onChangeTextInput}
          ></Input>
        </InputBundler>
        <InputBundler>
          <Label>단과대</Label>
          <SelectOption
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
          <SelectOption
            value={{
              value: privateData.area,
              label: privateData.area,
            }}
            onChange={onChangeSelectArea}
            options={[
              { label: '서울', value: '서울' },
              { label: '경기', value: '경기' },
            ]}
          />
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
          <TextArea
            name={'introduce'}
            onChange={onChangeTextInput}
          ></TextArea>
        </InputBundler>
        <SubmitButton>제출하기</SubmitButton>
      </InputWrapper>
    </SelfIntroduceFormat>
  );
};

export default SelfIntroducePresenter;
