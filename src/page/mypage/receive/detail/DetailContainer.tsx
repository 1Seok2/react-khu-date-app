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

  const [opponent, setOpponent] = useState({});

  const [isLoading, setLoading] = useState(true);

  /**
   * 이미 전송한 상대이면 버튼 클릭 불가
   */
  const [enable, setEnable] = useState(false);

  const [status, setStatus] = useState(0);

  const accept = (chat: ChatObj) => {
    if (!chat.enable) {
      FirebaseRDB.ref(`chat/${chat.senderId}`).update({
        receiverOk: 1,
      });
    }
  };

  const reject = (chat: ChatObj) => {
    if (!chat.enable) {
      FirebaseRDB.ref(`chat/${chat.senderId}`).update({
        receiverOk: -1,
      });
    }
  };

  /**
   * 이미 관심 보낸 사람인지 체크
   */
  useEffect(() => {
    FirebaseRDB.ref(`chat/${receiveChat.createdAt}`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        console.log(
          'snaps...',
          receiveChat.createdAt,
          snap.val(),
        );
      });
  }, []);

  const [url, setUrl] = useState<any>();

  /**
   * 이미지 가져오기
   */
  useEffect(() => {
    FirebaseStorage.ref('example/10.jpeg')
      .getDownloadURL()
      .then((url: any) => {
        console.log(url);
        setUrl([
          url,
          'https://1seok2.github.io/CSS-exercises/assets/tranditional/holi-2416686_640.jpg',
          'https://1seok2.github.io/CSS-exercises/assets/tranditional/asia-1822521_640.jpg',
        ]);
      })
      .then(() => setLoading(false));
  }, []);

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

  useEffect(() => {
    let interval: any;
    if (!isLoading && url?.length > 1) {
      interval = setInterval(() => {
        setStatus(prev => (prev + 1) % 3);
      }, 2500);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

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
    />
  );
};

export default Detail;
