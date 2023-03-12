import type { PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import HowSection from "../components/section-how";
import LandingSection from "../components/section-landing";
import WhySection from "../components/section-why";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <LandingSection></LandingSection>
    <HowSection></HowSection>
    <WhySection></WhySection>
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <>
    <title>Awesome Product: Increase conversion by up to 200%</title>
    <html lang="en" className="scroll-smooth scroll-p-24" />
  </>
);
