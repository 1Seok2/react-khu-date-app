import React from 'react';
import * as s from '../style/SelfStyled';

const AgeSelect = ({ value, onChange }: any) => {
  return (
    <s.Container>
      <s.InputContainer>
        <s.InputLabelText>
          나이를 입력하세요.
        </s.InputLabelText>
        <s.InputTextBox
          value={value}
          name={'age'}
          onChange={onChange}
        ></s.InputTextBox>
      </s.InputContainer>
    </s.Container>
  );
};

export default AgeSelect;
