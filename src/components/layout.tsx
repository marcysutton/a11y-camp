import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import { theme } from "./theme";
import { Footer } from "./footer";

interface ILayoutProps {
  children: React.ReactNode;
}

interface ISharedData {
  eventDate: string;
  title: string;
}

export const SharedData = React.createContext({} as ISharedData)

const GlobalStyles = createGlobalStyle`
  html {
    background: #FAFAFA;
    color: ${props => props.theme.text};
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;

const LayoutContainer = styled.div``;

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
        <SharedData.Provider value={{
          title: data.site.siteMetadata.title,
          eventDate: data.site.siteMetadata.date
        }}>
          <LayoutContainer>
            <GlobalStyles />
            <main role="main">{props.children}</main>
            <Footer />
          </LayoutContainer>
          </SharedData.Provider>
        </ThemeProvider>
      )}
    </StaticQuery>
  );
};

export default Layout;
