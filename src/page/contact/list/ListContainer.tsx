/**
 * @description 이성 목록 불러오기
 * @todo 유저 이미지 불러오기
 */

import React, { useEffect, useState } from 'react';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';

import ListPresenter from './ListPresenter';

import { ListProps } from '../type';
import { UserObj } from '@/components/util/usertype';

const ListContainer = ({
  userObj,
  ...props
}: ListProps): JSX.Element => {
  const gender = userObj?.gender;
  const [isLoading, setLoading] = useState(true);

  /**
   * 이성 리스트
   */
  const [opponent, setOpponent] = useState<Array<UserObj>>(
    [],
  );

  const [imgList, setImg] = useState<Array<string>>([]);

  /**
   * 이성 리스트로 저장
   */
  useEffect(() => {
    let list: any = [];

    FirebaseRDB.ref(`users`)
      .once('value')
      .then(
        async (snap: firebase.database.DataSnapshot) => {
          let key;
          for (key in snap.val()) {
            /* 모든 유저중 이성을 리스트로 */
            if (snap.val()[key].gender !== gender) {
              const uri = await FirebaseStorage.ref(
                `hands/${snap.val()[key].email}/0.jpg`,
              ).getDownloadURL();

              const obj = {
                ...snap.val()[key],
                uri: uri,
              };

              list = [...list, obj];
            }
          }
          setOpponent(list);
        },
      )
      .catch(err => console.error(err))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 200),
      );
  }, []);

  // useEffect(() => {
  //   let img: any = [];

  //   for (let i = 0; i < opponent.length; i++) {
  //     FirebaseStorage.ref(
  //       `hands/${opponent[i].email}/0.jpg`,
  //     )
  //       .getDownloadURL()
  //       .then((uri: any) => {
  //         img = [...img, uri];
  //         console.log(uri, opponent[i].email);
  //       })
  //       .then(() => setImg([...img]))
  //       .finally(() =>
  //         setTimeout(() => {
  //           setLoading(false);
  //         }, 200),
  //       );
  //   }
  // }, [opponent]);

  return (
    <ListPresenter
      userObj={userObj}
      opponent={opponent}
      isLoading={isLoading}
      imgList={imgList}
    />
  );
};

export default ListContainer;
