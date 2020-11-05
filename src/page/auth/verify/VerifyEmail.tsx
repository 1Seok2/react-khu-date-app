/**
 * @description 이메일 인증 전용 페이지
 */

import React, { useState } from 'react';

import { FirebaseAuth } from '@/config/firebase.config';
import { UserObj } from '@/components/util/usertype';
import Toast from '@/components/util/toast';

interface VerifyProps {
  userObj: UserObj | null;
}

const VerifyEmail = ({
  userObj,
}: VerifyProps): JSX.Element => {
  const [show, setShow] = useState(false);

  const verify = () => {
    const user: firebase.User | null =
      FirebaseAuth.currentUser;
    console.log('current,', user);

    if (user) {
      user
        .sendEmailVerification()
        .then(() => setShow(true))
        .catch(e => console.log(e));
    }
  };

  console.log(userObj);

  return (
    <div>
      <h1>가입된 이메일 : {userObj?.email}</h1>
      <button onClick={() => verify()}>인증하기</button>
      {show && (
        <Toast
          message="이메일로 전송되었습니다"
          setShow={setShow}
        />
      )}
      <h4>인증 링크 확인 후 페이지를 새로고침 해주세요</h4>
    </div>
  );
};

export default VerifyEmail;
