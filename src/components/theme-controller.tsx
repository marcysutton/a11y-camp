import * as React from "react";
import styled from "styled-components";
import { rainbowColors } from "./theme";

const ButtonColor = styled.button<{ color: string }>`
  background: ${props => props.color};
  width: 24px;
  height: 24px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: block;
  border: 0;
  appearance: none;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin: 0 8px;
  width: calc(100% / 6);
  flex: 1;
  font-size: 14px;
`;

const Tray = styled.div`
  display: flex;
  max-width: 300px;
  margin: 32px auto;
`;

const ThemeController: React.SFC<{
  updateColor: (c: string) => void;
}> = ({ updateColor }) => {
  const rainbowx = Object.keys(rainbowColors).map(r => {
    return {
      name: r,
      value: rainbowColors[r]
    };
  });
  return (
    <Tray>
      {rainbowx.map((color, index) => (
        <ButtonContainer key={index}>
          <ButtonColor
            color={color.value}
            onClick={() => updateColor(color.value)}
          />

          {color.name}
        </ButtonContainer>
      ))}
    </Tray>
  );
};

export default ThemeController;
