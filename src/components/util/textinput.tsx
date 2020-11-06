/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * @description 웹 공통 인풋창
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { color } from '@/theme/color';

interface InputProps {
  name: string;
  value: string | undefined;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  placeholder?: string;
  required: boolean;
  onKeyUp?: (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => void;
}

const SInput = styled.input`
  border: none;
  border-bottom: 1px solid ${color.grayborder};
  background-color: none;
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${color.date};
  }
  &::placeholder {
    color: ${color.lightgray};
  }
`;

const TextInput = memo(
  ({
    name,
    value,
    onChange,
    placeholder,
    required,
    onKeyUp,
  }: InputProps): JSX.Element => (
    <SInput
      name={name}
      type={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      onKeyUp={onKeyUp}
    />
  ),
);

export default TextInput;
