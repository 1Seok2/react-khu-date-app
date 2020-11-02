/**
 * @description 내가 호감 표시간 목록
 * @todo 추후 표나 플랫리스트로 표시
 */
import React from 'react';
import moment from 'moment';
import { ChatObj } from '../type';
import Loading from '@/components/util/loading';
import Nothing from '@/components/util/nothing';

interface SendProps {
  sendList: Array<ChatObj>;
  isLoading: boolean;
}

const SendPresenter = ({
  sendList,
  isLoading,
  ...props
}: SendProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : sendList.length === 0 ? (
    <Nothing />
  ) : (
    <>
      {sendList.map(item => (
        <div key={item.receiver}>
          <h2>상대 : {item.receiver}</h2>
          <h2>
            보낸 일자 :{' '}
            {moment(item.createdAt).format('YY.MM.DD')}
          </h2>
        </div>
      ))}
    </>
  );
export default SendPresenter;
