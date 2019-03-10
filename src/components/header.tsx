import * as React from "react";
import styled, { ThemeConsumer } from "styled-components";
import { SharedData } from "./layout";
import { OctoLogo } from "./octo-logo";
import Wrapper from "./wrapper";
import { H1 } from "./headlines";

const StyledWrapper = styled(Wrapper)``;

const StyledHeader = styled.header`
  text-align: center;
`;
const LogoContainer = styled.div`
  max-width: 192px;
  margin: 0 auto;
`;

const Header: React.FC<{ className?: string }> = props => {
  return (
    <SharedData.Consumer>
      {context => (
        <StyledWrapper
          center
          style={{
            padding: `1.45rem 1.0875rem`
          }}>
          <StyledHeader className={props.className}>
            <LogoContainer>
              <ThemeConsumer>{theme => <OctoLogo theme={theme} />}</ThemeConsumer>
            </LogoContainer>
            <H1>{context.title} - <time>{context.eventDate}</time></H1>
          </StyledHeader>
        </StyledWrapper>
      )}
    </SharedData.Consumer>
  );
};

export default Header;
