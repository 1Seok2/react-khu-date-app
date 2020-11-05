/**
 * @description 회원가입 창
 */

import React from 'react';

import TextInput from '@/components/util/textinput';

import * as s from './SignUp.styled';

import { AuthPresenterProps } from '../type';
import Logo from '@/components/util/logo';
import Toast from '@/components/util/toast';
import Loading from '@/components/util/loading';

const SignUpPresenter = ({
  SNSLogin,
  error,
  setError,
  show,
  setShow,
  userInfo,
  onChange,
  emailLinkAuth,
  newAccount,
  setNewAccount,
  sendEmail,
  setSendEmail,
  submitError,
  setSubmitError,
  onKeyUp,
  isLoading,
}: AuthPresenterProps): JSX.Element => (
  <>
    <s.AuthWrapper>
      {/* <s.AuthTitle>경희의 손개팅</s.AuthTitle> */}
      <img src={Logo} width="180px" height="180px" />
      <s.AuthForm>
        <s.InputContainer>
          <TextInput
            name="nickname"
            value={userInfo?.nickname}
            placeholder="이메일 앞 부분"
            onChange={onChange}
            required={true}
            onKeyUp={onKeyUp}
          />
          <s.Group>@khu.ac.kr</s.Group>
        </s.InputContainer>
        <s.InputContainer>
          <TextInput
            name="password"
            value={userInfo?.password}
            placeholder="비밀번호"
            onChange={onChange}
            required={true}
            onKeyUp={onKeyUp}
          />
        </s.InputContainer>
        <s.ErrorPw>{error && `* ${error}`}</s.ErrorPw>
        <s.SubmitButton onClick={emailLinkAuth}>
          {newAccount ? '회원가입' : '로그인'}
        </s.SubmitButton>
        <s.ChangeAuthStatus
          onClick={() => {
            setNewAccount(!newAccount);
            setError('');
          }}
        >
          {newAccount
            ? '이미 계정이 있으신가요?'
            : '학교 웹메일로 회원가입'}
        </s.ChangeAuthStatus>
      </s.AuthForm>
    </s.AuthWrapper>
    {sendEmail && (
      <Toast
        message="해당 이메일로 인증이 전송되었습니다"
        setShow={setSendEmail}
      />
    )}
    {submitError && (
      <Toast
        message="잘못된 입력입니다"
        setShow={setSubmitError}
      />
    )}
    {isLoading && <Loading />}
  </>
);

export default SignUpPresenter;
