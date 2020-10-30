import styled from 'styled-components';
import { color } from '../../../../theme/color';

export const Container = styled.div`
  padding: 5%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SelectBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid ${color.pointcolor};
  color: ${color.pointcolor};
  font-size: 48px;
  border-radius: 10px;

  &:hover {
    background: ${color.pointcolor};
    color: white;
  }
`;
