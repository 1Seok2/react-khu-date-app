/**
 * @description 회원가입 창
 */

import React from 'react';
import {
  SignWrapper,
  SignInForm,
  SignInTitle,
  SInput,
  SubmitButton,
  SignUpButton,
} from '../Auth.styled';

import { AuthPresenterProps } from '../type';

const SignUpPresenter = ({
  inputList,
  onChange,
  onSubmit,
}: AuthPresenterProps): JSX.Element => (
  <SignWrapper>
    <SignInTitle>경희의 손개팅</SignInTitle>
    <SignInForm>
      {inputList.map((item: Record<string, string>) => (
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

export default SignUpPresenter;
