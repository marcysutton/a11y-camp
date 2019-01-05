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
  margin: 0 8px;
  width: calc(100% / 6);
  flex: 1;
  font-size: 14px;
`;

const Tray = styled.div`
  display: flex;
`;

const Container = styled.div`
  max-width: 300px;
  margin: 32px auto;
  text-align: center;
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
    <Container>
      <Tray>
        {rainbowx.map((color, index) => (
          <ButtonContainer
            key={index}
            aria-label="Change the Theme Color of the Page">
            <ButtonColor
              aria-label={color.name}
              color={color.value}
              onClick={() => updateColor(color.name)}
            />
          </ButtonContainer>
        ))}
      </Tray>
      <span>Change the Theme</span>
    </Container>
  );
};

export default ThemeController;
