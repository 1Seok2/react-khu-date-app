/**
 * @description 로그인 창
 */

import TextInput from '@/components/util/textinput';
import React from 'react';
import {
  AuthWrapper,
  AuthForm,
  AuthTitle,
  SubmitButton,
  ChangeAuthButton,
} from '../Auth.styled';

import { AuthPresenterProps } from '../type';

const SignInPresenter = ({
  inputList,
  onChange,
  onSubmit,
  error,
}: AuthPresenterProps): JSX.Element => (
  <AuthWrapper>
    <AuthTitle>경희의 손개팅</AuthTitle>
    <AuthForm onSubmit={onSubmit}>
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
      <div>
        <ChangeAuthButton to="/auth/signup">
          계정이 없으신가요?
        </ChangeAuthButton>
        <SubmitButton>로그인</SubmitButton>
      </div>
    </AuthForm>
  </AuthWrapper>
);

export default SignInPresenter;
