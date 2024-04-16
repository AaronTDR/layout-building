import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonWithText = {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  cssButton: string;
  text: string;
  cssText: string;
  icon?: IconDefinition;
  cssIcon?: string;
  inlineStyles?: React.CSSProperties;
};

type ButtonWithoutText = {
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  cssButton: string;
  text?: string;
  cssText?: string;
  icon: IconDefinition;
  cssIcon: string;
  inlineStyles?: React.CSSProperties;
};

export type ButtonType = ButtonWithText | ButtonWithoutText;
