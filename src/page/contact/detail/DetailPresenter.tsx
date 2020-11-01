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
  url?: any;
  status: number;
  changeStatus: (type: string) => void;
}

const DetailPresenter = ({
  isLoading,
  person,
  sendInterest,
  enable,
  url,
  status,
  changeStatus,
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
        <h1>상대 소개 상세 정보</h1>
        <div>
          <h2>
            가입일 :{' '}
            {moment(person.createdAt).format('YY.MM.DD')}
          </h2>
          <h2>{person.email}</h2>
          <h2>{person.gender}</h2>
          <h2>{person.name}</h2>
          <img
            // src={person.files[0].path}
            src={url}
            width="100px"
            height="100px"
          />
        </div>
        <button onClick={sendInterest}>
          {enable ? '전송완료' : '관심표현'}
        </button>
      </div>
    )}
  </div>
);
export default DetailPresenter;
