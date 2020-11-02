/**
 * @description 상대의 자세한 정보 볼 수 있음
 * @todo location을 받아오는 props의 interface 지정
 */

import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';
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
  const [isRead, setRead] = useState(false);

  const [status, setStatus] = useState(0);
  const [url, setUrl] = useState<any>();
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
          senderNickname: userObj.nickname,
          receiver: person.email, // 받은 사람 이메일
          receiverId: person.uid, // 관심 받는자 고유 아이디
          receiverNickname: person.nickname,
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
          if (alreadySend) break;
          if (
            snap.val()[key].sender === userObj.email &&
            snap.val()[key].receiver === person.email &&
            !alreadySend
          ) {
            setEnable(true);
            alreadySend = true;
            if (snap.val()[key].receiverSaw === 1) {
              setRead(true);
            }
            break;
          }
        }
      });
  }, []);

  /**
   * slider 이전, 다음버튼
   */
  const changeStatus = (type: string) => {
    if (type === 'next') {
      setStatus(prev => (prev + 1) % person.img);
    } else {
      setStatus(prev => (prev - 1) % person.img);
    }
  };

  /**
   * img 가져오기
   */
  useEffect(() => {
    // let uri_list: Array<string> = [];
    let interval: any;
    let ok = false;
    let uris: any = [];

    for (let i = 0; i < person.img; i++) {
      FirebaseStorage.ref(`hands/${person.email}/${i}.jpg`)
        .getDownloadURL()
        .then(uri => {
          uris = [...uris, uri];
          setUrl(uris);
          ok = true;
        })
        .then(() => {
          if (ok && i === 0) {
            setTimeout(() => {
              setLoading(false);
              interval = setInterval(() => {
                setStatus(prev => (prev + 1) % person.img);
              }, 2500);
            }, 300);
          }
        });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <DetailPresenter
      isLoading={isLoading}
      person={person}
      sendInterest={sendInterest}
      enable={enable}
      url={url}
      status={status}
      changeStatus={changeStatus}
      history={props.history}
      isRead={isRead}
    />
  );
};

export default Detail;
