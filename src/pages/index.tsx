import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SignUpForm } from "../components/signup-form";
import { OffsetImage } from "../components/offset-image";
import { Tagline } from "../components/tagline";
import { Section } from "../components/section";
import { H3, P, BlockQuote, PLarge } from "../components/headlines";
import { Bucket, BucketIconWrapper, BucketContainer } from "../components/bucket";
import Wrapper from "../components/wrapper";
import {
  VoteIcon,
  FoodIcon,
  TravelIcon,
  ChildFriendlyIcon
} from "../components/icons";
import { SponsorMap, SPONSOR_COLLECTION } from "../components/sponsors-list";

const StyledWrapper = styled(Wrapper)`
  margin-bottom: 40px;
`;

const StyledTagline = styled(Tagline)`
  max-width: 480px;
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
        justifyContent: "space-between",
        alignItems: "center"
      }}>
      <StyledTagline />

      <OffsetImage />
    </StyledWrapper>

    <StyledWrapper center style={{ paddingTop: 64, paddingBottom: 64 }}>
      <SignUpForm />
    </StyledWrapper>
    <StyledWrapper center>
      <BlockQuote>
        <BucketIconWrapper background center>
          <VoteIcon />
        </BucketIconWrapper>
        <H3 style={{ textAlign: "center" }}>Unconference</H3>
        <PLarge>
          Accessibility Camp Seattle is an <em>unconference</em>. An unconference is
          a participant-driven meeting. The term "unconference" has been applied, or
          self-applied, to a wide range of gatherings that try to avoid one or more
          aspects of a conventional conference, such as fees, sponsored
          presentations, and top-down organization.
        </PLarge>
      </BlockQuote>
    </StyledWrapper>
    <Wrapper center>
      <Section title="Event Info">
        <BucketContainer>
          <Bucket title="Travel" icon={TravelIcon}>
            <P>
              The event will be held at the Seattle Public Library in downtown
              Seattle. Looking for a place to stay or how to get to the venue? We
              have a whole page devoted to that topic! Visit Travel Information.
            </P>
          </Bucket>
          <Bucket title="Food Options" icon={FoodIcon}>
            <P>
              Coffee and tea will be served in the morning along with a light
              breakfast, courtesy of Starbucks. Lunch will be provided courtesy of
              Microsoft, with snacks and drinks thanks to Egghead.io. Let us know
              during registration if you need a vegetarian or vegan option, or if you
              have other dietary concerns.
            </P>
          </Bucket>
          <Bucket title="Childcare" icon={ChildFriendlyIcon}>
            <P>
              We know that it can be hard to attend an event on the weekend if you’ve
              got family obligations. You are welcome to bring kids, and will have
              the public library at your disposal during its open hours. During
              registration, we’d love to know if you need other options for
              childcare, and we’re going to do our best to provide!
            </P>
          </Bucket>
        </BucketContainer>
      </Section>
      <SponsorMap sponsors={SPONSOR_COLLECTION} />
    </Wrapper>
  </Layout>
);

export default IndexPage;
