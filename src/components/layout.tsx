import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import { themeGenerator } from "./theme";
import { Footer } from "./footer";
import ThemeController from "./theme-controller";
import Wrapper from "./wrapper";

interface ILayoutProps {
  children: React.ReactNode;
}

interface ILayoutState {
  currentColor: string;
}

interface ISharedData {
  eventDate: string;
  title: string;
}

export const SharedData = React.createContext({} as ISharedData);

const GlobalStyles = createGlobalStyle`
  html {
    background: ${props => props.theme.background};
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

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
  state = {
    currentColor: "blue"
  };

  private updateColor = (color: string): void => {
    this.setState({ currentColor: color });
  };

  public render(): JSX.Element {
    const theme = themeGenerator(this.state.currentColor);
    return (
      <StaticQuery query={query}>
        {data => (
          <ThemeProvider theme={theme}>
            <SharedData.Provider
              value={{
                title: data.site.siteMetadata.title,
                eventDate: data.site.siteMetadata.date
              }}>
              <Wrapper center half>
                <ThemeController updateColor={this.updateColor} />
              </Wrapper>
              <LayoutContainer>
                <GlobalStyles />
                <main role="main">{this.props.children}</main>
                <Footer />
              </LayoutContainer>
            </SharedData.Provider>
          </ThemeProvider>
        )}
      </StaticQuery>
    );
  }
}
