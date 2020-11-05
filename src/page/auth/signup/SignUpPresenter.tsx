/**
 * @description 회원가입 창
 */

import React from 'react';

import TextInput from '@/components/util/textinput';

import * as s from '../Auth.styled';
import * as ps from './SignUp.styled';

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
        <ps.InputContainer>
          <TextInput
            name="nickname"
            value={userInfo?.nickname}
            placeholder="이메일 앞 부분"
            onChange={onChange}
            required={true}
            onKeyUp={onKeyUp}
          />
          <ps.Group>@khu.ac.kr</ps.Group>
        </ps.InputContainer>
        <ps.InputContainer>
          <TextInput
            name="password"
            value={userInfo?.password}
            placeholder="비밀번호"
            onChange={onChange}
            required={true}
            onKeyUp={onKeyUp}
          />
        </ps.InputContainer>
        <ps.ErrorPw>{error && `* ${error}`}</ps.ErrorPw>
        <s.SubmitButton onClick={emailLinkAuth}>
          {newAccount ? '회원가입' : '로그인'}
        </s.SubmitButton>
        <ps.ChangeAuthStatus
          onClick={() => {
            console.log('hi');

            setNewAccount(!newAccount);
            setError('');
          }}
        >
          {newAccount
            ? '이미 계정이 있으신가요?'
            : '학교 웹메일로 회원가입'}
        </ps.ChangeAuthStatus>
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
