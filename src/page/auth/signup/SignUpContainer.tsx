/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import {
  FirebaseAuth,
  FirebaseInstance,
  FirebaseRDB,
} from '@/config/firebase.config';
import { Auth } from '@/api/firebase-auth';
import { fbsetWithPathAndFormApi } from '@/api/firebase-set';

import { UserAuthObj } from '../type';

import GetInputList from './GetInputList';
import SignError from '../AuthError';

import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserAuthObj>({
    nickname: '',
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

  const getUid = async () => {
    const { uid }: any = FirebaseAuth.currentUser;
    console.log(uid);
    return uid;
  };

  const googleLogin = async () => {
    const provider: firebase.auth.GoogleAuthProvider = new FirebaseInstance.auth.GoogleAuthProvider();
    const data: firebase.auth.UserCredential = await FirebaseAuth.signInWithPopup(
      provider,
    );
    return data;
  };

  const SNSLogin = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    googleLogin().then(async (data: any) => {
      console.log('data ...', data);
      if (data) {
        const userEmail: string =
          data.additionalUserInfo?.profile?.email;

        const emailGroup: string = userEmail.split('@')[1];

        if (emailGroup !== 'khu.ac.kr') {
          /* 다른 웹 메일 사용 */
          alert('경희대학교 웹 메일로 로그인해주세요');
          return;
        } else {
          /* 학교 웹 메일 사용 */
          const user: firebase.User | null =
            FirebaseAuth.currentUser;

          /* 새로운 유저라면 */
          if (data.additionalUserInfo?.isNewUser) {
            const createdAt: number = Date.now();

            FirebaseRDB.ref(`users/${user?.uid}`).set({
              email: userEmail,
              createdAt: createdAt,
            });
          }
        }
      } else {
        alert('로그인 실패');
      }
      alert('hi');
    });
  };

  return (
    <SignUpPresenter
      inputList={inputList}
      onChange={onChange}
      // onSubmit={onSubmit}
      SNSLogin={SNSLogin}
      userInfo={userInfo}
      setInfo={setInfo}
      error={error}
    />
  );
};

export default SignUpContainer;
