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
  address: string;
  description: string;
  email: string;
  url: string;
  registerUrl: string;
}

export const SharedData = React.createContext({} as ISharedData);

const GlobalStyles = createGlobalStyle`
  html {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }

  a {
    color: ${props => props.theme.primary};
  }
`;

const LayoutContainer = styled.div``;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        date
        address
        email
        siteUrl
        registerUrl
      }
    }
  }
`;

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
  public readonly state: ILayoutState = {
    currentColor: "blue"
  };

  private updateColor = (color: string): void => {
    this.setState({
      currentColor: color
    });
  };

  public componentDidMount(): void {
    const color: string = localStorage.getItem("LOCAL_THEME_COLOR");

    if (color) {
      this.updateColor(color);
    }
  }

  public componentDidUpdate(prevProps: ILayoutProps, prevState: ILayoutState): void {
    if (this.state.currentColor !== prevState.currentColor) {
      localStorage.setItem("LOCAL_THEME_COLOR", this.state.currentColor);
    }
  }

  public render(): JSX.Element {
    const theme = themeGenerator(this.state.currentColor);
    return (
      <StaticQuery query={query}>
        {data => (
          <ThemeProvider theme={theme}>
            <SharedData.Provider
              value={{
                title: data.site.siteMetadata.title,
                eventDate: data.site.siteMetadata.date,
                address: data.site.siteMetadata.address,
                email: data.site.siteMetadata.email,
                url: data.site.siteMetadata.siteUrl,
                description: data.site.siteMetadata.description,
                registerUrl: data.site.siteMetadata.registerUrl
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
