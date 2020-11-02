/**
 * @description 이성목록 출력
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ListProps } from '../type';

import Loading from '@/components/util/loading';
import Nothing from '@/components/util/nothing';

import * as s from './List.styled';
import { color } from '@/theme/color';

const ListPresenter = ({
  userObj,
  opponent,
  isLoading,
}: ListProps): JSX.Element =>
  isLoading ? (
    <Loading />
  ) : opponent?.length === 0 ? (
    <Nothing />
  ) : (
    <s.ListContainer>
      {opponent?.map((person, idx) => (
        <s.ListItem
          key={person.email}
          delay={idx}
          bgUri={
            'https://1seok2.github.io/CSS-exercises/assets/tranditional/beauty-1822519_640.jpg'
          }
        >
          <Link
            to={{
              pathname: '/contact/detail',
              state: {
                person: person, // 내가 상대 고른 상대 정보
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
              <s.Group>단과대 학번</s.Group>
              <s.NickName>닉네임</s.NickName>
            </s.DescContainer>
          </Link>
        </s.ListItem>
      ))}
    </s.ListContainer>
  );
export default ListPresenter;

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

/*


        <s.ListContainer>
          {opponent?.map(person => (
            <s.ListItem key={person.email}>
              <Link
                to={{
                  pathname: '/contact/detail',
                  state: {
                    person: person,
                    userObj: userObj,
                  },
                }}
              >
                <i
                  className="icon-heart"
                  style={{ color: color.date }}
                />
                <div style={{ alignSelf: 'flex-start' }}>
                  <s.Group>단과대</s.Group>
                  <s.NickName>닉네임</s.NickName>
                </div>
                <s.HandImage>
                  <img
                    style={{ zIndex: 1 }}
                    src="https://1seok2.github.io/CSS-exercises/assets/tranditional/dancer-1807516_640.jpg"
                    alt={`${person.nickname}-hand`}
                    width="100%"
                    height="100%"
                  />
                </s.HandImage>
              </Link>
            </s.ListItem>
          ))}
        </s.ListContainer>

*/
