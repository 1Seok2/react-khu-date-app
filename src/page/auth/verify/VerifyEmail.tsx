/**
 * @description 이메일 인증 전용 페이지
 */

import React, { useState } from 'react';

import { FirebaseAuth } from '@/config/firebase.config';
import { UserObj } from '@/components/util/usertype';
import Toast from '@/components/util/toast';

import * as s from './VerifyEmail.styled';
import Logo from '@/components/util/logo';
import Loading from '@/components/util/loading';
import { color } from '@/theme/color';

interface VerifyProps {
  userObj: UserObj | null;
}

const VerifyEmail = ({
  userObj,
}: VerifyProps): JSX.Element => {
  const [show, setShow] = useState(false);

  const [enable, setEnable] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const verify = () => {
    setLoading(true);
    const user: firebase.User | null =
      FirebaseAuth.currentUser;

    if (user) {
      user
        .sendEmailVerification()
        .then(() => setShow(true))
        .then(() => {
          setLoading(false);
          setTimeout(() => {
            setEnable(true);
          }, 100);
        })
        .catch(e => {
          alert('전송 실패');
          console.log(e);
          setTimeout(() => {
            setLoading(false);
          }, 100);
        });
    }
  };

  return (
    <>
      <s.Container>
        <img src={Logo} width="180px" height="180px" />
        <s.NeedNotice>이메일을 인증해주세요</s.NeedNotice>
        <s.Email>
          <s.Email>가입된 이메일</s.Email>
          <s.UserEmail>{userObj?.email}</s.UserEmail>
        </s.Email>
        <s.ButtonWrapper>
          <s.SendButton
            onClick={() => {
              if (enable) return;
              verify();
            }}
            enable={enable}
          >
            {enable ? '전송완료' : '인증하기'}
          </s.SendButton>
          <s.ReloadButton
            onClick={() => window.location.reload()}
          >
            <i
              className="icon-ccw"
              style={{ color: color.gray }}
            />
          </s.ReloadButton>
        </s.ButtonWrapper>
        <s.Notice>
          인증 링크 확인 후 페이지를 새로고침 해주세요
        </s.Notice>
      </s.Container>
      {show && (
        <Toast
          message="이메일로 전송되었습니다"
          setShow={setShow}
        />
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default VerifyEmail;
