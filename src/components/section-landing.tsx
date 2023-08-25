import { Link } from "gatsby";
import * as React from "react";
import downArrow from "../images/down-arrow.svg";
import landing from "../images/landing.svg";
import { IndexSubpageProps } from "../pages";

const LandingSection: React.FC<IndexSubpageProps> = ({ indexData }) => (
  <section className="size-lg flex h-[calc(100vh-96px)] flex-col justify-around">
    <div className="hidden lg:block" />
    <div className="flex items-center justify-between gap-16 py-8 lg:py-0">
      <div
        data-sal="slide-up"
        className="flex flex-1 flex-col items-start gap-8"
      >
        <h1 className="headline2 font-serif">{indexData.slogan}</h1>
        <p className="text-emph-md subtitle1">{indexData.sloganDescription}</p>
        <Link className="btn-primary" to="/">
          {indexData.sloganButtonText}
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center lg:flex">
        <img
          src={landing}
          alt="Illustration"
          className="max-h-[600px] min-h-[400px]"
        />
      </div>
    </div>
    <div className="hidden animate-bounce items-center justify-center lg:flex">
      <Link to="#how">
        <img src={downArrow} alt="Scrollen" className="h-30" />
      </Link>
    </div>
  </section>
);

export default LandingSection;
