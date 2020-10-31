import React from 'react';
import * as s from '../style/SelfStyled';

const GenderSelect = ({ onClick }: any) => {
  return (
    <s.Container>
      <s.SelectBox onClick={() => onClick('M')}>
        남
      </s.SelectBox>
      <s.SelectBox onClick={() => onClick('F')}>
        여
      </s.SelectBox>
    </s.Container>
  );
};

export default GenderSelect;
