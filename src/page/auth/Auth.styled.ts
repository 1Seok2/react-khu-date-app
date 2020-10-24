/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { color } from '@/theme/color';
import { Link } from 'react-router-dom';

/**
 * common ...
 */
export const AuthWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  min-width: 180px;
  max-width: 270px;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthTitle = styled.h1`
  font-size: 23px;
  font-weight: 400;
  color: ${color.black};
  margin-bottom: 24px;
`;

export const SubmitButton = styled.button``;

export const ChangeAuthButton = styled(Link)``;

export const GenderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 18px;
  height: 30px;
  width: 80%;
`;

interface GenderProps {
  current: boolean;
}

export const ChangeGender = styled.a`
  flex: 1;
  padding: 10px;
  background-color: ${(props: GenderProps) =>
    props.current ? color.date : 'white'};
  border-radius: 3px;
`;
