type CategoriesArray = {
  id: string;
  name: string;
};

export type CategoriesType = {
  domain: {
    name: string;
    categories: CategoriesArray[];
  };
};
