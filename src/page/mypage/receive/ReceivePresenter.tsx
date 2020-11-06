/**
 * @description 호감 받은 목록
 */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ChatObj } from '../type';
import { UserObj } from '@/components/util/usertype';

import Loading from '@/components/util/loading';

import * as s from './Receive.styled';
import { color } from '@/theme/color';
import Nothing from '@/components/util/nothing';

interface ReceiveProps {
  receiveList: Array<ChatObj>;
  isLoading: boolean;
  userObj: UserObj | null;
  img?: any;
}

const ReceivePresenter = ({
  receiveList,
  isLoading,
  userObj,
  img,
  ...props
}: ReceiveProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : receiveList.length === 0 ? (
    <Nothing />
  ) : (
    <s.ListContainer>
      {receiveList.map((receiveChat, idx) => (
        <s.ListItem
          key={receiveChat.createdAt}
          delay={idx}
          bgUri={img[idx]}
          read={receiveChat.receiverSaw === 1}
        >
          <s.SLink
            to={{
              pathname: '/mypage/receive/detail',
              state: {
                receiveChat: receiveChat, // 내게 호감 보낸 상대와 나 간의 챗 정보
                userObj: userObj, // 내 정보
              },
            }}
          >
            <s.Icon
              read={receiveChat.receiverSaw === 1}
              className={
                receiveChat.receiverSaw === 1
                  ? 'icon-envelope-open-o'
                  : 'icon-mail'
              }
            />
            <s.DescContainer>
              <s.Strong>
                {receiveChat.senderNickname}
              </s.Strong>
              <s.FixDesc
                read={receiveChat.receiverSaw === 1}
              >
                님에게 받은 호감
              </s.FixDesc>
            </s.DescContainer>
            <s.DateContainer>
              <s.Date read={receiveChat.receiverSaw === 1}>
                {moment(receiveChat.createdAt).format(
                  'YY.MM.DD',
                )}
              </s.Date>
              <s.Read read={receiveChat.receiverSaw === 1}>
                {receiveChat.receiverSaw === 1
                  ? '확인함!'
                  : '확인 안함'}
              </s.Read>
            </s.DateContainer>
          </s.SLink>
        </s.ListItem>
      ))}
    </s.ListContainer>
  );
export default ReceivePresenter;

const styles = {
  link: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  heart: {
    textAlign: 'right',
    height: '10%',
  },
};
