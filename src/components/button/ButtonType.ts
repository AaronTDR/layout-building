import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonWithText = {
  onClick: () => void;
  cssButton: string;
  text: string;
  cssText: string;
  icon?: IconDefinition;
  cssIcon?: string;
};

type ButtonWithoutText = {
  onClick: () => void;
  cssButton: string;
  text?: string;
  cssText?: string;
  icon: IconDefinition;
  cssIcon: string;
};

export type ButtonType = ButtonWithText | ButtonWithoutText;
