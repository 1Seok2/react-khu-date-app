/**
 * @description 내가 호감 표시한 사람들 목록
 */

import React, { useEffect, useState } from 'react';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';

import SendPresenter from './SendPresenter';

import { UserObj } from '@/components/util/usertype';
import { ChatObj } from '../type';

interface SendProps {
  userObj: UserObj | null;
}

const SendContainer = ({
  userObj,
  ...props
}: SendProps): JSX.Element => {
  /**
   * 내가 보낸 리스트
   */
  const [sendList, setList] = useState<Array<ChatObj>>([]);
  const [isLoading, setLoading] = useState(true);
  const [opponent, setOpponent] = useState<any>([]);

  /**
   * 리스트 가져오기
   */
  useEffect(() => {
    let list: any = [];
    let opponentList: any = [];

    FirebaseRDB.ref(`chat`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        let key: any;
        for (key in snap.val()) {
          if (snap.val()[key].sender === userObj?.email) {
            list = [...list, snap.val()[key]];

            FirebaseRDB.ref(
              `users/${snap.val()[key].receiverId}`,
            )
              .once('value')
              .then(
                (snap: firebase.database.DataSnapshot) => {
                  opponentList = [
                    ...opponentList,
                    snap.val(),
                  ];
                },
              )
              .then(() => setOpponent(opponentList));
          }
        }
        setList(list);
      })
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 300),
      );
  }, []);

  return (
    <SendPresenter
      userObj={userObj}
      sendList={sendList}
      isLoading={isLoading}
      opponent={opponent}
      {...props}
    />
  );
};
export default SendContainer;
