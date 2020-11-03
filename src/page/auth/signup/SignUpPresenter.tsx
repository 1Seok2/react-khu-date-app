/**
 * @description 회원가입 창
 */

import Toast from '@/components/util/toast';
import React from 'react';
import * as s from '../Auth.styled';

import { AuthPresenterProps } from '../type';

const SignUpPresenter = ({
  SNSLogin,
  error,
  setError,
  show,
  setShow,
}: AuthPresenterProps): JSX.Element => (
  <>
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
        <s.SubmitButton>
          학교 웹 메일로 로그인
        </s.SubmitButton>
      </s.AuthForm>
    </s.AuthWrapper>
    {show && (
      <Toast
        message="학교 웹 메일을 이용하세요"
        setShow={setShow}
      />
    )}
    {error && (
      <Toast message="로그인 실패" setShow={setError} />
    )}
  </>
);

export default SignUpPresenter;
