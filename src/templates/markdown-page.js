import React, { Component } from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser'
import styled from "styled-components"

import SEO from '../components/seo'
import Layout from '../components/layout'
import Wrapper from "../components/wrapper"
import { Section } from "../components/section"
import Header from "../components/header"

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 40px;
`

const StyledHeader = styled(Header)``

class PageTemplate extends Component {
    render() {
        const page = this.props.data.markdownRemark
        return (
            <Layout pathname={this.props.pageContext.pathname}>
                <SEO title={page.frontmatter.title} keywords={[`a11y`, `a11ycamp`, `seattle`, `a11ysea`]} />
                <StyledWrapper center>
                    <StyledHeader />
                    <Section title={page.frontmatter.title}>
                        {ReactHtmlParser(page.html)}
                    </Section>
                </StyledWrapper>
            </Layout>
        )
    }
}

export default PageTemplate


export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
      }
      html
    }
  }
`