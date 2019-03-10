import React from 'react'
import styled from "styled-components"

import Layout from '../components/layout'
import Wrapper from "../components/wrapper"
import { Section } from "../components/section"
import Header from "../components/header"

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 40px;
`
const StyledHeader = styled(Header)``

import SEO from '../components/seo'

import "../styles/tito.css"

const RegisterPage = () => (
    <Layout>
        <SEO title="Register" keywords={[`a11y`, `a11ycamp`, `seattle`, `a11ysea`, `register`]} />
        <StyledWrapper center>
            <StyledHeader />
            <Section title="Register">
                <script src='https://js.tito.io/v1' async></script>

                <tito-widget event="accessibility-camp-seattle/2019"></tito-widget>
            </Section>
        </StyledWrapper>
    </Layout>
)
export default RegisterPage