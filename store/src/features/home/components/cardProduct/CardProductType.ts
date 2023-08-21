type MainImageDataType = {
  paths: {
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
};

export type CardProductType = {
  data: {
    id: number;
    cardType: "product";
    title: string;
    mainImageData: MainImageDataType;
    textLink: string;
  };
  css: Record<string, string>;
};
