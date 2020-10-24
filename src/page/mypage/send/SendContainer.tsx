/**
 * @description 내가 호감 표시한 사람들 목록
 */

import React, { useEffect, useState } from 'react';
import { FirebaseRDB } from '@/config/firebase.config';

import SendPresenter from './SendPresenter';

import { UserObj } from '@/components/util/usertype';
import { ChatObj } from '../type';

interface SendProps {
  userObj: UserObj | null;
}

const Send = ({
  userObj,
  ...props
}: SendProps): JSX.Element => {
  /**
   * 내가 보낸 리스트
   */
  const [sendList, setList] = useState<Array<ChatObj>>([]);
  const [isLoading, setLoading] = useState(true);

  /**
   * 리스트 가져오기
   */
  useEffect(() => {
    let list: any = [];
    FirebaseRDB.ref(`chat`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        let key;
        for (key in snap.val()) {
          if (snap.val()[key].sender === userObj?.email) {
            list = [...list, snap.val()[key]];
          }
        }
        setList(list);
      })
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 5),
      );
  }, []);

  return (
    <SendPresenter
      sendList={sendList}
      isLoading={isLoading}
      {...props}
    />
  );
};
export default Send;
