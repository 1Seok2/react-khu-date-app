/**
 * @description 이성 목록 불러오기
 */

import React from 'react';
import ListPresenter from './ListPresenter';

import { ListProps } from '../type';

const ListContainer = ({
  userObj,
}: ListProps): JSX.Element => {
  const { gender }: any = userObj;

  return <ListPresenter userObj={userObj} />;
};

export default ListContainer;
