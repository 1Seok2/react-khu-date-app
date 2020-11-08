/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import {
  FirebaseAuth,
  FirebaseRDB,
} from '@/config/firebase.config';

import { UserAuthObj } from '../type';

import SignError from '../AuthError';

import SignUpPresenter from './SignUpPresenter';
import IsEmailSpecial from '@/components/syntax/IsEmailSpecial';
import IsPassword from '@/components/syntax/IsPassword';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserAuthObj>({
    id: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const [newAccount, setNewAccount] = useState(false);

  const [sendEmail, setSendEmail] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target;

    if (!IsEmailSpecial(value) && name === 'id') {
      setInfo({
        ...userInfo,
        [name]: value,
      });
    } else {
      if (name === 'password') {
        setInfo({
          ...userInfo,
          [name]: value,
        });
        if (newAccount) {
          setError(IsPassword(value).message);
        } else {
          if (error) setError('');
        }
      }
    }
  };

  const emailLinkAuth = async (e: any) => {
    e.preventDefault();

    if (error) {
      setSubmitError(true);
      return;
    }

    let data: any;

    try {
      setLoading(true);
      if (newAccount) {
        // sign up ...
        data = await FirebaseAuth.createUserWithEmailAndPassword(
          userInfo.id + '@khu.ac.kr',
          userInfo.password,
        );
      } else {
        // sign in ...
        data = await FirebaseAuth.signInWithEmailAndPassword(
          userInfo.id + '@khu.ac.kr',
          userInfo.password,
        );
      }
    } catch (err) {
      setLoading(false);
      setTimeout(() => {
        setError(SignError(err.message));
      }, 100);
    } finally {
      const user: firebase.User | null =
        FirebaseAuth.currentUser;
      if (newAccount) {
        if (data?.additionalUserInfo?.isNewUser && user) {
          /* db에 저장 */
          FirebaseRDB.ref(`users/${user.uid}`).set({
            /* basic info */
            email: userInfo.id + '@khu.ac.kr',
            uid: user.uid,

            /* temporary info */
            gender: 'M',
            age: 23,
            nickname: '트럼프',
            college: '생명과학대학',
            image: 3,
            createdAt: Date.now(),
            location: '서울',
          });
        }
      }
    }

    if (isLoading) setLoading(false);
  };

  const enterkey = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.keyCode == 13) {
      emailLinkAuth(e);
    }
  };

  return (
    <SignUpPresenter
      // onSubmit={onSubmit}
      error={error}
      setError={setError}
      show={show}
      setShow={setShow}
      userInfo={userInfo}
      onChange={onChange}
      emailLinkAuth={emailLinkAuth}
      newAccount={newAccount}
      setNewAccount={setNewAccount}
      sendEmail={sendEmail}
      setSendEmail={setSendEmail}
      submitError={submitError}
      setSubmitError={setSubmitError}
      onKeyUp={enterkey}
      isLoading={isLoading}
    />
  );
};

export default SignUpContainer;
