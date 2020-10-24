/**
 * @description 내가 호감 표시간 목록
 * @todo 추후 표나 플랫리스트로 표시
 */
import React from 'react';
import moment from 'moment';
import { ChatObj } from '../type';

interface ReceiveProps {
  receiveList: Array<ChatObj>;
  isLoading: boolean;
  accept: (chat: any) => void;
  reject: (chat: any) => void;
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
      <div>ld...</div>
    ) : (
      <div>
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
      </div>
    )}
  </>
);
export default ReceivePresenter;
