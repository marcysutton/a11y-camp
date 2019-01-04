import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import { rainbowColors, themeGenerator } from "./theme";
import { Footer } from "./footer";
import ThemeController from "./theme-controller";

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

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
  state = {
    currentColor: rainbowColors.red
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
              <LayoutContainer>
                <ThemeController updateColor={this.updateColor} />
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
