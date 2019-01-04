import * as React from "react";
import styled from "styled-components";
import hexToRgba from "hex-to-rgba";

const SaturatedImage = styled.img`
  display: block;
  height: auto;
  width: 100%;
  filter: grayscale(100%);
  opacity: 0.75;
  object-fit: cover;
  object-position: center;
  mix-blend-mode: screen;
  margin: 0;
`;

const ImageWrapper = styled.figure`
  position: relative;
  display: block;
  max-width: 480px;
`;

const Frame = styled.div`
  background: ${props => props.theme.primary};
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);

  &::before {
    content: "";
    background: ${props => hexToRgba(props.theme.primary, ".5")};
    position: absolute;
    bottom: -16px;
    right: -16px;
    width: 100%;
    height: 100%;
  }
`;

// TODO: wrap image in frame

export const OffsetImage = () => {
  return (
    <ImageWrapper>
      <Frame className="Frame">
        <SaturatedImage src="/images/event.jpg" />
      </Frame>
    </ImageWrapper>
  );
};
