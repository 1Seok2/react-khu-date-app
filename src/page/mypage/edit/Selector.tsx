import React from 'react';
import Select from 'react-select';
import {
  KhuCollegeList,
  locationList,
} from '../../intro/data';
import { OptionType } from '../../intro/type';

const collegeOptions: OptionType[] = KhuCollegeList.map(
  item => {
    let jsonObj = {
      value: item,
      label: item,
    };
    return jsonObj;
  },
);

const LocationOptions: OptionType[] = locationList.map(
  item => {
    let jsonObj = {
      value: item,
      label: item,
    };
    return jsonObj;
  },
);

const Selector = ({
  optionName,
  onChangeSelector,
}: any) => {
  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      width: 150,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontFamily: 'KyoboHand',
      fontSize: 16,
    }),
  };

  return (
    <Select
      options={
        optionName === 'college'
          ? collegeOptions
          : LocationOptions
      }
      onChange={item => onChangeSelector(optionName, item)}
      styles={customStyles}
    ></Select>
  );
};
export default Selector;
