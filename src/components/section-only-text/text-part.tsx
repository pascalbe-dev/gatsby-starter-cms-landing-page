import React from "react";
import { Enumeration } from "./enumeration";
import { Heading } from "./heading";
import { RouteButton } from "./route-button";
import { Space } from "./space";
import { Text } from "./text";

type TextProps = React.ComponentProps<typeof Text> & { type: "text" };
type HeadingProps = React.ComponentProps<typeof Heading> & { type: "heading" };
type EnumerationProps = React.ComponentProps<typeof Enumeration> & {
  type: "enumeration";
};
type SpaceProps = React.ComponentProps<typeof Space> & { type: "space" };
type RouteButtonProps = React.ComponentProps<typeof RouteButton> & {
  type: "routeButton";
};
type CustomNodeProps = {
  type: "customNode";
  node: React.ReactNode;
};

type Props =
  | TextProps
  | HeadingProps
  | EnumerationProps
  | SpaceProps
  | RouteButtonProps
  | CustomNodeProps;

export const TextPart: React.FC<Props> = (props) => {
  if (props.type === "text") return <Text {...props} />;

  if (props.type === "heading") return <Heading {...props} />;

  if (props.type === "enumeration") return <Enumeration {...props} />;

  if (props.type === "space") return <Space {...props} />;

  if (props.type === "routeButton") return <RouteButton {...props} />;

  if (props.type === "customNode") return <>{props.node}</>;

  return null;
};
