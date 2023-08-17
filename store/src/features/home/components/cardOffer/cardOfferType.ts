type MainImageDataType = {
  paths: {
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
};

export type CardOfferType = {
  data: {
    id: number;
    type: string;
    title: string;
    mainImageData: MainImageDataType;
    textLink: string;
  };
  css: Record<string, string>;
};