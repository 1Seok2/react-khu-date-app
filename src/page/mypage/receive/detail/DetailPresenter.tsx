/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';
import moment from 'moment';
import Loading from '@/components/util/loading';
import * as s from './Detail.styled';
import { ChatObj } from '../../type';

interface DetailProps {
  isLoading: boolean;
  receiveChat: any;
  enable: boolean;
  url?: any;
  status: number;
  changeStatus: (type: string) => void;
  history: any;
  accept: (chat: ChatObj) => void;
  reject: (chat: ChatObj) => void;
  opponent?: any;
}

const DetailPresenter = ({
  isLoading,
  receiveChat,
  enable,
  url,
  status,
  changeStatus,
  history,
  accept,
  reject,
  opponent,
}: DetailProps): JSX.Element => (
  <div>
    {isLoading ? (
      <Loading />
    ) : (
      <div>
        <s.HandImageSlider>
          <s.ImageWrappser>
            {url.map((uri: any, idx: number) => (
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
            {status + 1} / {url.length}
          </s.ShowCount>
        </s.HandImageSlider>
        <s.DescContainer>
          <s.Title>상대 소개 상세 정보</s.Title>
          {/* <h2>
            가입일 :{' '}
            {moment(person.createdAt).format('YY.MM.DD')}
          </h2> */}
          <s.Row>
            <s.SubTitle>닉네임</s.SubTitle>
            <s.Description>
              {opponent.nickname}
            </s.Description>
          </s.Row>
          <s.Row>
            <s.SubTitle>나이</s.SubTitle>
            <s.Description>{opponent.age}</s.Description>
          </s.Row>
          <s.Row>
            <s.SubTitle>거주 지역</s.SubTitle>
            <s.Description>
              {opponent.location}
            </s.Description>
          </s.Row>
          <s.Row>
            <s.SubTitle>단과대학교</s.SubTitle>
            <s.Description>
              {opponent.college}
            </s.Description>
          </s.Row>
          <s.BackButton onClick={() => history.goBack()}>
            뒤로가기
          </s.BackButton>
          <s.Empty />
          <s.SendInterestButton enable={enable}>
            {enable ? '전송완료' : '관심표현'}
          </s.SendInterestButton>
        </s.DescContainer>
      </div>
    )}
  </div>
);
export default DetailPresenter;
