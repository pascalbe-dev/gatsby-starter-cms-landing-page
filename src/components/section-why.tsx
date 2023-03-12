import { PageProps } from "gatsby";
import * as React from "react";
import why from "../images/why.svg";

const valuePropositions: { title: string; description: string }[] = [
  {
    title: "A/B Testing Without Tech Headaches",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Be More Productive at Work with Less Effort",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Save Money Without Thinking About It",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const WhySection: React.FC<PageProps> = () => (
  <section id="why" className="flex flex-col gap-8 px-8 lg:px-24 py-8 lg:py-16">
    <h2 className="font-display text-3xl">
      Why should you use Awesome Product?
    </h2>
    <div className="flex justify-between gap-8">
      <ul data-sal="slide-right" className="flex-1 flex flex-col gap-4">
        {valuePropositions.map((vp) => (
          <li key={vp.title} className="flex flex-col gap-4 p-4">
            <h3 className="text-2xl">{vp.title}</h3>
            <p className="text-gray-500">{vp.description}</p>
          </li>
        ))}
      </ul>
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <img
          src={why}
          alt="Reasons to use Awesome Product"
          className="min-h-[300px] max-h-[500px]"
        />
      </div>
    </div>
  </section>
);

export default WhySection;
