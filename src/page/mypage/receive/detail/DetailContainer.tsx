/**
 * @description 상대의 자세한 정보 볼 수 있음
 */

import React, { useEffect, useState } from 'react';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';
import DetailPresenter from './DetailPresenter';
import { ChatObj } from '../../type';

const Detail = (props: any): JSX.Element => {
  /**
   * props로 상대정보와 내 정보를 받음
   */
  const receiveChat = props.location.state.receiveChat;
  const userObj = props.location.state.userObj;

  const [opponent, setOpponent] = useState<any>({});

  const [isLoading, setLoading] = useState(true);

  /**
   * 이미 전송한 상대이면 버튼 클릭 불가
   */
  const [enable, setEnable] = useState(false);
  const [isContact, setContact] = useState(false);

  const [status, setStatus] = useState(0);

  const accept = () => {
    if (
      !enable &&
      window.confirm(
        '정말 호감을 표시하시겠습니까?\n제출한 응답에 대한 번복은 없습니다.',
      )
    ) {
      FirebaseRDB.ref(
        `chat/${receiveChat.createdAt}`,
      ).update({
        receiverOk: 1,
      });
      setEnable(true);
      setContact(true);
    }
  };

  const reject = () => {
    if (
      !enable &&
      window.confirm(
        '정말 호감을 거절하시겠습니까?\n제출한 응답에 대한 번복은 없습니다.',
      )
    ) {
      FirebaseRDB.ref(
        `chat/${receiveChat.createdAt}`,
      ).update({
        receiverOk: -1,
      });
      setEnable(true);
    }
  };

  /**
   * 이미 관심 보낸 사람인지 체크
   */
  useEffect(() => {
    FirebaseRDB.ref(`chat/${receiveChat.createdAt}`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        if (snap.val().receiverSaw === 0) {
          FirebaseRDB.ref(
            `chat/${receiveChat.createdAt}`,
          ).update({
            receiverSaw: 1,
          });
        }

        if (snap.val().receiverOk !== 0) {
          setEnable(true);
          if (snap.val().receiverOk === 1) {
            setContact(true);
          }
        }
      });
  }, []);

  const [url, setUrl] = useState<any>();

  /**
   * 이미지 가져오기
   */
  useEffect(() => {
    let interval: any;
    let ok = false;
    let uris: any = [];

    if (opponent) {
      for (let i = 0; i < opponent?.img; i++) {
        FirebaseStorage.ref(
          `hands/${opponent?.email}/${i}.jpg`,
        )
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
                  setStatus(
                    prev => (prev + 1) % opponent?.img,
                  );
                }, 2500);
              }, 300);
            }
          });
      }
    }

    return () => clearInterval(interval);
  }, [opponent]);

  /**
   * 이미지 슬라이더
   */
  const changeStatus = (type: string) => {
    if (type === 'next') {
      setStatus(prev => {
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    } else {
      setStatus(prev => {
        if (prev === 0) {
          return 2;
          // return url.length;
        } else {
          return prev - 1;
        }
      });
    }
  };

  /**
   *  상대 정보 가져옴
   * */
  useEffect(() => {
    FirebaseRDB.ref(`users/${receiveChat.senderId}`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        setOpponent({
          ...snap.val(),
        });
      });
  }, []);

  return (
    <DetailPresenter
      isLoading={isLoading}
      receiveChat={receiveChat}
      accept={accept}
      reject={reject}
      enable={enable}
      url={url}
      status={status}
      changeStatus={changeStatus}
      history={props.history}
      opponent={opponent}
      isContact={isContact}
    />
  );
};

export default Detail;
