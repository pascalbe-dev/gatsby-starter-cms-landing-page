import React from "react";
import { TextPart } from "./text-part";

interface Props {
  title: string;
  textParts: React.ComponentProps<typeof TextPart>[];
  requiresMinHeight?: boolean;
  width?: "small" | "medium" | "large";
  textAlign?: "left" | "center";
  animateContent?: boolean;
}

export const OnlyTextSection: React.FC<Props> = ({
  title,
  textParts,
  requiresMinHeight = true,
  animateContent = false,
  width = "large",
  textAlign = "left",
}) => {
  const heightClass = requiresMinHeight ? "min-h-[calc(100vh-288px)]" : "";
  const widthClass =
    width === "small"
      ? "size-sm"
      : width === "medium"
      ? "size-md"
      : width === "large"
      ? "size-lg"
      : "";
  const textAlignClass = textAlign === "center" ? "text-center" : "text-left";

  return (
    <section
      data-sal={animateContent ? "slide-up" : undefined}
      data-sal-duration="700"
      className={`m-auto break-words px-4 ${heightClass} ${widthClass} ${textAlignClass}`}
    >
      <h1 className="headline3 my-8">{title}</h1>
      <div className="flex flex-col">
        {textParts.map((textPart, index) => (
          <TextPart key={index} {...textPart}></TextPart>
        ))}
      </div>
    </section>
  );
};
