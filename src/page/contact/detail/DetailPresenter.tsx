/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';
import moment from 'moment';
import Loading from '@/components/util/loading';
import * as s from './Detail.styled';

interface DetailProps {
  isLoading: boolean;
  person: any;
  sendInterest: () => void;
  enable: boolean;
}

const DetailPresenter = ({
  isLoading,
  person,
  sendInterest,
  enable,
}: DetailProps): JSX.Element => (
  <div style={{ backgroundColor: 'yellow' }}>
    {isLoading ? (
      <Loading />
    ) : (
      <div style={{ backgroundColor: 'gray' }}>
        <s.ImageContainer />
        {/* <h1>상대 소개 상세 정보</h1>
        <div>
          <h2>
            가입일 :{' '}
            {moment(person.createdAt).format('YY.MM.DD')}
          </h2>
          <h2>{person.email}</h2>
          <h2>{person.gender}</h2>
          <h2>{person.name}</h2>
        </div> */}
        <button onClick={sendInterest}>
          {enable ? '전송완료' : '관심표현'}
        </button>
      </div>
    )}
  </div>
);
export default DetailPresenter;
