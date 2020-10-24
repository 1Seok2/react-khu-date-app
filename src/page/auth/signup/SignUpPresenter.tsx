/**
 * @description 회원가입 창
 */

import React from 'react';
import * as s from '../Auth.styled';

import TextInput from '@/components/util/textinput';

import { AuthPresenterProps } from '../type';

const SignUpPresenter = ({
  inputList,
  onChange,
  onSubmit,
  userInfo,
  setInfo,
  error,
}: AuthPresenterProps): JSX.Element => (
  <s.AuthWrapper>
    <s.AuthTitle>경희의 손개팅</s.AuthTitle>
    <s.AuthForm onSubmit={onSubmit}>
      {inputList.map((item: Record<string, string>) => (
        <TextInput
          key={item.name}
          name={item.name}
          value={item.value}
          placeholder={item.placeholder}
          onChange={onChange}
          required={true}
        />
      ))}
      <div>{error}</div>
      <>
        <s.ChangeAuthButton to="/auth/signin">
          계정이 이미 있으신가요?
        </s.ChangeAuthButton>
        <s.SubmitButton>회원가입</s.SubmitButton>
      </>
    </s.AuthForm>
  </s.AuthWrapper>
);

export default SignUpPresenter;
