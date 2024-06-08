export type Picture = { id: string; url: string };

export type PicturesArr = Picture[];

export type Item = {
  id: string;
  title: string;
  original_price: number | null;
  price: number;
  official_store_name: string;
  shipping: { free_shipping: string | null };
  picturesArr?: PicturesArr;
};

export type ResultsType = Item[];

export type resType = {
  code: number;
  body: {
    id: string;
    pictures?: Picture[];
  };
};

export type QueryType = string | null;
