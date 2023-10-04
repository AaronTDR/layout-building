import { Dispatch, SetStateAction } from "react";
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
  onClick?: () => void;
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
};

export type ListType = {
  ulTagCss?: string;
  liTagCss?: string;
  elements: Element[];
  setState?: Dispatch<SetStateAction<boolean>>;
};
