/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
`;

export const Group = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
  color: #555;
`;

export const ErrorPw = styled.h4`
  font-size: 10px;
  text-align: right;
  font-weight: 500;
  color: #c0392b;
  width: 230px;
`;

export const ChangeAuthStatus = styled.a`
  margin-top: 12px;
  font-size: 10px;
  color: ${color.gray};
  font-weight: 500;
`;
