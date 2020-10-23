/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { color } from '@/theme/color';
import { Link } from 'react-router-dom';

/**
 * common ...
 */
export const SignWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  min-width: 220px;
  max-width: 300px;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignInTitle = styled.h1`
  font-size: 23px;
  font-weight: 400;
  color: ${color.black};
  margin-bottom: 24px;
`;

export const SInput = styled.input`
  border: 1px solid ${color.grayborder};
  background-color: none;
  margin-bottom: 8px;
  padding: 8px 18px;
  border-radius: 3px;
  &:focus {
    outline: none;
    border: 1px solid ${color.date};
  }
  &::placeholder {
    color: ${color.lightgray};
  }
`;

export const SubmitButton = styled.button``;

export const SignUpButton = styled(Link)``;
