/**
 * @description 로그인 창
 */

import React, { useState } from 'react';
import {
  SignWrapper,
  SignInForm,
  SignInTitle,
  SInput,
  SubmitButton,
  SignUpButton,
} from '../Auth.styled';

import GetInputList from './GetInputList';

const SignUp = (): JSX.Element => {
  const [userInfo, setInfo] = useState({
    email: '',
    password: '',
    nickname: '',
    name: '',
    age: '',
    introduce: '',
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const inputList = GetInputList(userInfo);

  return (
    <SignWrapper>
      <SignInTitle>경희의 손개팅</SignInTitle>
      <SignInForm>
        {inputList.map(item => (
          <SInput
            key={item.name}
            type={item.name}
            name={item.name}
            value={item.value}
            placeholder={item.placeholder}
            onChange={onChange}
            required
          />
        ))}
        <div>
          <SignUpButton to="/auth/signin">
            계정이 이미 있으신가요?
          </SignUpButton>
          <SubmitButton>회원가입</SubmitButton>
        </div>
      </SignInForm>
    </SignWrapper>
  );
};

export default SignUp;
