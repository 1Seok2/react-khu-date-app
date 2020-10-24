/**
 * @description 내가 호감 표시간 목록
 * @todo 추후 표나 플랫리스트로 표시
 */
import React from 'react';
import moment from 'moment';

interface SendProps {
  sendList: Array<SendChatObj>;
  isLoading: boolean;
}

interface SendChatObj {
  senderId: string;
  sender: string;
  receiver: string;
  createdAt: string;
  receiverOk: number;
  receiverSaw: number;
}

const SendPresenter = ({
  sendList,
  isLoading,
  ...props
}: SendProps): JSX.Element => (
  <>
    {isLoading ? (
      <div>ld...</div>
    ) : (
      <div>
        <h1>보낸 목록</h1>
        <div>
          {sendList.length === 0 ? (
            <div> 목록이 존재하지 않아 </div>
          ) : (
            sendList.map(item => (
              <div key={item.receiver}>
                <h2>상대 : {item.receiver}</h2>
                <h2>
                  보낸 일자 :{' '}
                  {moment(item.createdAt).format(
                    'YY.MM.DD',
                  )}
                </h2>
              </div>
            ))
          )}
        </div>
      </div>
    )}
  </>
);
export default SendPresenter;
