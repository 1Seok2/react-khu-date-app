import React from 'react';

const Nothing = () => (
  <h1
    style={{
      fontSize: 32,
      fontWeight: 300,
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: '100%',
      textAlign: 'center',
    }}
  >
    목록이 존재하지 않습니다.
  </h1>
);

export default Nothing;
