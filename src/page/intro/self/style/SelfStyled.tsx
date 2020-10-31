import styled from 'styled-components';
import { color } from '../../../../theme/color';

export const Container = styled.div`
  height: 100%;
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
  border: 5px dashed ${color.pointcolor};
  color: ${color.pointcolor};
  font-size: 48px;
  border-radius: 10px;
  font-family: 'KyoboHand';

  &:hover {
    background: ${color.pointcolor};
    color: white;
    font-weight: 600;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputLabelText = styled.div``;

export const InputTextBox = styled.input`
  width: 150px;
  height: 150px;
  padding: 5%;
  font-size: 48px;
  font-family: 'KyoboHand';
  text-align: center;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 5px;
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
  justify-content: space-around;
`;

export const UploadedImage = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid hsl(0, 0%, 80%);
  border-radius: 10px;
`;

export const ImageDropZone = styled.div`
  margin-top: 5%;
  border: 5px dashed hsl(0, 0%, 80%);
  border-radius: 10px;
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
