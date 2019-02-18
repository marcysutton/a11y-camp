import * as React from "react";
import styled, { ThemeConsumer } from "styled-components";
import { SharedData } from "./layout";
import { H1, Rule } from "./headlines";
import { LinkBlock } from "./link-block";
import { OctoLogo } from "./octo-logo";

const Container = styled.header``;

const TagPara = styled.p`
  font-size: 24px;
`;

const LogoContainer = styled.div`
  max-width: 192px;
  margin: 0;
`;

export const Tagline: React.FC<{ className?: string }> = props => {
  return (
    <SharedData.Consumer>
      {context => (
        <Container className={props.className}>
          <LogoContainer>
            <ThemeConsumer>{theme => <OctoLogo theme={theme} />}</ThemeConsumer>
          </LogoContainer>

          <H1>{context.title}</H1>
          <TagPara>
            A community event to grow in and learn all things a11y while connecting
            with companies and engineers with the same passion.
          </TagPara>
          <Rule />
          <time>{context.eventDate}</time>
          <address>Seattle Central Library — 1000 4th Ave 98104</address>
          <LinkBlock href="#">Register</LinkBlock>
        </Container>
      )}
    </SharedData.Consumer>
  );
};
