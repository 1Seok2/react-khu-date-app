/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * @description 소개창, 등 multiline 입력 받을 인풋 창
 * @todo 높이 설정
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

const SArea = styled.textarea`
  border: 1px solid ${color.grayborder};
  background-color: none;
  margin-bottom: 8px;
  padding: 8px 18px;
  border-radius: 3px;
  width: 80%;
  height: 120px;
  &:focus {
    outline: none;
    border: 1px solid ${color.date};
  }
  &::placeholder {
    color: ${color.lightgray};
  }
`;

const TextArea = memo(
  ({
    name,
    value,
    onChange,
    placeholder,
    required,
  }: InputProps): JSX.Element => (
    <SArea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  ),
);

export default TextArea;
