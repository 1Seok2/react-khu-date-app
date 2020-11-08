import styled from 'styled-components';
import {
  SmallTabletWidth,
  SmartPhoneWidth,
} from '@/theme/width';
import { color } from '../../../../theme/color';

export const Container = styled.div`
  height: -moz-calc(100vh - (55px));
  height: -webkit-calc(100vh - (55px));
  height: calc(100vh - (55px));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SelectBox = styled.div<{
  isSelected: boolean;
}>`
  width: 15vw;
  height: 15vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 5px dashed ${color.pointcolor};
  color: ${props =>
    props.isSelected ? 'white' : color.pointcolor};
  background: ${props =>
    props.isSelected ? color.pointcolor : 'white'};
  font-weight: ${props => (props.isSelected ? 600 : '')};
  font-size: 48px;
  border-radius: 10px;
  font-family: 'KyoboHand';

  &:hover {
    background: ${color.pointcolor};
    color: white;
    font-weight: 600;
  }

  @media (max-width: ${SmartPhoneWidth}) {
    width: 20vw;
    height: 20vw;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputLabelText = styled.div`
  font-family: 'KyoboHand';
  font-size: 24px;
`;

export const InputTextBox = styled.input`
  width: 50%;
  height: 10%;
  padding: 3%;
  margin-top: 10%;
  font-size: 24px;
  font-family: 'KyoboHand';
  text-align: center;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 5px;
  text-align: left;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const UploadedImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const UploadedImage = styled.img`
  width: 15vw;
  height: 15vw;
  border: 2px solid hsl(0, 0%, 80%);
  border-radius: 10px;

  @media (max-width: ${SmartPhoneWidth}) {
    width: 20vw;
    height: 20vw;
  }
`;

export const ImageDropZone = styled.div`
  margin-top: 5%;
  border: 5px dashed hsl(0, 0%, 80%);
  border-radius: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${SmartPhoneWidth}) {
    height: 100px;
  }
`;
