import { MouseEventHandler } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconType = {
  name: IconDefinition;
  css: string;
};

type Element = {
  path: string;
  text: string;
  cssLink: string;
  cssLinkActive: string;
  titleLink?: string;
  icon?: IconType;
  onClick?: () => void | MouseEventHandler<HTMLLIElement> | undefined;
};

export type NavListType = {
  ulTagCss?: string;
  liTagCss?: string;
  elements: Element[];
};
