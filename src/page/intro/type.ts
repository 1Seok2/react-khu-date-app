import { ValueType, OptionTypeBase } from 'react-select';
import { Option } from 'react-select/src/filters';

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

export interface SelectOptionProps {
  value: OptionType;
  onChange: (item: ValueType<OptionType>) => void;
  options: any;
}

export interface SelfIntroducePresenterProps {
  privateData: PrivateDataObject;
  onChangeTextInput: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  onChangeSelectSex: (item: ValueType<OptionType>) => void;
  collegeOptions: any;
  onChangeSelectCollege: (
    item: ValueType<OptionType>,
  ) => void;
  onChangeSelectArea: (item: ValueType<OptionType>) => void;
}
