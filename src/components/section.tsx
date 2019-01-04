import * as React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  margin-bottom: 24px;
`;
const SectionTitle = styled.h3`
  font-weight: 900;
`;

export const Section: React.SFC<{ title: string }> = props => (
  <SectionContainer>
    <SectionTitle>{props.title}</SectionTitle>
    {props.children}
  </SectionContainer>
);
