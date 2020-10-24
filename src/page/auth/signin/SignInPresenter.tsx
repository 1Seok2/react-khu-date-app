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
}: AuthPresenterProps): JSX.Element => (
  <AuthWrapper>
    <AuthTitle>경희의 손개팅</AuthTitle>
    <AuthForm>
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
      <>
        <ChangeAuthButton to="/auth/signup">
          계정이 없으신가요?
        </ChangeAuthButton>
        <SubmitButton>로그인</SubmitButton>
      </>
    </AuthForm>
  </AuthWrapper>
);

export default SignInPresenter;
