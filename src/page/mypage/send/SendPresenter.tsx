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
import { Link } from 'react-router-dom';
import { color } from '@/theme/color';

interface SendProps {
  userObj: UserObj | null;
  sendList: Array<ChatObj>;
  isLoading: boolean;
  imgList: any;
  opponent: any;
}

const SendPresenter = ({
  userObj,
  sendList,
  isLoading,
  imgList,
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
        <s.ListItem
          key={opponent[idx].email}
          delay={idx}
          bgUri={
            // 'https://1seok2.github.io/CSS-exercises/assets/tranditional/beauty-1822519_640.jpg'
            imgList !== undefined
              ? imgList[idx]
              : 'https://1seok2.github.io/CSS-exercises/assets/tranditional/beauty-1822519_640.jpg'
          }
        >
          <Link
            to={{
              pathname: '/contact/detail',
              state: {
                person: opponent[idx], // 내가 상대 고른 상대 정보
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
                {opponent[idx].college} {opponent[idx].age}
                세
              </s.Group>
              <s.NickName>
                {opponent[idx].nickname}
              </s.NickName>
            </s.DescContainer>
          </Link>
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
