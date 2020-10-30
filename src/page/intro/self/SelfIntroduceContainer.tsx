import React, { useState, useEffect } from 'react';
import Select, {
  ValueType,
  OptionTypeBase,
} from 'react-select';
import {
  PrivateDataObject,
  OptionType,
  SelfIntroduceContainerProps,
} from '../type';
import { KhuCollegeList } from '../data';
import SelfIntroducePresenter from './SelfIntroducePresenter';

//단과대 리스트 ReactSelect에서 사용할 수 있도록 OptionType으로 변환해주기
const collegeOptions: OptionType[] = KhuCollegeList.map(
  item => {
    let jsonObj = {
      value: item,
      label: item,
    };
    return jsonObj;
  },
);

const SelfIntroduceContainer = ({
  index,
}: SelfIntroduceContainerProps): JSX.Element => {
  const [privateData, setPrivateData] = useState<
    PrivateDataObject
  >({
    gender: '',
    age: '',
    college: '',
    area: '',
    introduce: '',
  });

  const onClickGender = (gender: any) => {
    setPrivateData({
      ...privateData,
      gender: gender,
    });
    console.log(privateData.gender);
  };

  const onChangeTextInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    if (e.target.name === 'age') {
      setPrivateData({
        ...privateData,
        age: e.target.value,
      });
    } else if (e.target.name === 'introduce') {
      setPrivateData({
        ...privateData,
        introduce: e.target.value,
      });
    }
  };

  const onChangeSelectSex = (
    selectedSex: ValueType<OptionTypeBase>,
  ) => {
    const { value }: any = selectedSex;
    setPrivateData({
      ...privateData,
      gender: value,
    });
  };

  const onChangeSelectCollege = (
    selectedCollege: ValueType<OptionTypeBase>,
  ) => {
    const { value }: any = selectedCollege;
    setPrivateData({
      ...privateData,
      college: value,
    });
  };

  const onChangeSelectArea = (
    selectedArea: ValueType<OptionTypeBase>,
  ) => {
    const { value }: any = selectedArea;
    setPrivateData({
      ...privateData,
      area: value,
    });
  };

  const onChangeInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {};

  return (
    <SelfIntroducePresenter
      index={index}
      privateData={privateData}
      onChangeTextInput={onChangeTextInput}
      onChangeSelectSex={onChangeSelectSex}
      collegeOptions={collegeOptions}
      onChangeSelectCollege={onChangeSelectCollege}
      onChangeSelectArea={onChangeSelectArea}
      onClickGender={onClickGender}
    />
  );
};

export default SelfIntroduceContainer;
