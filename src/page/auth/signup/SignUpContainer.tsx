/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import { Auth } from '@/api/firebase-auth';
import { fbsetWithPathAndFormApi } from '@/api/firebase-set';

import { UserAuthObj } from '../type';

import GetInputList from './GetInputList';
import SignError from '../AuthError';

import SignUpPresenter from './SignUpPresenter';
import { FirebaseAuth } from '@/config/firebase.config';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserAuthObj>({
    email: '',
    password: '',
    name: '',
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
      data = await Auth.SignUp(
        userInfo.email,
        userInfo.password,
      );
    } catch (err) {
      console.error(err);
      setError(SignError(err.message));
    } finally {
      if (data) {
        /* save info in db */
        const createdAt: number = Date.now(); // 회원가입 생성 ms

        getUid().then(uid => {
          fbsetWithPathAndFormApi(`users/${uid}`, {
            email: userInfo.email,
            name: userInfo.name,
            createdAt: createdAt,
          });
        });
      }
    }
  };

  const getUid = async () => {
    const { uid }: any = FirebaseAuth.currentUser;
    console.log(uid);
    return uid;
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
