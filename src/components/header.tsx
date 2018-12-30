import * as React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";
import { H1 } from "./headlines";

interface IHeaderProps {
  siteTitle: string;
  eventDate: string;
}

const StyledHeader = styled.header`
  text-align: center;
`;

const Header: React.SFC<IHeaderProps> = props => {
  return (
    <StyledHeader>
      <Wrapper
        center
        style={{
          padding: `1.45rem 1.0875rem`
        }}>
        <H1>{props.siteTitle}</H1>
        <span>{props.eventDate}</span>
      </Wrapper>
    </StyledHeader>
  );
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
