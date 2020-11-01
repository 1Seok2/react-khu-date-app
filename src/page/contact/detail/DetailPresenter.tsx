/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React from 'react';
import moment from 'moment';
import Loading from '@/components/util/loading';
import * as s from './Detail.styled';
import { FirebaseStorage } from '@/config/firebase.config';
import '@/assets/css/Slider.css';

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
  url: urls,
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <i>
            {urls.map((url: any, idx: number) => (
              <input
                checked
                type="radio"
                name="s"
                style={{
                  backgroundImage: `url(${
                    urls[urls.length - 1 - idx]
                  })`,
                }}
                title={`손사진 ${urls.length - idx} / ${
                  urls.length
                }`}
              />
            ))}
          </i>
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
            src={urls}
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
