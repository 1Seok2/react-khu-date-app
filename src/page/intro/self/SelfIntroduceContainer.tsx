import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import Select, {
  ValueType,
  OptionTypeBase,
} from 'react-select';
import {
  PrivateDataObject,
  OptionType,
  SelfIntroduceContainerProps,
} from '../type';
import SelfIntroducePresenter from './SelfIntroducePresenter';

//단과대 리스트 ReactSelect에서 사용할 수 있도록 OptionType으로 변환해주기

const SelfIntroduceContainer = React.memo(
  ({
    userObj,
    index,
  }: SelfIntroduceContainerProps): JSX.Element => {
    const [privateData, setPrivateData] = useState<
      PrivateDataObject
    >({
      nickname: '',
      gender: '',
      age: '',
      college: '',
      location: '',
      files: [],
    });

    const onClickGender = (gender: any) => {
      setPrivateData({
        ...privateData,
        gender: gender,
      });
      console.log(privateData.gender);
    };

    const onChangeCollege = (college: any) => {
      setPrivateData({
        ...privateData,
        college: college.value,
      });
    };

    const onChangeText = (
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      if (e.target.name === 'age') {
        setPrivateData({
          ...privateData,
          age: e.target.value,
        });
      } else if (e.target.name === 'nickname') {
        setPrivateData({
          ...privateData,
          nickname: e.target.value,
        });
      }
    };

    const onChangeLocation = (
      location: ValueType<OptionTypeBase>,
    ) => {
      const { value }: any = location;
      setPrivateData({
        ...privateData,
        location: value,
      });
    };

    const onDropImage = useCallback(
      (acceptedFiles: Array<File>) => {
        if (
          privateData.files.push.apply(
            privateData.files,
            acceptedFiles,
          ) > 3
        ) {
          while (privateData.files.length > 3) {
            privateData.files.shift();
          }
        }
        console.log(privateData.files);
      },
      [],
    );

    return (
      <SelfIntroducePresenter
        userObj={userObj}
        index={index}
        privateData={privateData}
        onClickGender={onClickGender}
        onChangeText={onChangeText}
        onChangeCollege={onChangeCollege}
        onChangeLocation={onChangeLocation}
        onDropImage={onDropImage}
      />
    );
  },
);

export default React.memo(SelfIntroduceContainer);
