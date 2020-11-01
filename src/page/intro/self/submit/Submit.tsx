import React from 'react';
import * as s from '../style/SelfStyled';
import { FirebaseRDB } from '@/config/firebase.config';
import { PrivateDataObject } from '../../type';
import { color } from '../../../../theme/color';

const Submit = ({ userObj, privateData }: any) => {
  const submitMyInfo = () => {
    FirebaseRDB.ref(`users/${userObj?.uid}`)
      .update({
        ...privateData,
      })
      .catch(err => console.error(err));
  };

  return (
    <s.Container>
      <button
        style={{
          background: color.pointcolor,
          color: 'white',
        }}
        onClick={() => {
          alert('제출!');
          submitMyInfo();
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
