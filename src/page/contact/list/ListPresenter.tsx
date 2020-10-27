/**
 * @description 이성목록 출력
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ListProps } from '../type';

import Loading from '@/components/util/loading';

const ListPresenter = ({
  userObj,
  opponent,
  isLoading,
}: ListProps): JSX.Element => (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <div>
        <h1>이성 목록</h1>
        <div>
          {opponent?.map(person => (
            <Link
              to={{
                pathname: '/contact/detail',
                state: {
                  person: person,
                  userObj: userObj,
                },
              }}
              key={person.email}
            >
              <h2>이메일 : {person.email}</h2>
            </Link>
          ))}
        </div>
      </div>
    )}
  </>
);

export default ListPresenter;
