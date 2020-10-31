import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { SelfIntroducePresenterProps } from '../type';
import GenderSelect from './gender/GenderSelect';
import AgeSelect from './age/AgeSelect';
import CollegeSelect from './college/CollegeSelect';
import LocationSelect from './location/LocationSelect';
import HandImageDrop from './hand/HandImageDrop';
import {
  SelfIntroduceFormat,
  Title,
} from '../Intro.styled';

const SelfIntroducePresenter = ({
  index,
  privateData,
  onClickGender,
  onChangeText,
  onChangeCollege,
  onChangeLocation,
  onDropImage,
}: SelfIntroducePresenterProps): JSX.Element => {
  const SelfIntroduceState = (index: number) => {
    switch (index) {
      case 0:
        return (
          <GenderSelect
            onClick={onClickGender}
          ></GenderSelect>
        );
      case 1:
        return (
          <AgeSelect onChange={onChangeText}></AgeSelect>
        );
      case 2:
        return (
          <CollegeSelect
            onChange={onChangeCollege}
          ></CollegeSelect>
        );
      case 3:
        return (
          <LocationSelect
            onChange={onChangeLocation}
          ></LocationSelect>
        );
      case 4:
        return (
          <HandImageDrop
            files={privateData.files}
            onDrop={onDropImage}
          ></HandImageDrop>
        );
      case 5:
        console.log(privateData);
        break;
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
