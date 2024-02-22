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
