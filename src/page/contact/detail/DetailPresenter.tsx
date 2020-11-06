/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';

import { DetailProps } from '../type';

import Loading from '@/components/util/loading';

import * as s from './Detail.styled';
import { color } from '@/theme/color';
import Toast from '@/components/util/toast';

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
  success,
  setSuccess,
  setStatus,
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
            />
          ))}
          <s.ChangeStatusContainer>
            {url?.map((uri: string, idx: number) => (
              <s.StatusCircleButton
                key={uri}
                current={idx === status}
                onClick={() => setStatus(idx)}
              />
            ))}
          </s.ChangeStatusContainer>
        </s.ImageWrappser>
      </s.HandImageSlider>
      <s.DescContainer>
        <s.Title>
          {person.nickname}{' '}
          <span style={{ color: color.gray }}>
            학우님의 손
          </span>
        </s.Title>
        {/* <h2>
            가입일 :{' '}
            {moment(person.createdAt).format('YY.MM.DD')}
          </h2> */}
        {enable && (
          <s.Row>
            <s.SubTitle>상대 확인</s.SubTitle>
            <s.Description>
              {isRead ? '확인했다!!' : '아직 안봤다 😭'}
            </s.Description>
          </s.Row>
        )}
        <s.Row>
          <s.SubTitle>나이</s.SubTitle>
          <s.Description>{person.age}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>지역</s.SubTitle>
          <s.Description>{person.location}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>단과대</s.SubTitle>
          <s.Description>{person.college}</s.Description>
        </s.Row>
        <s.Empty />
        {/* <s.ButtonContainer>
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
        </s.ButtonContainer> */}
        <s.LikeButton onClick={() => sendInterest()} />
      </s.DescContainer>
      {success && (
        <Toast message={'전송 완료'} setShow={setSuccess} />
      )}
    </>
  );
export default DetailPresenter;
