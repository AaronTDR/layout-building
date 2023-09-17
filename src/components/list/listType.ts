import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconType = {
  name: IconDefinition;
  css: string;
};

type Element = {
  path: string;
  text: string;
  cssLink: string;
  icon?: IconType;
};

export type ListType = {
  ulTagCss?: string;
  liTagCss?: string;
  elements: Element[];
};
