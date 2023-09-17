type MainImageDataType = {
  paths: {
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
};

export type CardSponsoredType = {
  data: {
    id: number;
    cardCategory: "sponsored";
    mainImageData: MainImageDataType;
  };
  css: Record<string, string>;
};
