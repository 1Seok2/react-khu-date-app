/**
 * @description 호감 받은 목록
 * @todo 추후 표나 플랫리스트로 표시
 */
import React from 'react';
import moment from 'moment';
import { ChatObj } from '../type';

import Loading from '@/components/util/loading';

interface ReceiveProps {
  receiveList: Array<ChatObj>;
  isLoading: boolean;
  accept: (chat: ChatObj) => void;
  reject: (chat: ChatObj) => void;
}

const ReceivePresenter = ({
  receiveList,
  isLoading,
  accept,
  reject,
  ...props
}: ReceiveProps): JSX.Element => (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <h1>받은 목록</h1>
        <div>
          {receiveList.length === 0 ? (
            <div> 목록이 존재하지 않아 </div>
          ) : (
            receiveList.map(item => (
              <div key={item.receiver}>
                <h2>상대 : {item.receiver}</h2>
                <h2>
                  받은 일자 :{' '}
                  {moment(item.createdAt).format(
                    'YY.MM.DD',
                  )}
                </h2>
                <button onClick={() => accept(item)}>
                  수락
                </button>
                <button onClick={() => reject(item)}>
                  거절
                </button>
              </div>
            ))
          )}
        </div>
      </>
    )}
  </>
);
export default ReceivePresenter;
