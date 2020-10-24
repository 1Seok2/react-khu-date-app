/**
 * @description 로그인 창
 */

import React, { useState } from 'react';

import GetInputList from './GetInputList';
import SignInPresenter from './SignInPresenter';
import { UserAuthObj } from '../type';
import SignError from '../AuthError';
import { Auth } from '@/api/firebase-auth';

const SignIn = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserAuthObj>({
    email: '',
    password: '',
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

  const inputList: Record<string, string>[] = GetInputList(
    userInfo,
  );

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    let data;
    try {
      data = await Auth.SignIn(
        userInfo.email,
        userInfo.password,
      );
    } catch (err) {
      console.error(err);
      setError(SignError(err.message));
    } finally {
      if (data) {
        /* save info in db */
        // const { uid }: any = FirebaseAuth.currentUser;
        // const lastSignInAt: number = Date.now();
        // FirebaseRDB.ref(`users/${uid}`).update({
        //   lastSignInAt: lastSignInAt,
        // });
      }
    }
  };

  return (
    <SignInPresenter
      inputList={inputList}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default SignIn;
