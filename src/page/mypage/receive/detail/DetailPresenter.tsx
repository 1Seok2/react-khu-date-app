/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';
import moment from 'moment';
import Loading from '@/components/util/loading';
import * as s from './Detail.styled';
import { ChatObj, DetailProps } from '../../type';
import { color } from '@/theme/color';

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
  isContact,
}: DetailProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : (
    <>
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
          <s.SubTitle>호감표시일</s.SubTitle>
          <s.Description>
            {moment(receiveChat.createdAt).format(
              'YY.MM.DD HH:mm:ss',
            )}
          </s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>닉네임</s.SubTitle>
          <s.Description>{opponent.nickname}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>나이</s.SubTitle>
          <s.Description>{opponent.age}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>거주 지역</s.SubTitle>
          <s.Description>{opponent.location}</s.Description>
        </s.Row>
        <s.Row>
          <s.SubTitle>단과대학교</s.SubTitle>
          <s.Description>{opponent.college}</s.Description>
        </s.Row>
        {isContact && (
          <s.Row>
            <s.SubTitle>이메일</s.SubTitle>
            <s.Description>{opponent.email}</s.Description>
          </s.Row>
        )}
        <s.ButtonContainer>
          <s.SButton
            Bflex={1}
            Btype="back"
            onClick={() => history.goBack()}
          >
            뒤로
          </s.SButton>
          {isContact ||
            (!enable && (
              <s.SButton
                Bflex={1}
                Btype="reject"
                bgColor={color.datelight}
                color={'white'}
                enable={enable}
                onClick={() => reject()}
              >
                거절
              </s.SButton>
            ))}
          {isContact ||
            (!enable && (
              <s.SButton
                Bflex={2}
                Btype="accept"
                bgColor={color.date}
                color="white"
                enable={enable}
                onClick={() => accept()}
              >
                나도 좋아!
              </s.SButton>
            ))}
        </s.ButtonContainer>
        <s.Empty />
      </s.DescContainer>
    </>
  );
export default DetailPresenter;
