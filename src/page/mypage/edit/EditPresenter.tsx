import { UserObj } from '@/components/util/usertype';
import React from 'react';
import { FiEdit } from 'react-icons/fi';
import * as s from './Edit.styled';
import { EditProps } from '../type';
import Selector from './Selector';

const EditPresenter = ({
  state,
  editable,
  isCollegeEditing,
  isLocationEditing,
  url,
  editMyInfo,
  saveEditedInfo,
  makeEdit,
  onClickEdit,
  cancelEdit,
  onChange,
  onChangeSelector,
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
        <FiEdit
          size={24}
          color={'gray'}
          style={{
            position: 'absolute',
            left: '5%',
          }}
          onClick={() => onClickEdit('college')}
        />
        <s.ContentLabel>단과대</s.ContentLabel>
        {isCollegeEditing ? (
          <>
            <Selector
              optionName={'college'}
              onChangeSelector={onChangeSelector}
            ></Selector>{' '}
            <s.SaveButton
              onClick={() => {
                saveEditedInfo('college');
                onClickEdit('college');
              }}
            >
              저장하기
            </s.SaveButton>
          </>
        ) : (
          <s.ContentValue>{state.college}</s.ContentValue>
        )}
      </s.ContentBundler>
      <s.ContentBundler>
        <FiEdit
          size={24}
          color={'gray'}
          style={{
            position: 'absolute',
            left: '5%',
          }}
          onClick={() => onClickEdit('location')}
        />
        <s.ContentLabel>지역</s.ContentLabel>
        {isLocationEditing ? (
          <>
            <Selector
              optionName={'location'}
              onChangeSelector={onChangeSelector}
            ></Selector>
            <s.SaveButton
              onClick={() => {
                saveEditedInfo('location');
                onClickEdit('location');
              }}
            >
              저장하기
            </s.SaveButton>
          </>
        ) : (
          <s.ContentValue>{state.location}</s.ContentValue>
        )}
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
