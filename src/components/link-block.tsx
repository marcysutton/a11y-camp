import styled from "styled-components";
import { updatedColors } from "./theme";

export const LinkBlock = styled.a`
  background: ${props => props.theme.primary};
  color: ${props =>
    props.theme.primary === updatedColors.yellow.primary
      ? props.theme.text
      : "white"};
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  padding: 12px 36px;
  border-radius: 4px;
`;
