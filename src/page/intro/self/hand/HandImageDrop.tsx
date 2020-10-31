import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as s from '../style/SelfStyled';

const HandImageDrop = ({ files, onDrop }: any) => {
  // index ( 0: front, 1: back, 2: free )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <s.Container>
      <s.ContentWrapper>
        <s.UploadedImagesWrapper>
          {files.length > 0 ? (
            <s.UploadedImage
              src={URL.createObjectURL(files[0])}
            />
          ) : (
            <s.UploadedImage />
          )}

          {files.length > 1 ? (
            <s.UploadedImage
              src={URL.createObjectURL(files[1])}
            />
          ) : (
            <s.UploadedImage />
          )}
          {files.length > 2 ? (
            <s.UploadedImage
              src={URL.createObjectURL(files[2])}
            />
          ) : (
            <s.UploadedImage />
          )}
        </s.UploadedImagesWrapper>

        <s.ImageDropZone {...getRootProps()}>
          <input {...getInputProps()} />
          <p>
            본인의 손사진을 업로드해주세요. 최대 3장
            업로드하실 수 있습니다.
          </p>
        </s.ImageDropZone>
      </s.ContentWrapper>
    </s.Container>
  );
};

export default HandImageDrop;
