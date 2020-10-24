/**
 * @description 상대의 자세한 정보 볼 수 있음
 * @todo location을 받아오는 props의 interface 지정
 */

import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { FirebaseRDB } from '@/config/firebase.config';
import DetailPresenter from './DetailPresenter';

const Detail: React.FC<RouteComponentProps> = (
  props: any,
): JSX.Element => {
  /**
   * props로 상대정보와 내 정보를 받음
   */
  const person = props.location.state.person;
  const userObj = props.location.state.userObj;

  const [isLoading, setLoading] = useState(true);

  /**
   * 이미 전송한 상대이면 버튼 클릭 불가
   */
  const [enable, setEnable] = useState(false);

  /**
   * 관심 표현 ❤️
   */
  const sendInterest = () => {
    if (!enable) {
      const createdAt = Date.now();

      FirebaseRDB.ref(`chat/${createdAt}`).set(
        {
          senderId: userObj.uid, // 관심 표현자 고유 아이디
          sender: userObj.email, // 관심 표현자 메일
          receiver: person.email, // 받은 사람 이메일
          createdAt: createdAt, // 관심 표현 시간
          receiverOk: 0, // 좋으면 1, 미응답 0, 싫어! -1
          receiverSaw: 0, // 봤다면 1, 아직 안봤다면 0
        },
        error => {
          if (error) {
            /* fail ... */
            console.error(error);
          } else {
            /* success ... */
            alert('성공');
            setEnable(true);
          }
        },
      );
    }
  };

  /**
   * 이미 관심 보낸 사람인지 체크
   */
  useEffect(() => {
    FirebaseRDB.ref(`chat`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        let key;
        let alreadySend = false;
        for (key in snap.val()) {
          if (
            snap.val()[key].sender === userObj.email &&
            snap.val()[key].receiver === person.email &&
            !alreadySend
          ) {
            setEnable(true);
            alreadySend = true;
            break;
          }
        }
      })
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 10),
      );
  }, []);
  return (
    <DetailPresenter
      isLoading={isLoading}
      person={person}
      sendInterest={sendInterest}
      enable={enable}
    />
  );
};

export default Detail;
