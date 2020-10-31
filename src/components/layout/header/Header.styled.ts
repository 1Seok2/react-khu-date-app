/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  box-shadow: 0px 3px 15px -8px rgba(100, 100, 100, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const HeaderTitle = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  margin-left: 24px;
`;
