import React from "react";

interface Props {
  text: string;
  level?: 2 | 3;
}

export const Heading: React.FC<Props> = ({ text, level = 2 }) => {
  if (level === 3) return <h3 className="headline6 mb-2 mt-4">{text}</h3>;

  return <h2 className="headline4 mb-4 mt-6">{text}</h2>;
};
