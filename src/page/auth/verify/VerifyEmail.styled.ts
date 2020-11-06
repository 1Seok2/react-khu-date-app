/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
`;

export const SendEmailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Email = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #555;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const NeedNotice = styled.div`
  font-weight: 100;
  font-size: 24px;
`;

export const UserEmail = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: ${color.date};
  margin-left: 8px;
  width: 100%;
  text-align: right;
  margin-top: 24px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SendButtonProps {
  enable: boolean;
}

export const SendButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: white;
  background-color: ${(props: SendButtonProps) =>
    props.enable ? color.datedark : color.date};
  border: 1px solid
    ${(props: SendButtonProps) =>
      props.enable ? color.datedark : color.date};
  border-radius: 3px;
  flex-grow: 1;
  margin-top: 32px;
`;

export const ReloadButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  border: 1px solid ${color.grayborder};
  color: ${color.gray};
  width: 50px;
  margin-top: 32px;
  border-radius: 3px;
  margin-left: 4px;
`;

export const Notice = styled.h4`
  font-size: 12px;
  font-weight: 300;
  color: #c0392b;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;
