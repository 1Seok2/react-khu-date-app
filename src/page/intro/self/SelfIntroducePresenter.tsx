import React from 'react';
import { SelfIntroducePresenterProps } from '../type';
import NickNameInput from './nickname/NickNameInput';
import GenderSelect from './gender/GenderSelect';
import AgeSelect from './age/AgeSelect';
import CollegeSelect from './college/CollegeSelect';
import LocationSelect from './location/LocationSelect';
import HandImageDrop from './hand/HandImageDrop';
import Submit from './submit/Submit';
import {
  SelfIntroduceFormat,
  Title,
} from '../Intro.styled';

const SelfIntroducePresenter = ({
  userObj,
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
          <NickNameInput
            value={privateData.nickname}
            onChange={onChangeText}
          ></NickNameInput>
        );

      case 1:
        return (
          <GenderSelect
            value={privateData.gender}
            onClick={onClickGender}
          ></GenderSelect>
        );
      case 2:
        return (
          <AgeSelect
            value={privateData.age}
            onChange={onChangeText}
          ></AgeSelect>
        );
      case 3:
        return (
          <CollegeSelect
            value={privateData.college}
            onChange={onChangeCollege}
          ></CollegeSelect>
        );
      case 4:
        return (
          <LocationSelect
            value={privateData.location}
            onChange={onChangeLocation}
          ></LocationSelect>
        );
      case 5:
        return (
          <HandImageDrop
            files={privateData.files}
            onDrop={onDropImage}
          ></HandImageDrop>
        );
      case 6:
        return (
          <Submit
            userObj={userObj}
            privateData={privateData}
          />
        );

      default:
        break;
    }
  };

  return (
    <SelfIntroduceFormat>
      {/* <Title>본인을 소개해주세요.</Title> */}
      {SelfIntroduceState(index)}
    </SelfIntroduceFormat>
  );
};

export default SelfIntroducePresenter;
