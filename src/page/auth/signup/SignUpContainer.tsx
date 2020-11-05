/**
 * @description 회원가입 창
 */

import React, { useState } from 'react';
import { FirebaseAuth } from '@/config/firebase.config';

import { UserAuthObj } from '../type';

import SignError from '../AuthError';

import SignUpPresenter from './SignUpPresenter';
import IsEmailSpecial from '@/components/syntax/IsEmailSpecial';
import IsPassword from '@/components/syntax/IsPassword';

const SignUpContainer = (): JSX.Element => {
  const [userInfo, setInfo] = useState<UserAuthObj>({
    nickname: '',
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

    if (!IsEmailSpecial(value) && name === 'nickname') {
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
        setError(IsPassword(value).message);
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
          userInfo.nickname + '@khu.ac.kr',
          userInfo.password,
        );
      } else {
        // sign in ...
        data = await FirebaseAuth.signInWithEmailAndPassword(
          userInfo.nickname + '@khu.ac.kr',
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
          // user
          //   .sendEmailVerification()
          //   .then(() => {
          //     setLoading(false);
          //     setSendEmail(true);
          //     FirebaseAuth.signOut();
          //   })
          //   .then(() => setNewAccount(false))
          //   .catch(e => console.log(e));
          /* db에 저장 */
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
