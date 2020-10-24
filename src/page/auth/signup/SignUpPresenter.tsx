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
}: AuthPresenterProps): JSX.Element => (
  <AuthWrapper>
    <AuthTitle>경희의 손개팅</AuthTitle>
    <AuthForm onSubmit={onSubmit}>
      {inputList.map((item: Record<string, string>) => {
        if (item.name === 'introduce')
          return (
            <TextArea
              key={item.name}
              name={item.name}
              value={item.value}
              placeholder={item.placeholder}
              onChange={onChange}
              required={true}
            />
          );
        else if (item.name === 'gender')
          return (
            <div key={item.name}>
              <a
                onClick={() =>
                  setInfo({
                    ...userInfo,
                    gender: 'male',
                  })
                }
              >
                남성 (male)
              </a>
              <a
                onClick={() =>
                  setInfo({
                    ...userInfo,
                    gender: 'female',
                  })
                }
              >
                여성 (female)
              </a>
            </div>
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
