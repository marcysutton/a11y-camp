import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
`;

const List = styled.ul`
  list-style: none inside;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 16px 8px;
`;

export const Footer = () => (
  <StyledFooter>
    <List>
      <ListItem>
        <a href="/2017/">2018 Camp Info</a>
      </ListItem>
      <ListItem>
        <a href="/code-of-conduct/">Code of Conduct</a>
      </ListItem>
    </List>
    <p>
      Produced by <a href="http://meetup.com/a11ysea">A11ySea</a>,{" "}
      <a href="https://twitter.com/marcysutton">Marcy Sutton</a> and{" "}
      <a href="https://twitter.com/devonpersing">Devon Persing</a>.<br />
      Artwork by <a href="http://cordeliadillon.com/">Cordelia McGee-Tubb</a>.
    </p>
    <small>
      © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </small>
  </StyledFooter>
);
