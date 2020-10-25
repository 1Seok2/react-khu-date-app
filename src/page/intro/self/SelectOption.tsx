import React from 'react';
import Select from 'react-select';
import { SelectOptionProps } from '../type';

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: 200,
  }),
};

const SelectOption = ({
  value,
  onChange,
  options,
}: SelectOptionProps) => {
  return (
    <Select
      styles={customStyles}
      value={value}
      onChange={onChange}
      options={options}
    />
  );
};

export default SelectOption;
