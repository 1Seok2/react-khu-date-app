/**
 * @description 로그인 창
 */

import TextInput from '@/components/util/textinput';
import React from 'react';
import * as s from '../Auth.styled';

import { AuthPresenterProps } from '../type';

const SignInPresenter = ({
  inputList,
  onChange,
  onSubmit,
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
      <div>
        <s.ChangeAuthButton to="/auth/signup">
          계정이 없으신가요?
        </s.ChangeAuthButton>
        <s.SubmitButton>로그인</s.SubmitButton>
      </div>
    </s.AuthForm>
  </s.AuthWrapper>
);

export default SignInPresenter;
