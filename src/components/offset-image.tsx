import * as React from "react";
import styled from "styled-components";

const SaturatedImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
  filter: grayscale(100%);
  opacity: 0.75;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);
`;

const ImageWrapper = styled.figure`
  position: relative;
  display: block;
  max-width: 480px;
  background: ${props => props.theme.secondary};

  &::before {
    content: "";
    background: ${props => props.theme.secondary};
    position: absolute;
    bottom: -16px;
    right: -16px;
    width: 100%;
    height: 100%;
  }
`;

export const OffsetImage = () => {
  return (
    <ImageWrapper>
      <SaturatedImage src="/images/event.jpg" />
    </ImageWrapper>
  );
};
