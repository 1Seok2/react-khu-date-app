import React from 'react';
import Select from 'react-select';
import * as s from '../style/SelfStyled';
import { OptionType } from '../../type';
import { KhuCollegeList } from '../../data';
import { color } from '../../../../theme/color';

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: 300,
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: 10,
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    minHeight: 150,
    justifyContent: 'space-around',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontFamily: 'KyoboHand',
    fontSize: 32,
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    backgroundColor: color.pointcolorlight,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  }),
};

const collegeOptions: OptionType[] = KhuCollegeList.map(
  item => {
    let jsonObj = {
      value: item,
      label: item,
    };
    return jsonObj;
  },
);

const CollegeSelect = ({ onChange }: any) => {
  return (
    <s.Container>
      <s.InputContainer>
        <s.InputLabelText>
          본인의 단과대를 선택해주세요.
        </s.InputLabelText>
        <Select
          styles={customStyles}
          onChange={onChange}
          options={collegeOptions}
        />
      </s.InputContainer>
    </s.Container>
  );
};

export default CollegeSelect;
