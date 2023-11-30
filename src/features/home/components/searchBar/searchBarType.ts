import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SearchBarTypeWithoutIcon = {
  placeholder: string;
  icon?: never;
  iconCss?: never;
  onInputChange?: (inputValue: string) => void;
};

type SearchBarTypeWithIcon = {
  placeholder: string;
  icon: IconDefinition;
  iconCss: string;
  onInputChange?: (inputValue: string) => void;
};

export type SearchBarType = SearchBarTypeWithIcon | SearchBarTypeWithoutIcon;
