import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '@/theme/color';

export const SLink = styled(Link)`
  background-color: ${(props: any) =>
    props.current ? color.date : 'none'};
  color: ${(props: any) =>
    props.current ? 'white' : '#666'};
  padding-right: 12px;
  text-align: left;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 3px;
  font-family: 'Nanum Gothic', sans-serif;
`;

export const Entity = styled.span`
  color: ${(props: any) =>
    props.current ? 'white' : '#666'};
  float: right;
  font-family: 'Nanum Gothic', sans-serif;
`;
