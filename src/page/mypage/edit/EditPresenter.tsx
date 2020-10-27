import { UserObj } from '@/components/util/usertype';
import React from 'react';
import { EditProps } from '../type';

const EditPresenter = ({
  state,
  editable,
  editMyInfo,
  makeEdit,
  cancelEdit,
  onChange,
}: any) => (
  <div>
    {editable ? (
      <>
        <h1>
          이름 :{' '}
          <input
            type="name"
            name="name"
            placeholder={state.name}
            value={state.name}
            onChange={onChange}
          />
        </h1>
        <h1>
          이메일 :{' '}
          <input
            type="email"
            name="email"
            placeholder={state.email}
            value={state.email}
            onChange={onChange}
          />{' '}
        </h1>
        <h1>
          별명 :{' '}
          <input
            type="nickname"
            name="nickname"
            placeholder={state.nickname}
            value={state.nickname}
            onChange={onChange}
          />{' '}
        </h1>
        <h1>
          나이 :{' '}
          <input
            type="age"
            name="age"
            placeholder={state.age}
            value={state.age}
            onChange={onChange}
          />{' '}
        </h1>
        <h1>
          소개 :{' '}
          <input
            type="introduce"
            name="introduce"
            placeholder={state.introduce}
            onChange={onChange}
            value={state.introduce}
          />{' '}
        </h1>
        <button onClick={editMyInfo}> 저장하기 </button>
        <button onClick={cancelEdit}> 취소하기 </button>
      </>
    ) : (
      <>
        <h1>이름 : {state.name}</h1>
        <h1>이메일 : {state.email}</h1>
        <h1>별명 : {state.nickname}</h1>
        <h1>나이 : {state.age}</h1>
        <h1>성별 : {state.gender}</h1>
        <h1>소개 : {state.introduce}</h1>
        <button onClick={makeEdit}> 수정하기 </button>
      </>
    )}
  </div>
);
export default EditPresenter;
