import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import ContactFormSection from "../components/section-contact-form";
import HowSection from "../components/section-how";
import LandingSection from "../components/section-landing";
import WhySection from "../components/section-why";

export interface IndexSubpageProps {
  indexData: {
    slogan: string;
    sloganDescription: string;
    sloganButtonText: string;
  };
}

const IndexPage: React.FC<PageProps<any>> = ({ data }) => {
  const frontmatter = data.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <Layout>
      <LandingSection indexData={frontmatter}></LandingSection>
      <HowSection></HowSection>
      <WhySection></WhySection>
      <div className="h-32 w-full bg-secondary"></div>
      <ContactFormSection></ContactFormSection>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Product - Increase conversion by up to 200%</title>
    <html lang="en" className="scroll-p-24 scroll-smooth" />
  </>
);

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md/i" } }) {
      nodes {
        frontmatter {
          slogan
          sloganDescription
          sloganButtonText
        }
      }
    }
  }
`;
