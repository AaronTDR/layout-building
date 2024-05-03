import { MouseEventHandler } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconType = {
  name: IconDefinition;
  css: string;
};

type Element = {
  id: string;
  path: string;
  text: string;
  cssLink: string;
  titleLink?: string;
  icon?: IconType;
  onClick?: () => void | MouseEventHandler<HTMLLIElement> | undefined;
};

export type ListType = {
  ulTagCss?: string;
  liTagCss?: string;
  elements: Element[];
};
