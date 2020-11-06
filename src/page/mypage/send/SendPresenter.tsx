/**
 * @description 내가 호감 표시간 목록
 */
import React from 'react';
import moment from 'moment';
import { ChatObj } from '../type';
import Loading from '@/components/util/loading';
import Nothing from '@/components/util/nothing';
import { UserObj } from '@/components/util/usertype';
import * as s from './Send.styled';

interface SendProps {
  userObj: UserObj | null;
  sendList: Array<ChatObj>;
  isLoading: boolean;
  opponent: any;
}

const SendPresenter = ({
  userObj,
  sendList,
  isLoading,
  opponent,
  ...props
}: SendProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : sendList.length === 0 ? (
    <Nothing />
  ) : (
    <s.ListContainer>
      {sendList.map((person, idx) => (
        <s.ListItem key={person.createdAt} delay={idx} read>
          <s.SLink
            to={{
              pathname: '/contact/detail',
              state: {
                person: opponent[idx], // 내가 상대 고른 상대 정보
                userObj: userObj, // 내 정보
              },
            }}
          >
            <s.Icon
              read
              className={
                person.receiverSaw === 1
                  ? 'icon-envelope-open-o'
                  : 'icon-mail'
              }
            />
            <s.DescContainer>
              <s.Strong>{person.receiverNickname}</s.Strong>
              <s.FixDesc read>님에게 보낸 호감</s.FixDesc>
            </s.DescContainer>
            <s.DateContainer>
              <s.Date read>
                {moment(person.createdAt).format(
                  'YY.MM.DD',
                )}
              </s.Date>
              <s.Read read>
                {person.receiverSaw === 1
                  ? '확인함!'
                  : '확인 안함'}
              </s.Read>
            </s.DateContainer>
          </s.SLink>
        </s.ListItem>
      ))}
    </s.ListContainer>
  );

export default SendPresenter;

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
