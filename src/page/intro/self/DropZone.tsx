import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>사진 업로드</p>
      )}
    </div>
  );
};

export default DropZone;
