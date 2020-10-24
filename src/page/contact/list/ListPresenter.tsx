import React from 'react';
import { Link } from 'react-router-dom';
import { ListProps } from '../type';

const ListPresenter = ({
  userObj,
  opponent,
}: ListProps): JSX.Element => (
  <div>
    <h1>이성 목록</h1>
    <div>
      {opponent?.map(person => (
        <Link
          to={{
            pathname: '/contact/detail',
            state: {
              ...person,
            },
          }}
          key={person.email}
        >
          <h2>이메일 : {person.email}</h2>
        </Link>
      ))}
    </div>
  </div>
);

export default ListPresenter;
