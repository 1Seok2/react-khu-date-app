/**
 * @description 내가 받은 목록
 */

import React, { useEffect, useState } from 'react';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';

import { UserObj } from '@/components/util/usertype';
import { ChatObj } from '../type';

import ReceivePresenter from './ReceivePresenter';

interface SendProps {
  userObj: UserObj | null;
}

const ReceiveContainer = ({
  userObj,
  ...props
}: SendProps): JSX.Element => {
  /**
   * 내가 받은 리스트
   */
  const [receiveList, setList] = useState<Array<ChatObj>>(
    [],
  );

  const [isLoading, setLoading] = useState(true);
  const [opponent, setOpponent] = useState<any>([]);

  /**
   * 리스트 가져오기
   */
  useEffect(() => {
    let list: any = [...receiveList];
    let opponentList: any = [];

    let subs: any;
    subs = FirebaseRDB.ref(`chat`).on(
      'value',
      (snap: firebase.database.DataSnapshot) => {
        let key: any;
        for (key in snap.val()) {
          if (snap.val()[key].receiver === userObj?.email) {
            const obj = {
              ...snap.val()[key],
              enable: snap.val()[key].receiverOk !== 0,
            };
            list = [...list, obj];

            FirebaseRDB.ref(
              `users/${snap.val()[key].senderId}`,
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

        /**
         * 이미지 로딩 중 이미지가 변하는 과정 안보이게
         */
        setList(list);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      },
    );

    // return () => subs();
  }, []);

  return (
    <ReceivePresenter
      receiveList={receiveList}
      isLoading={isLoading}
      userObj={userObj}
      opponent={opponent}
      {...props}
    />
  );
};
export default ReceiveContainer;
