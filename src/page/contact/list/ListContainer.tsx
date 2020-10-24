/**
 * @description 이성 목록 불러오기
 */

import React, { useEffect, useState } from 'react';
import { FirebaseRDB } from '@/config/firebase.config';

import ListPresenter from './ListPresenter';

import { ListProps } from '../type';
import { UserObj } from '@/components/util/usertype';

const ListContainer = ({
  userObj,
}: ListProps): JSX.Element => {
  const gender = userObj?.gender;

  /**
   * 이성 리스트
   */
  const [opponent, setOpponent] = useState<Array<UserObj>>(
    [],
  );

  /**
   * 이성 리스트로 저장
   */
  useEffect(() => {
    let list: any = [];

    FirebaseRDB.ref(`users`)
      .once('value')
      .then((snap: firebase.database.DataSnapshot) => {
        let key;
        for (key in snap.val()) {
          /* 모든 유저중 이성을 리스트로 */
          if (snap.val()[key].gender !== gender) {
            list = [...list, snap.val()[key]];
          }
        }
        setOpponent(list);
      });
  }, []);

  return (
    <ListPresenter userObj={userObj} opponent={opponent} />
  );
};

export default ListContainer;
