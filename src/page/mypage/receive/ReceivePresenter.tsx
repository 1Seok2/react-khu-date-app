/**
 * @description 호감 받은 목록
 * @todo 추후 표나 플랫리스트로 표시
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
          key={receiveChat.receiver}
          delay={idx}
          // bgUri={receiveChat.uri}
          bgUri={img[idx]}
        >
          <Link
            to={{
              pathname: '/mypage/receive/detail',
              state: {
                receiveChat: receiveChat, // 내가 상대 고른 상대 정보
                userObj: userObj, // 내 정보
              },
            }}
            style={styles.link}
          >
            <div
              style={{
                textAlign: 'right',
                height: '10%',
              }}
            >
              <i
                className="icon-heart"
                style={{ color: color.date }}
              />
            </div>
            <s.DescContainer>
              <s.Group>
                {moment(receiveChat.createdAt).format(
                  'YY.MM.DD HH:mm:ss',
                )}
              </s.Group>
              <s.NickName>
                {receiveChat.senderNickname}
              </s.NickName>
            </s.DescContainer>
          </Link>
        </s.ListItem>
      ))}
    </s.ListContainer>
  );
export default ReceivePresenter;

const styles = {
  link: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  heart: {
    textAlign: 'right',
    height: '10%',
  },
};
