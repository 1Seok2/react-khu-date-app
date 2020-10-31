import React from 'react';
import Select from 'react-select';
import * as s from '../style/SelfStyled';
import { OptionType } from '../../type';
import { locationList } from '../../data';
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

const LocationOptions: OptionType[] = locationList.map(
  item => {
    let jsonObj = {
      value: item,
      label: item,
    };
    return jsonObj;
  },
);

const LocationSelect = ({ value, onChange }: any) => {
  return (
    <s.Container>
      <s.InputContainer>
        <s.InputLabelText>
          본인이 사는 지역을 선택해주세요.
        </s.InputLabelText>
        <Select
          onChange={onChange}
          value={{ label: value, value: value }}
          styles={customStyles}
          options={LocationOptions}
        />
      </s.InputContainer>
    </s.Container>
  );
};

export default LocationSelect;
