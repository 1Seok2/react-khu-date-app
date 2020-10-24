/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import {
  FirebaseAuth,
  FirebaseRDB,
} from '@/config/firebase.config';

import { UserAuthObj } from '../type';
import SignUpPresenter from './SignUpPresenter';

import GetInputList from './GetInputList';
import SignError from '../AuthError';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserAuthObj>({
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

        FirebaseRDB.ref(`users/${uid}`).set({
          email: userInfo.email,
          nickname: userInfo.nickname,
          name: userInfo.name,
          gender: userInfo.gender,
          age: userInfo.age,
          introduce: userInfo.introduce,
          createdAt: createdAt,
          lastSignInAt: createdAt,
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
      error={error}
    />
  );
};

export default SignUpContainer;
