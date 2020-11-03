/**
 * @description 로그인 창
 */

import React, { useState } from 'react';
import { Auth } from '@/api/firebase-auth';

import GetInputList from './GetInputList';
import SignInPresenter from './SignInPresenter';
import SignError from '../AuthError';

import { UserAuthObj } from '../type';

const SignIn = (): JSX.Element => {
  const [userInfo, setInfo] = useState<any>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<boolean>(false);

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

  // const onSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>,
  // ) => {
  //   e.preventDefault();
  //   let data;
  //   try {
  //     data = await Auth.SignIn(
  //       userInfo.email,
  //       userInfo.password,
  //     );
  //   } catch (err) {
  //     console.error(err);
  //     setError(SignError(err.message));
  //   } finally {
  //     if (data) {
  //       /* save info in db */
  //       // const { uid }: any = FirebaseAuth.currentUser;
  //       // const lastSignInAt: number = Date.now();
  //       // FirebaseRDB.ref(`users/${uid}`).update({
  //       //   lastSignInAt: lastSignInAt,
  //       // });
  //     }
  //   }
  // };

  return <SignInPresenter error={error} />;
};

export default SignIn;
