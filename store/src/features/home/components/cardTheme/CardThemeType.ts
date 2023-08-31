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

export type CardThemeType = {
  data: {
    id: number;
    cardCategory: "theme";
    title: string;
    mainImageData: MainImageDataType;
    secondaryImages: SecondaryImagesType;
    textLink: string;
  };
  css: Record<string, string>;
};
