import { UserObj } from './../../components/util/usertype';
import { ValueType, OptionTypeBase } from 'react-select';
import { Option } from 'react-select/src/filters';

export interface ContentTextProps {
  content: String[];
}

export interface PrivateDataObject {
  nickname: string;
  gender: string;
  age: string;
  college: string;
  location: string;
  files: Array<File>;
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
  userObj: UserObj | null;
  index: number;
  privateData: PrivateDataObject;
  onClickGender: (item: number) => void;
  onChangeText: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onChangeCollege: (item: ValueType<OptionType>) => void;
  onChangeLocation: (item: ValueType<OptionType>) => void;
  onDropImage: any;
}

export interface SelfIntroduceContainerProps {
  userObj: UserObj | null;
  index: number;
}
