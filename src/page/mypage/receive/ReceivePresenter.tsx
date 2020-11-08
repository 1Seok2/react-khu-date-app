/**
 * @description 호감 받은 목록
 */
import React from 'react';
import moment from 'moment';
import { ChatObj } from '../type';
import { UserObj } from '@/components/util/usertype';

import Loading from '@/components/util/loading';

import * as s from './Receive.styled';
import Nothing from '@/components/util/nothing';
import { FirebaseRDB } from '@/config/firebase.config';
import { Title } from '@/page/contact/list/List.styled';

interface ReceiveProps {
  receiveList: Array<ChatObj>;
  isLoading: boolean;
  userObj: UserObj | null;
  opponent: any;
}

const ReceivePresenter = ({
  receiveList,
  isLoading,
  userObj,
  opponent,
  ...props
}: ReceiveProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : receiveList.length === 0 ? (
    <Nothing />
  ) : (
    <>
      <Title>받은 목록</Title>
      <s.ListContainer>
        {receiveList.map((person, idx) => (
          <s.ListItem
            key={person.createdAt}
            delay={idx}
            read={person.receiverSaw === 1}
          >
            <s.SLink
              to={{
                pathname: '/contact/detail',
                state: {
                  person: opponent[idx], // 내가 상대 고른 상대 정보
                  userObj: userObj, // 내 정보
                },
              }}
              onClick={() => {
                if (person.receiverSaw !== 1) {
                  FirebaseRDB.ref(
                    `chat/${person.createdAt}`,
                  ).update({
                    receiverSaw: 1,
                  });
                }
              }}
            >
              <s.Icon
                read={person.receiverSaw === 1}
                className={
                  person.receiverSaw === 1
                    ? 'icon-envelope-open-o'
                    : 'icon-mail'
                }
              />
              <s.DescContainer>
                <s.Strong>{person.senderNickname}</s.Strong>
                <s.FixDesc read>님에게 받은 호감</s.FixDesc>
              </s.DescContainer>
              <s.DateContainer>
                <s.Date read={person.receiverSaw === 1}>
                  {moment(person.createdAt).format(
                    'YY.MM.DD',
                  )}
                </s.Date>
                <s.Read read={person.receiverSaw === 1}>
                  {person.receiverSaw === 1
                    ? '확인함!'
                    : '확인 안함'}
                </s.Read>
              </s.DateContainer>
            </s.SLink>
          </s.ListItem>
        ))}
      </s.ListContainer>
    </>
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
