import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { SignUpForm } from "../components/signup-form";
import { OffsetImage } from "../components/offset-image";
import { Tagline } from "../components/tagline";
import Wrapper from "../components/wrapper";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper center style={{ display: "flex", justifyContent: "space-between" }}>
      <Wrapper half>
        <Tagline />
      </Wrapper>
      <OffsetImage />
    </Wrapper>

    <Wrapper half center>
      <SignUpForm />
    </Wrapper>
  </Layout>
);

export default IndexPage;
