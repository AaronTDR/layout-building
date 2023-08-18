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
    cardType: "offer";
    title: string;
    mainImageData: MainImageDataType;
    discount: string;
    OfferTime: string;
    description: string;
    textLink: string;
  };
  css: Record<string, string>;
};
