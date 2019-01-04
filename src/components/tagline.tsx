import * as React from "react";
import styled from "styled-components";
import { SharedData } from "./layout";
import { H1 } from "./headlines";
import { LinkBlock } from "./link-block";

const TagPara = styled.p`
  font-size: 24px;
`;

export const Tagline = () => {
  return (
    <SharedData.Consumer>
      {context => (
        <>
          <H1>{context.title}</H1>
          <TagPara>
            A community event to grow in and learn all things a11y while connecting
            with companies and engineers with the same passion.
          </TagPara>
          <time>{context.eventDate}</time>
          <address>Seattle Central Library — 1000 4th Ave 98104</address>
          <LinkBlock href="#">Register</LinkBlock>
        </>
      )}
    </SharedData.Consumer>
  );
};
