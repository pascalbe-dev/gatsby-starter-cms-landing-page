import { Link } from "gatsby";
import * as React from "react";
import downArrow from "../images/down-arrow.svg";
import landing from "../images/landing.svg";
import { IndexSubpageProps } from "../pages";

const LandingSection: React.FC<IndexSubpageProps> = ({ indexData }) => (
  <section className="h-[calc(100vh-96px)] flex flex-col justify-around">
    <div className="hidden lg:block" />
    <div className="flex justify-between items-center gap-16 px-8 lg:px-24 py-8 lg:py-0">
      <div
        data-sal="slide-up"
        className="flex-1 flex flex-col items-start gap-8"
      >
        <h1 className="text-5xl font-serif">{indexData.slogan}</h1>
        <p className="text-gray-500">{indexData.sloganDescription}</p>
        <Link className="p-4 rounded-lg bg-teal-800 text-white" to="/">
          {indexData.sloganButtonText}
        </Link>
      </div>
      <div className="flex-1 hidden items-center justify-center lg:flex">
        <img
          src={landing}
          alt="Illustration"
          className="min-h-[400px] max-h-[600px]"
        />
      </div>
    </div>
    <div className="hidden lg:flex items-center justify-center animate-bounce">
      <Link to="#how">
        <img src={downArrow} alt="Scrollen" className="h-30" />
      </Link>
    </div>
  </section>
);

export default LandingSection;
