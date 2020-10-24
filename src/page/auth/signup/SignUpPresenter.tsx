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
      {inputList.map((item: Record<string, string>) => {
        if (item.name === 'introduce') return null;
        else if (item.name === 'gender')
          return (
            <s.GenderWrapper key={item.name}>
              <s.ChangeGender
                current={userInfo?.gender === 'male'}
                onClick={() =>
                  setInfo({
                    ...userInfo,
                    gender: 'male',
                  })
                }
              >
                남성
              </s.ChangeGender>
              <s.ChangeGender
                current={userInfo?.gender === 'female'}
                onClick={() =>
                  setInfo({
                    ...userInfo,
                    gender: 'female',
                  })
                }
              >
                여성
              </s.ChangeGender>
            </s.GenderWrapper>
          );
        else
          return (
            <TextInput
              key={item.name}
              name={item.name}
              value={item.value}
              placeholder={item.placeholder}
              onChange={onChange}
              required={true}
            />
          );
      })}
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
