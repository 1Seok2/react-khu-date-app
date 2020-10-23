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

import { AuthPresenterProps } from '../type';

const SignInPresenter = ({
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
        <SignUpButton to="/auth/signup">
          계정이 없으신가요?
        </SignUpButton>
        <SubmitButton>로그인</SubmitButton>
      </div>
    </SignInForm>
  </SignWrapper>
);

export default SignInPresenter;
