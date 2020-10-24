/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * @description 웹 공통 인풋창
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { color } from '@/theme/color';

interface InputProps {
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
  placeholder: string;
  required: boolean;
}

const SInput = styled.input`
  border: 1px solid ${color.grayborder};
  background-color: none;
  margin-bottom: 8px;
  padding: 8px 18px;
  border-radius: 3px;
  width: 80%;
  &:focus {
    outline: none;
    border: 1px solid ${color.date};
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
  }: InputProps): JSX.Element => (
    <SInput
      name={name}
      type={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  ),
);

export default TextInput;
