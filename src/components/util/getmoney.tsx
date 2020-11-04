/**
 * @description 계좌이체를 위한 버튼 및 돈 인풋창
 */

import React, { useState } from 'react';
import styled from 'styled-components';

import IsNumber from '../syntax/IsNumber';
import Toss_API from '@/api/toss';
import Toast from './toast';

import { color } from '@/theme/color';

const SForm = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SInput = styled.input`
  padding: 6px 9px;
  border: 1px solid ${color.grayborder};
`;

const GetMoney = () => {
  const [money, setMoney] = useState('');

  const [toast, setToast] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (IsNumber(e.target.value)) {
      setMoney(e.target.value);
    }
  };

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (parseInt(money) < 1000) {
      setToast(true);
      console.log('low...');
    } else {
      Toss_API(parseInt(money));
    }
  };

  return (
    <SForm onSubmit={onSubmit}>
      <SInput
        type="money"
        name="money"
        value={money}
        onChange={onChange}
        placeholder="원"
      />
      <button>후원</button>
      {toast && (
        <Toast
          message="1000원 이상 가능합니다"
          setShow={setToast}
          //   style={{ bottom: 0 }}
          bottom="-4rem"
        />
      )}
    </SForm>
  );
};

export default GetMoney;
