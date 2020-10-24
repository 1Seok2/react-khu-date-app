/**
 * @description 로그인 폼의 입력창들 정보 배열로 리턴
 */

import { UserAuthObj } from '../type';

const GetInputList = (
  user: UserAuthObj,
): Array<Record<string, string>> => [
  {
    name: 'email',
    value: user.email,
    placeholder: '이메일을 입력해주세요',
  },
  {
    name: 'password',
    value: user.password,
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    name: 'nickname',
    value: user.nickname || '',
    placeholder: '별명을 입력해주세요',
  },
  {
    name: 'name',
    value: user.name || '',
    placeholder: '이름을 입력해주세요',
  },
  {
    name: 'gender',
    value: user.gender || '',
    placeholder: '나이를 입력해주세요',
  },
  {
    name: 'age',
    value: user.age || '',
    placeholder: '나이를 입력해주세요',
  },
  {
    name: 'introduce',
    value: user.introduce || '',
    placeholder: '소개를 입력해주세요',
  },
];

export default GetInputList;
