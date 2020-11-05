import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '@/theme/color';

export const SLi = styled.li`
  &:hover {
    background-color: ${color.datelight};
  }
`;

export const SLink = styled(Link)`
  margin-top: 6px;
`;

export const Entity = styled.span`
  color: ${(props: any) =>
    props.current ? 'white' : '#666'};
  float: right;
`;
