import React, { useEffect, useState } from 'react';
import { FirebaseRDB } from '@/config/firebase.config';

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
   * 리스트 가져오기
   */
  useEffect(() => {
    let list: any = [];
    FirebaseRDB.ref(`chat`).on(
      'value',
      (snap: firebase.database.DataSnapshot) => {
        let key;
        for (key in snap.val()) {
          if (snap.val()[key].receiver === userObj?.email) {
            const obj = {
              ...snap.val()[key],
              enable: snap.val()[key].receiverOk !== 0,
            };
            list = [...list, obj];
          }
        }
        setList(list);
      },
    );

    setTimeout(() => {
      setLoading(false);
    }, 50);
  }, []);

  return (
    <ReceivePresenter
      receiveList={receiveList}
      isLoading={isLoading}
      accept={accept}
      reject={reject}
      {...props}
    />
  );
};
export default ReceiveContainer;
