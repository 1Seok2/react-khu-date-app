/**
 * show hamburger nav's list
 */

import React, { memo } from 'react';
import * as s from './Menu.styled';
import { color } from '@/theme/color';

const MenuList = ({
  name,
  path,
  pathname,
  icon,
  onClickHBG,
}: any) => {
  return (
    <s.SLi>
      <s.SLink
        onClick={onClickHBG}
        to={path}
        style={
          pathname.includes(path) ||
          (pathname.includes('contact') &&
            path.includes('contact'))
            ? {
                backgroundColor: color.datedark,
                color: 'white',
              }
            : {
                backgroundColor: 'rgba(255,255,255,0)',
                color: color.black,
              }
        }
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <i
              className={icon}
              style={
                pathname.includes(path) ||
                (pathname.includes('contact') &&
                  path.includes('contact'))
                  ? {
                      color: 'white',
                      marginRight: 8,
                    }
                  : {
                      color: '#eee',
                      marginRight: 8,
                      fontWeight: 400,
                    }
              }
            />
          </div>
          <h3
            style={
              pathname.includes(path) ||
              (pathname.includes('contact') &&
                path.includes('contact'))
                ? {
                    color: 'white',
                    marginRight: 8,
                  }
                : {
                    color: '#eee',
                    marginRight: 8,
                    fontWeight: 400,
                  }
            }
          >
            {name}
          </h3>
        </div>
      </s.SLink>
    </s.SLi>
  );
};

export default memo(MenuList);
