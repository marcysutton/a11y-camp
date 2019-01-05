import styled from "styled-components";
import hexToRgba from "hex-to-rgba";

export const H1 = styled.h1`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;
`;

export const H3 = styled.h3`
  font-weight: 900;
  font-size: 24px;
`;

export const PLarge = styled.p`
  margin-top: 0;
  font-size: 18px;
  line-height: 1.6;
`;

export const P = styled.p`
  margin-top: 0;
  font-size: 14px;
  line-height: 1.6;
`;

export const Rule = styled.hr`
  box-sizing: border-box;
  height: 3px;
  background: ${props => props.theme.primary};
  border: 0;
  margin: 0 0 32px;
  max-width: 80px;
`;

export const BlockQuote = styled.blockquote`
  --border: 3px solid ${props => props.theme.primary};
  padding: 1rem;
  margin: 5rem auto;
  max-width: 33rem;
  background: ${props => hexToRgba(props.theme.primary, 0.125)};
  position: relative;
  font-family: system-ui, sans-serif;

  &::before,
  &::after {
    content: "";
    display: block;
    height: 50%;
    width: 50%;
    user-select: none;
    z-index: -1;
    position: absolute;
  }

  &::after {
    top: -16px;
    left: -16px;
    border-left: var(--border);
    border-top: var(--border);
  }

  &::before {
    border-right: var(--border);
    border-bottom: var(--border);
    bottom: -16px;
    right: -16px;
  }
`;
