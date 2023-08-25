import { Link } from "gatsby";
import React from "react";

interface Props {
  text: string;
  path: string;
}

export const RouteButton: React.FC<Props> = ({ text, path }) => (
  <Link to={path} className="btn-primary">
    {text}
  </Link>
);
