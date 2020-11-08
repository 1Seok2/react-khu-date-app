/**
 * @description 비밀 번호 찾기
 */
import React, { useState } from 'react';
import * as s from './Find.styled';

import { FirebaseAuth } from '@/config/firebase.config';
import IsSpecial from '@/components/syntax/IsSpecial';
import Logo from '@/components/util/logo';
import TextInput from '@/components/util/textinput';
import Toast from '@/components/util/toast';

const Find = () => {
  const [id, setId] = useState('');

  const [show, setShow] = useState(false);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    if (IsSpecial(e.target.value)) return;
    setId(e.target.value);
  };

  const sendEmail = () => {
    FirebaseAuth.sendPasswordResetEmail(id + '@khu.ac.kr')
      .then(() => {
        // Email sent.
        setShow(true);
      })
      .catch(error => {
        // An error happened.
        console.log(error);
        alert('전송 실패');
      });
  };

  return (
    <>
      <s.AuthWrapper>
        {/* <s.AuthTitle>경희의 손개팅</s.AuthTitle> */}
        <img src={Logo} width="180px" height="180px" />
        <s.AuthForm>
          <s.InputContainer>
            <TextInput
              name="id"
              value={id}
              placeholder="이메일 앞 부분"
              onChange={onChange}
              required={true}
            />
            <s.Group>@khu.ac.kr</s.Group>
          </s.InputContainer>
          <s.SubmitButton onClick={sendEmail}>
            비밀번호 찾기
          </s.SubmitButton>
          <s.FindPassword to="/auth">
            로그인 / 회원가입
          </s.FindPassword>
        </s.AuthForm>
      </s.AuthWrapper>
      {show && (
        <Toast message="전송되었습니다" setShow={setShow} />
      )}
    </>
  );
};

export default Find;
