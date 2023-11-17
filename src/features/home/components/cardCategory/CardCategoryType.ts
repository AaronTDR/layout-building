type SecondaryImageData = {
  path: string;
  figcaptionText: string;
  alt: string;
};

type MainImageDataType = {
  paths: {
    large: string;
    medium: string;
    small: string;
  };
  figcaptionText: string;
  alt: string;
};

type SecondaryImagesType = {
  img1: SecondaryImageData;
  img2: SecondaryImageData;
  img3: SecondaryImageData;
};

export type CardCategoryType = {
  data: {
    id: number;
    cardCategory: "category";
    title: string;
    mainImageData: MainImageDataType;
    secondaryImages: SecondaryImagesType;
    textLink: string;
  };
  css: Record<string, string>;
};
