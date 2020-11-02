/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';

import { DetailProps } from '../type';

import Loading from '@/components/util/loading';

import * as s from './Detail.styled';
import { color } from '@/theme/color';

const DetailPresenter = ({
  isLoading,
  person,
  sendInterest,
  enable,
  url,
  status,
  changeStatus,
  history,
  isRead,
}: DetailProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : (
    <>
      <s.HandImageSlider>
        <s.ImageWrappser>
          {url?.map((uri: string, idx: number) => (
            <s.ImageContainer
              uri={uri}
              key={uri}
              current={idx === status}
            ></s.ImageContainer>
          ))}
        </s.ImageWrappser>
        <s.StatusButton
          prev={true}
          onClick={() => changeStatus('prev')}
        >
          <i className="icon-left-open" />
        </s.StatusButton>
        <s.StatusButton
          prev={false}
          onClick={() => changeStatus('next')}
        >
          <i className="icon-right-open" />
        </s.StatusButton>
        <s.ShowCount>
          {status + 1} / {url?.length}
        </s.ShowCount>
      </s.HandImageSlider>
      <s.DescContainer>
        <s.Title>상대 소개 상세 정보</s.Title>
        {/* <h2>
            가입일 :{' '}
            {moment(person.createdAt).format('YY.MM.DD')}
          </h2> */}
        {enable && (
          <s.Row>
            <s.SubTitle>상대 확인여부</s.SubTitle>
            <s.Description>
              {isRead ? '확인했다!!' : '아직 안봤다 😭'}
            </s.Description>
          </s.Row>
        )}
        <s.Row>
          <s.SubTitle>닉네임</s.SubTitle>
          <s.Description>{person.nickname}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>나이</s.SubTitle>
          <s.Description>{person.age}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>거주 지역</s.SubTitle>
          <s.Description>{person.location}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>단과대학교</s.SubTitle>
          <s.Description>{person.college}</s.Description>
        </s.Row>
        <s.Empty />
        <s.ButtonContainer>
          <s.SButton
            onClick={() => history.goBack()}
            Btype="back"
          >
            뒤로가기
          </s.SButton>
          <s.SButton
            Btype="like"
            bgColor={color.date}
            color="white"
            onClick={sendInterest}
            enable={enable}
          >
            {enable ? '전송완료' : '관심표현'}
          </s.SButton>
        </s.ButtonContainer>
      </s.DescContainer>
    </>
  );
export default DetailPresenter;
