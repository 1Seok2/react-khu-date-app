/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import { FirebaseAuth } from '@/config/firebase.config';

import { UserSignUpObj } from '../type';
import SignUpPresenter from './SignUpPresenter';

import GetInputList from './GetInputList';
import SignError from '../SignError';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserSignUpObj>({
    email: '',
    password: '',
    nickname: '',
    name: '',
    age: '',
    introduce: '',
  });
  const [error, setError] = useState<string>('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const inputList = GetInputList(userInfo);

  const onSubmit = async () => {
    let data;
    try {
      data = await FirebaseAuth.createUserWithEmailAndPassword(
        userInfo.email,
        userInfo.password,
      );
    } catch (err) {
      console.error(err);
      setError(SignError(err.message));
    } finally {
      if (data) {
        /* save info in db */
      }
    }
  };

  return (
    <SignUpPresenter
      inputList={inputList}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignUpContainer;
