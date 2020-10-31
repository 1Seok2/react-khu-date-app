import React from 'react';
import * as s from '../style/SelfStyled';

const GenderSelect = ({ value, onClick }: any) => {
  return (
    <s.Container>
      <s.SelectBox
        isSelected={value === 'M'}
        onClick={() => onClick('M')}
      >
        남
      </s.SelectBox>
      <s.SelectBox
        isSelected={value === 'F'}
        onClick={() => onClick('F')}
      >
        여
      </s.SelectBox>
    </s.Container>
  );
};

export default GenderSelect;
