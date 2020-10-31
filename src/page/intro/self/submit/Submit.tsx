import React from 'react';
import * as s from '../style/SelfStyled';
import { PrivateDataObject } from '../../type';
import { color } from '../../../../theme/color';

const Submit = ({ privateData }: any) => {
  return (
    <s.Container>
      <button
        style={{
          background: color.pointcolor,
          color: 'white',
        }}
        onClick={() => {
          alert('제출!');
          console.log(privateData);
        }}
      >
        {' '}
        제출!
      </button>
    </s.Container>
  );
};

export default Submit;
