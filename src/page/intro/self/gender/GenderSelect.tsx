import React from 'react';
import * as s from './GenderSelectStyled';

const GenderSelect = ({ onClickGender }: any) => {
  return (
    <s.Container>
      <s.SelectBox onClick={() => onClickGender('M')}>
        남
      </s.SelectBox>
      <s.SelectBox onClick={() => onClickGender('F')}>
        여
      </s.SelectBox>
    </s.Container>
  );
};

export default GenderSelect;
