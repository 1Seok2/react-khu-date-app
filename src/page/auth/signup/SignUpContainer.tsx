/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import {
  FirebaseAuth,
  FirebaseRDB,
} from '@/config/firebase.config';

import { UserSignUpObj } from '../type';
import SignUpPresenter from './SignUpPresenter';

import GetInputList from './GetInputList';
import SignError from '../AuthError';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserSignUpObj>({
    email: '',
    password: '',
    nickname: '',
    name: '',
    gender: 'male',
    age: '',
    introduce: '',
  });
  const [error, setError] = useState<string>('');

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

  const onClickGender = (e: any, value: string): void => {
    setInfo({
      ...userInfo,
      gender: value,
    });
  };

  const inputList = GetInputList(userInfo);

  const onSubmit = async (e: any) => {
    e.preventDefault();
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
        const { uid }: any = FirebaseAuth.currentUser;

        const createdAt: number = Date.now(); // 회원가입 생성 ms

        FirebaseRDB.ref(
          `users/${userInfo.gender}/${uid}`,
        ).set({
          ...userInfo,
          createdAt: createdAt,
        });
      }
    }
  };

  return (
    <SignUpPresenter
      inputList={inputList}
      onChange={onChange}
      onSubmit={onSubmit}
      userInfo={userInfo}
      setInfo={setInfo}
    />
  );
};

export default SignUpContainer;
