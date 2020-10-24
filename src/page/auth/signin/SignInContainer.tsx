/**
 * @description 로그인 창
 */

import React, { useState } from 'react';
import { FirebaseAuth } from '@/config/firebase.config';

import GetInputList from './GetInputList';
import SignInPresenter from './SignInPresenter';

const SignIn = (): JSX.Element => {
  const [userInfo, setInfo] = useState({
    email: '',
    password: '',
    nickname: '',
    name: '',
    age: '',
    introduce: '',
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const inputList: Record<string, string>[] = GetInputList(
    userInfo,
  );

  const onSubmit = async () => {
    let data;
    try {
      // data = await FirebaseAuth.createUserWithEmailAndPassword(
      //   userInfo.email,
      //   userInfo.password,
      // );
    } catch (err) {
      console.error(err);
    } finally {
      if (data) {
        /* save info in db */
      }
    }
  };

  return (
    <SignInPresenter
      inputList={inputList}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignIn;
