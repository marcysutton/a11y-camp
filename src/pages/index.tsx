import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SignUpForm } from "../components/signup-form";
import { OffsetImage } from "../components/offset-image";
import { Tagline } from "../components/tagline";
import { Section } from "../components/section";
import { Bucket, BucketContainer } from "../components/bucket";
import Wrapper from "../components/wrapper";
import { VoteIcon } from "../components/icons";
// import VoteIcon from "react-material-icon-svg/dist/VoteIcon";

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 40px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledWrapper
      center
      style={{
        paddingTop: 64,
        paddingBottom: 64,
        display: "flex",
        justifyContent: "space-between"
      }}>
      <Wrapper half>
        <Tagline />
      </Wrapper>
      <OffsetImage />
    </StyledWrapper>

    <StyledWrapper center style={{ paddingTop: 64, paddingBottom: 64 }}>
      <SignUpForm />
    </StyledWrapper>
    <Wrapper center>
      <Section title="Event Info">
        <BucketContainer>
          <Bucket title="Unconference" icon={VoteIcon}>
            <p>
              An unconference is a participant-driven meeting. The term
              "unconference" has been applied, or self-applied, to a wide range of
              gatherings that try to avoid one or more aspects of a conventional
              conference, such as fees, sponsored presentations, and top-down
              organization.
            </p>
          </Bucket>
          <Bucket title="Something">
            <p>Hello</p>
          </Bucket>
          <Bucket title="Something">
            <p>Hello</p>
          </Bucket>
        </BucketContainer>
      </Section>
      <Section title="Event Info">Hello</Section>
    </Wrapper>
  </Layout>
);

export default IndexPage;
