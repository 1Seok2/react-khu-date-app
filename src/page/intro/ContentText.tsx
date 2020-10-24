import React, { useState, useEffect } from 'react';
import {
  ContentTextWrapper,
  ContentTextParagraph,
} from './Intro.styled';
import { ContentTextProps } from './type';

const ContentText = ({
  content,
}: ContentTextProps): JSX.Element => {
  return (
    <ContentTextWrapper className={'fadeinTarget'}>
      {content.map((item, index) => (
        <ContentTextParagraph key={index}>
          {item}
        </ContentTextParagraph>
      ))}
    </ContentTextWrapper>
  );
};

export default ContentText;
