import React from 'react';
import * as s from '../style/SelfStyled';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';
import { color } from '../../../../theme/color';

const Submit = ({ userObj, privateData }: any) => {
  const submitMyInfo = () => {
    const filesToUpload = privateData.files;

    const storageRef = FirebaseStorage.ref();
    filesToUpload.forEach((file: File, index: number) => {
      const imageRef = storageRef.child(
        `hands/${userObj?.email}/${index}.jpg`,
      );
      imageRef.put(file).then(snapshot => {
        console.log(snapshot);
      });
    });

    delete userObj.files;

    FirebaseRDB.ref(`users/${userObj?.uid}`)
      .update({
        ...userObj,
        ...privateData,
        img: filesToUpload.length,
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
        }}
      >
        {' '}
        제출!
      </button>
    </s.Container>
  );
};

export default Submit;
