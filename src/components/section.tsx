import * as React from "react";
import styled from "styled-components";
import { H3 } from "./headlines";

const SectionContainer = styled.section`
  margin-bottom: 24px;
`;

export const Section: React.SFC<{ title: string }> = props => (
  <SectionContainer>
    <H3 style={{ textAlign: "center" }}>{props.title}</H3>
    {props.children}
  </SectionContainer>
);
