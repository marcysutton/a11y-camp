import * as React from "react";
import styled from "styled-components";
import Wrapper from "./wrapper";

interface IHeaderProps {
  siteTitle: string;
  eventDate: string;
}

const StyledHeader = styled.header`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 16px;
  }
`;

const Header: React.SFC<IHeaderProps> = props => {
  return (
    <StyledHeader>
      <Wrapper
        center
        style={{
          padding: `1.45rem 1.0875rem`
        }}>
        <h1>{props.siteTitle}</h1>
        <span>{props.eventDate}</span>
      </Wrapper>
    </StyledHeader>
  );
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
