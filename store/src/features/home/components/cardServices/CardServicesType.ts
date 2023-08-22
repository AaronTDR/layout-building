type SectionType = {
  backgroundImg: string;
  logo: string;
  altLogo: string;
  header: string;
  description: string;
  brand: string;
};

type SectionsDataType = {
  section1: SectionType;
  section2: SectionType;
  section3: SectionType;
  section4: SectionType;
};

export type CardServicesType = {
  data: {
    id: number;
    cardType: "services";
    title: string;
    sectionsData: SectionsDataType;
    textLink: string;
  };
  css: Record<string, string>;
};
