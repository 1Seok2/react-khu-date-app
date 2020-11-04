/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
import styled from 'styled-components';

/**
 * profile
 */
export const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 3.5rem;
  padding-bottom: 1.8rem;
  position: relative;
`;

export const UserImageContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 5px;
  border: 1px solid ${color.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.8rem;
`;

export const UserInfoContainer = styled.div`
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 1.5rem;
`;

export const UserGroup = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: #fafafa;
`;

export const UserName = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin-top: 12px;
  color: #555;
`;

export const Sir = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #fafafa;
  margin-left: 8px;
`;

export const SignOut = styled.a`
  font-size: 14px;
  font-weight: 300;
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  color: #fafafa;
  &:hover {
    cursor: pointer;
  }
`;
