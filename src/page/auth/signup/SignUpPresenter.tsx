/**
 * @description 회원가입 창
 */

import React from 'react';
import {
  AuthWrapper,
  AuthForm,
  AuthTitle,
  SubmitButton,
  ChangeAuthButton,
  GenderWrapper,
  ChangeGender,
} from '../Auth.styled';

import TextArea from '@/components/util/textarea';
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
  <AuthWrapper>
    <AuthTitle>경희의 손개팅</AuthTitle>
    <AuthForm onSubmit={onSubmit}>
      {inputList.map((item: Record<string, string>) => {
        if (item.name === 'introduce') return null;
        else if (item.name === 'gender')
          return (
            <GenderWrapper key={item.name}>
              <ChangeGender
                current={userInfo?.gender === 'male'}
                onClick={() =>
                  setInfo({
                    ...userInfo,
                    gender: 'male',
                  })
                }
              >
                남성
              </ChangeGender>
              <ChangeGender
                current={userInfo?.gender === 'female'}
                onClick={() =>
                  setInfo({
                    ...userInfo,
                    gender: 'female',
                  })
                }
              >
                여성
              </ChangeGender>
            </GenderWrapper>
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
        <ChangeAuthButton to="/auth/signin">
          계정이 이미 있으신가요?
        </ChangeAuthButton>
        <SubmitButton>회원가입</SubmitButton>
      </>
    </AuthForm>
  </AuthWrapper>
);

export default SignUpPresenter;
