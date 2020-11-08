import { UserObj } from '@/components/util/usertype';
import React from 'react';
import * as s from './Edit.styled';
import { EditProps } from '../type';

const EditPresenter = ({
  state,
  editable,
  url,
  editMyInfo,
  makeEdit,
  cancelEdit,
  onChange,
}: any) => (
  <s.Container>
    <s.ContainerTitle>개인정보 수정</s.ContainerTitle>
    <s.ContentWrapper>
      <s.ContentBundler>
        <s.ContentLabel>별명</s.ContentLabel>
        <s.ContentValue>{state.nickname}</s.ContentValue>
      </s.ContentBundler>
      <s.ContentBundler>
        <s.ContentLabel>이메일</s.ContentLabel>
        <s.ContentValue>{state.email}</s.ContentValue>
      </s.ContentBundler>
      <s.ContentBundler>
        <s.ContentLabel>성별</s.ContentLabel>
        <s.ContentValue>
          {state.gender === 'M' ? '남' : '여'}
        </s.ContentValue>
      </s.ContentBundler>
      <s.ContentBundler>
        <s.ContentLabel>나이</s.ContentLabel>
        <s.ContentValue>{state.age}</s.ContentValue>
      </s.ContentBundler>
      <s.ContentBundler>
        <s.ContentLabel>단과대</s.ContentLabel>
        <s.ContentValue>{state.college}</s.ContentValue>
      </s.ContentBundler>
      <s.ContentBundler>
        <s.ContentLabel>지역</s.ContentLabel>
        <s.ContentValue>{state.location}</s.ContentValue>
      </s.ContentBundler>
      <s.ContentBundler
        style={{
          alignItems: 'flex-start',
        }}
      >
        <s.ContentLabel>사진들</s.ContentLabel>
        <s.ImageWrapper>
          {url?.map((uri: string) => (
            <s.HandImage key={uri} uri={uri}></s.HandImage>
          ))}
        </s.ImageWrapper>
      </s.ContentBundler>
    </s.ContentWrapper>
  </s.Container>
);
export default EditPresenter;

// {editable ? (
//   <>
//     <h1>
//       이름 :{' '}
//       <input
//         type="name"
//         name="name"
//         placeholder={state.name}
//         value={state.name}
//         onChange={onChange}
//       />
//     </h1>
//     <h1>
//       이메일 :{' '}
//       <input
//         type="email"
//         name="email"
//         placeholder={state.email}
//         value={state.email}
//         onChange={onChange}
//       />{' '}
//     </h1>
//     <h1>
//       별명 :{' '}
//       <input
//         type="nickname"
//         name="nickname"
//         placeholder={state.nickname}
//         value={state.nickname}
//         onChange={onChange}
//       />{' '}
//     </h1>
//     <h1>
//       나이 :{' '}
//       <input
//         type="age"
//         name="age"
//         placeholder={state.age}
//         value={state.age}
//         onChange={onChange}
//       />{' '}
//     </h1>
//     <h1>
//       소개 :{' '}
//       <input
//         type="introduce"
//         name="introduce"
//         placeholder={state.introduce}
//         onChange={onChange}
//         value={state.introduce}
//       />{' '}
//     </h1>
//     <button onClick={editMyInfo}> 저장하기 </button>
//     <button onClick={cancelEdit}> 취소하기 </button>
//   </>
// ) : (
//   <>
//     <h1>이름 : {state.name}</h1>
//     <h1>이메일 : {state.email}</h1>
//     <h1>별명 : {state.nickname}</h1>
//     <h1>나이 : {state.age}</h1>
//     <h1>성별 : {state.gender}</h1>
//     <h1>소개 : {state.introduce}</h1>
//     <button onClick={makeEdit}> 수정하기 </button>
//   </>
// )}
