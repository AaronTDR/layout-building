import { ReactElement, Dispatch, SetStateAction } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type DropdownMenuItem = ReactElement<any, any>;

export type DropdownMenuType = {
  icon: IconDefinition;
  iconCss: string;
  menuWidthPercentage: number;
  dropdownPosition: string;
  children: DropdownMenuItem[];
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};
