/**
 * @description 안드로이드 Toast처럼 사용. alert 대신
 * @param message 토스트 띄울 메세지
 * @param setShow 상태함수. 숨길때 false해줌
 */

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const toast = keyframes`
0%{
    opacity : 0;
}
16%{
    opacity : 1;
}
84% {
    opacity : 1;
}
100%{
    opacity : 0;
}
`;

const ToastContainer = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4rem;
  background-color: rgba(50, 50, 50, 0.7);
  width: 180px;
  padding: 12px 24px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 24px;
  z-index: 999;

  animation: ${toast} 3.6s ease-in-out both;
`;

const Message = styled.h1`
  color: white;
  font-weight: 300;
`;

interface ToastProps {
  message: string;
  show?: boolean;
  setShow:
    | React.Dispatch<React.SetStateAction<boolean>>
    | undefined;
}

const Toast = ({ message, setShow }: ToastProps) => {
  useEffect(() => {
    setTimeout(() => {
      if (setShow) {
        setShow(false);
      }
    }, 3600);
  }, []);

  return (
    <ToastContainer>
      <Message>{message}</Message>
    </ToastContainer>
  );
};
export default Toast;
