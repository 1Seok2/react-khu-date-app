/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Heart from '@/components/util/heart';
import { color } from '@/theme/color';
import {
  SmallTabletWidth,
  SmartPhoneWidth,
} from '@/theme/width';
import styled, { keyframes } from 'styled-components';

const change = keyframes`
0%{
  opacity : 0;
  z-index : -1;
}
1%{
  transform : scaleY(-10%);
}
60%{
  transform : scale(10%);
}
100%{
  opacity : 1;
  transform : none;
  z-index : 1;
}
`;

export const HandImageSlider = styled.div`
  display: flex;
  /* background-color: rgba(222, 222, 222, 0.5); */
  width: 100%;
  height: 100vw;
  max-height: ${SmallTabletWidth};
  align-items: center;
  justify-content: center;
`;

export const ImageWrappser = styled.div`
  width: 98.6%;
  height: 98.6%;
  border-radius: 1.2rem;
  overflow: hidden;
  border: 1px solid ${color.grayborder};
  position: relative;
`;

interface ImageProps {
  uri?: string;
  current?: boolean;
}

export const ImageContainer = styled.div`
  ${(props: ImageProps) =>
    props.uri
      ? `
background-image: url(${`${props.uri}`});
`
      : `
background-image: url('https://1seok2.github.io/CSS-exercises/assets/tranditional/woman-1822646_640.jpg');`}
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: ${(props: ImageProps) =>
    props.current ? 1 : 0};
  animation: ${(props: ImageProps) =>
      props.current ? change : null}
    0.3s both ease-in;

  border-radius: 1.2rem;
  overflow: hidden;
`;

/**
 * description
 */

export const DescContainer = styled.div`
  margin: 0 auto;
  padding: 0 12px;
  max-width: 28rem;
`;

export const Title = styled.h1`
  margin-bottom: 22px;
  margin-top: 11px;
  font-size: 20px;
  font-weight: 500;
  margin-left: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 11px;

  @media (min-width: ${SmartPhoneWidth}) {
    margin-bottom: 1.3rem;
  }
`;

export const SubTitle = styled.h2`
  margin-left: 8px;
  margin-right: 6px;
  width: 30%;
  min-width: 80px;
  max-width: 130px;
  font-size: 14px;
  font-weight: 400;

  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 20px;
  }
`;

export const Description = styled.span`
  font-size: 17px;
  font-weight: 600;

  @media (min-width: ${SmartPhoneWidth}) {
    font-size: 26px;
  }
`;

export const Empty = styled.div`
  height: 100px;
`;

export const ChangeStatusContainer = styled.div`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

interface StatusCircleButtonProps {
  current?: boolean;
}

export const StatusCircleButton = styled.a`
  width: 12px;
  height: 12px;

  border-radius: 12px;
  background-color: ${(props: StatusCircleButtonProps) =>
    props.current ? color.date : color.gray};
`;

const Vibe = keyframes`
0%{
  transform : none;
}
33%{
  transform : rotate(30deg);
}
/* 50%{
  transform : rotate(0deg);
} */
66%{
  transform : rotate(-30deg);
}
100%{
  transform:none;
}
`;

export const LikeButton = styled.a`
  background-image: url(${Heart});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 53px;
  height: 53px;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 2rem;
  box-shadow: 0px 1px 8px -2px rgba(0, 0, 0, 0.6);
  background-color: white;
  z-index: 11;
  @media (min-width: ${SmallTabletWidth}) {
    right: calc((100vw - ${SmallTabletWidth}) / 2 + 2rem);
  }

  &:hover {
    animation: ${Vibe} 2s infinite ease-in-out;
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: 12px;
  width: 226px;
  height: 150px;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 12;
  box-shadow: 0px 2px 15px -5px rgba(0, 0, 0, 0.8);
`;

export const NoticeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Notice = styled.h3`
  font-size: 13px;
  font-weight: 300;
  text-align: justify;
  line-height: 16px;
`;

export const ButtonContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface SButtonProps {
  back?: boolean;
}

export const SButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  color: ${(props: SButtonProps) =>
    props.back ? color.gray : 'white'};
  flex-grow: 1;
  flex: 1;
  background-color: ${(props: SButtonProps) =>
    props.back ? color.grayborder : color.date};
  border-radius: 3px;
  &:first-child {
    margin-right: 4px;
  }
  &:focus {
    outline: none;
  }
`;
