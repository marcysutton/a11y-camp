import * as React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: white;
  text-align: center;
`

export const Footer = () => (
  <StyledFooter>
    <footer className="center">
  <div className="measure">
    <ul>
      <li>
        <a href="/2017/">2018 Camp Info</a>
      </li>
      <li>
        <a href="/code-of-conduct/">Code of Conduct</a>
      </li>
    </ul>
    <p>
      Produced by <a href="http://meetup.com/a11ysea">A11ySea</a>,{" "}
      <a href="https://twitter.com/marcysutton">Marcy Sutton</a> and{" "}
      <a href="https://twitter.com/devonpersing">Devon Persing</a>.<br />Artwork
      by <a href="http://cordeliadillon.com/">Cordelia McGee-Tubb</a>.
    </p>
  </div>
</footer>

    © 2018, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
);
