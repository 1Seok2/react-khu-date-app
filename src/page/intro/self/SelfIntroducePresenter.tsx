import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import Select from 'react-select';
import { SelfIntroducePresenterProps } from '../type';
import DropZone from './DropZone';
import SelectOption from './SelectOption';
import GenderSelect from './gender/GenderSelect';
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
  index,
  privateData,
  onChangeTextInput,
  onChangeSelectSex,
  collegeOptions,
  onChangeSelectCollege,
  onChangeSelectArea,
  onClickGender,
}: SelfIntroducePresenterProps): JSX.Element => {
  const SelfIntroduceState = (index: number) => {
    switch (index) {
      case 0:
        return (
          <GenderSelect
            onClickGender={onClickGender}
          ></GenderSelect>
        );
      default:
        break;
    }
  };

  return (
    <SelfIntroduceFormat>
      <Title>본인을 소개해주세요.</Title>
      {SelfIntroduceState(index)}
    </SelfIntroduceFormat>
  );
};

export default SelfIntroducePresenter;
