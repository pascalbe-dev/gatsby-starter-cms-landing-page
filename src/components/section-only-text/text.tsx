import React from "react";

interface Props {
  text: string;
  link?: string;
}

export const Text: React.FC<Props> = ({ text, link }) => (
  <p className="body">
    {link ? (
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="underline"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </p>
);
