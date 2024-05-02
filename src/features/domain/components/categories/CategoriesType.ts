import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CategoriesArray = {
  id: string;
  name: string;
  icon: IconDefinition;
};

export type CategoriesType = {
  domain: {
    name: string;
    categories: CategoriesArray[];
  };
};
