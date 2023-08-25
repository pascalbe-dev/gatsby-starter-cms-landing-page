import { PageProps } from "gatsby";
import * as React from "react";
import how from "../images/how.svg";

const steps: { title: string; description: string }[] = [
  {
    title: "#1 Get you account",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "#2 Choose your tool",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "#3 Get the benefit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const HowSection: React.FC<PageProps> = () => (
  <section id="how" className="bg-primary text-white">
    <div className="size-lg flex items-center justify-between gap-16">
      <img
        src={how}
        alt="Step to get the value from Awesome Product"
        className="hidden max-h-[500px] min-h-[300px] lg:block"
      />
      <div className="flex flex-col justify-between gap-8">
        <h2 className="headline4">How does Awesome Product work?</h2>
        <ul data-sal="slide-up" className="flex flex-1 flex-col gap-4">
          {steps.map((vp) => (
            <li key={vp.title} className="flex flex-col gap-4 p-4">
              <h3 className="headline6">{vp.title}</h3>
              <p className="text-emph-md-negative">{vp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default HowSection;
