import React from "react";

interface Props {
  preText?: string;
  enumeration: string[];
}

export const Enumeration: React.FC<Props> = ({ preText, enumeration }) => (
  <>
    {preText && <p className="mb-2 mt-4">{preText}</p>}
    <ul>
      {enumeration.map((item, index) => (
        <li key={index} className="list-inside list-disc">
          {item}
        </li>
      ))}
    </ul>
  </>
);
