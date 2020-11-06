import React from 'react';
import * as s from '../style/SelfStyled';

const NickNameInput = ({ value, onChange }: any) => {
  return (
    <s.Container>
      <s.InputContainer>
        <s.InputLabelText>
          손개팅에서 사용하실 별명을 입력해주세요.
        </s.InputLabelText>
        <s.InputTextBox
          value={value}
          name={'nickname'}
          onChange={onChange}
        ></s.InputTextBox>
      </s.InputContainer>
    </s.Container>
  );
};

export default NickNameInput;
