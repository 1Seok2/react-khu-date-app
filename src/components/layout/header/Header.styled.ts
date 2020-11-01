/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { color } from '@/theme/color';
import { SmallTabletWidth } from '@/theme/width';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 55px;
  width: 100%;
  max-width: ${SmallTabletWidth};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid ${color.grayborder};
`;

export const HeaderTitle = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  margin-left: 1rem;
`;
