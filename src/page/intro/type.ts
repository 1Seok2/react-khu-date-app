import { ValueType, OptionTypeBase } from 'react-select';

export interface ContentTextProps {
  content: String[];
}

export interface PrivateDataObject {
  sex: string;
  age: string;
  college: string;
  area: string;
  introduce: string;
}

export interface OptionType {
  value: string;
  label: string;
}

export interface SelfIntroducePresenterProps {
  privateData: PrivateDataObject;
  onChangeSelectSex: (item: ValueType<OptionType>) => void;
  collegeOptions: any;
  onChangeSelectCollege: (
    item: ValueType<OptionType>,
  ) => void;
}
