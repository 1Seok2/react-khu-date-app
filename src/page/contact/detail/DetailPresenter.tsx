/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';
import moment from 'moment';
import Loading from '@/components/util/loading';
import * as s from './Detail.styled';
import { FirebaseStorage } from '@/config/firebase.config';

interface DetailProps {
  isLoading: boolean;
  person: any;
  sendInterest: () => void;
  enable: boolean;
  url?: any;
  status: number;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
}

const DetailPresenter = ({
  isLoading,
  person,
  sendInterest,
  enable,
  url,
  status,
  setStatus,
}: DetailProps): JSX.Element => (
  <div>
    {isLoading ? (
      <Loading />
    ) : (
      <div>
        <div
          style={{
            position: 'relative',
            backgroundColor: '#ededed',
            textAlign: 'center',
            height: '18rem',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '18rem',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-100%)',
            }}
          >
            {url.map((uri: any, idx: number) => (
              <s.ImageContainer
                uri={uri}
                key={uri}
                current={idx === status}
              >
                {idx}
              </s.ImageContainer>
            ))}
          </div>
          <s.StatusButton
            prev={true}
            onClick={() => {
              setStatus(prev => {
                if (prev === 0) {
                  return 2;
                  // return url.length;
                } else {
                  return prev - 1;
                }
              });
            }}
          >
            left
          </s.StatusButton>
          <s.StatusButton
            prev={false}
            onClick={() => {
              setStatus(prev => {
                if (prev === 2) {
                  return 0;
                } else {
                  return prev + 1;
                }
              });
            }}
          >
            right
          </s.StatusButton>
        </div>
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
