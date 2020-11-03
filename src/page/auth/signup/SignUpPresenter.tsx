/**
 * @description 회원가입 창
 */

import React from 'react';
import * as s from '../Auth.styled';

import { AuthPresenterProps } from '../type';

const SignUpPresenter = ({
  inputList,
  onChange,
  onSubmit,
  userInfo,
  setInfo,
  error,
  SNSLogin,
}: AuthPresenterProps): JSX.Element => (
  <s.AuthWrapper>
    <s.AuthTitle>경희의 손개팅</s.AuthTitle>
    <s.AuthForm onSubmit={SNSLogin}>
      {/* {inputList.map((item: Record<string, string>) => (
        <TextInput
          key={item.name}
          name={item.name}
          value={item.value}
          placeholder={item.placeholder}
          onChange={onChange}
          required={true}
        />
      ))} */}
      <div>{error}</div>
      {/* <>
        <s.ChangeAuthButton to="/auth/signin">
          계정이 이미 있으신가요?
        </s.ChangeAuthButton>
        <s.SubmitButton>학교 웹 메일로 로그인</s.SubmitButton>
      </> */}
      <s.SubmitButton>학교 웹 메일로 로그인</s.SubmitButton>
    </s.AuthForm>
  </s.AuthWrapper>
);

export default SignUpPresenter;
