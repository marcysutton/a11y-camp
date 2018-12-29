import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import { theme } from "./theme";
import { Footer } from "./footer";

interface ILayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
`;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        date
      }
    }
  }
`;

const Layout: React.SFC<ILayoutProps> = props => {
  return (
    <StaticQuery query={query}>
      {data => (
        <ThemeProvider theme={theme}>
          <LayoutContainer>
            <Header
              siteTitle={data.site.siteMetadata.title}
              eventDate={data.site.siteMetadata.date}
            />
            <main role="main">{props.children}</main>
            <Footer />
          </LayoutContainer>
        </ThemeProvider>
      )}
    </StaticQuery>
  );
};

export default Layout;
