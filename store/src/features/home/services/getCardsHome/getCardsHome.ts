/* offer */
import trendsLargeImage from "../../../../assets/img/cards/trend/trends-large.webp";
import trendsMediumImage from "../../../../assets/img/cards/trend/trends-medium.webp";
import trendsSmallImage from "../../../../assets/img/cards/trend/trends-small.webp";

import gymLarge from "../../../../assets/img/cards/gym/gym-large.webp";
import gymMedium from "../../../../assets/img/cards/gym/gym-medium.webp";
import gymSmall from "../../../../assets/img/cards/gym/gym-small.webp";

import petLarge from "../../../../assets/img/cards/pets/pet-medium.webp";
import petMedium from "../../../../assets/img/cards/pets/pet-small.webp";
import petSmall from "../../../../assets/img/cards/pets/pet-large.webp";

/* Theme */
/* Fashion */
import fashionLargeImage from "../../../../assets/img/cards/fashion/fashion-1-large.webp";
import fashionMediumImage from "../../../../assets/img/cards/fashion/fashion-1-medium.webp";
import fashionSmallImage from "../../../../assets/img/cards/fashion/fashion-1-small.webp";

import miniatureFashion1 from "../../../../assets/img/cards/fashion/fashion-2-small.webp";
import miniatureFashion2 from "../../../../assets/img/cards/fashion/fashion-3-small.webp";
import miniatureFashion3 from "../../../../assets/img/cards/fashion/fashion-4-small.webp";
/* Gamer */
import gamerLarge from "../../../../assets/img/cards/gamer/gamer-1-large.webp";
import gamerMedium from "../../../../assets/img/cards/gamer/gamer-1-medium.webp";
import gamerSmall from "../../../../assets/img/cards/gamer/gamer-1-small.webp";

import miniatureGamer1 from "../../../../assets/img/cards/gamer/gamer-2-small.webp";
import miniatureGamer2 from "../../../../assets/img/cards/gamer/gamer-3-small.webp";
import miniatureGamer3 from "../../../../assets/img/cards/gamer/gamer-4-small.webp";
/* Product */
import productLarge from "../../../../assets/img/cards/bonus/bonus-large.webp";
import productMedium from "../../../../assets/img/cards/bonus/bonus-medium.webp";
import productSmall from "../../../../assets/img/cards/bonus/bonus-small.webp";
/* sponsored */
import sponsoredLarge from "../../../../assets/img/cards/sponsored/prime-large.webp";
import sponsoredMedium from "../../../../assets/img/cards/sponsored/prime-medium.webp";
import sponsoredSmall from "../../../../assets/img/cards/sponsored/prime-small.webp";
/* services */
/* streaming */
import streamingBackground1 from "../../../../assets/img/cards/services/background-1.webp";
import streamingBackground2 from "../../../../assets/img/cards/services/background-2.webp";
import streamingBackground3 from "../../../../assets/img/cards/services/background-3.webp";
import streamingBackground4 from "../../../../assets/img/cards/services/background-4.webp";

import streamingLogo1 from "../../../../assets/img/cards/services/logo-1.webp";
import streamingLogo2 from "../../../../assets/img/cards/services/logo-2.webp";
import streamingLogo3 from "../../../../assets/img/cards/services/logo-3.webp";
import streamingLogo4 from "../../../../assets/img/cards/services/logo-4.webp";

export const getCardsHome = () => {
  const cardsHomeList = [
    {
      data: {
        id: 1,
        cardType: "offer",
        title: "Offers",
        mainImageData: {
          paths: {
            large: trendsLargeImage,
            medium: trendsMediumImage,
            small: trendsSmallImage,
          },
          alt: "Image of trending products",
        },
        discount: "Up to 40% off",
        OfferTime: "Deal of the day",
        description: "Offers in clothing and electronics",
        textLink: "See more",
      },
    },
    {
      data: {
        id: 2,
        cardType: "theme",
        title: "Trends",
        mainImageData: {
          paths: {
            large: fashionLargeImage,
            medium: fashionMediumImage,
            small: fashionSmallImage,
          },
          figcaptionText: "Style",
          alt: "Image of woman wearing fashionable",
        },
        secondaryImages: {
          img1: {
            path: miniatureFashion1,
            figcaptionText: "Women's Clothing",
            alt: "Shows a girl with shopping bags",
          },
          img2: {
            path: miniatureFashion2,
            figcaptionText: "Shoes",
            alt: "Group of young people showing their shoes",
          },
          img3: {
            path: miniatureFashion3,
            figcaptionText: "Trendy Fashion",
            alt: "happy girl wearing colorful clothes",
          },
        },
        textLink: "See more",
      },
    },
    {
      data: {
        id: 3,
        cardType: "product",
        title: "Discover participating bank bonuses",
        mainImageData: {
          paths: {
            large: productLarge,
            medium: productMedium,
            small: productSmall,
          },
          alt: "Show images of credit cards",
        },
        textLink: "See more",
      },
    },
    {
      data: {
        id: 4,
        cardType: "sponsored",
        mainImageData: {
          paths: {
            large: sponsoredLarge,
            medium: sponsoredMedium,
            small: sponsoredSmall,
          },
          alt: "Show images of credit cards",
        },
      },
    },
    {
      data: {
        id: 5,
        cardType: "offer",
        title: "Offers",
        mainImageData: {
          paths: {
            large: gymLarge,
            medium: gymMedium,
            small: gymSmall,
          },
          alt: "Image of a woman training in the gym",
        },
        discount: "Up to 30% off",
        OfferTime: "Deal of the day",
        description: "Offers on gym accessories",
        textLink: "See more",
      },
    },
    {
      data: {
        id: 6,
        cardType: "theme",
        title: "Discounts on gaming equipment",
        mainImageData: {
          paths: {
            large: gamerLarge,
            medium: gamerMedium,
            small: gamerSmall,
          },
          figcaptionText: "Laptops",
          alt: "Image of a gaming laptop",
        },
        secondaryImages: {
          img1: {
            path: miniatureGamer1,
            figcaptionText: "Accessories",
            alt: "Image of a pc mouse",
          },
          img2: {
            path: miniatureGamer2,
            figcaptionText: "Consoles",
            alt: "Image of a nintendo switch",
          },
          img3: {
            path: miniatureGamer3,
            figcaptionText: "Wireless headphones",
            alt: "Image of Wireless headphones",
          },
        },
        textLink: "See more",
      },
    },
    {
      data: {
        id: 7,
        cardType: "services",
        title: "Benefits",
        sectionsData: {
          section1: {
            backgroundImg: streamingBackground1,
            logo: streamingLogo1,
            altLogo: "Star+ logo",
            header: "",
            description: "Watch with a free Prime trial",
            brand: "STAR+",
          },
          section2: {
            backgroundImg: streamingBackground2,
            logo: streamingLogo2,
            altLogo: "HBO MAX logo",
            header: "7 DAYS FREE",
            description: "Up to 50% discount",
            brand: "HBO MAX",
          },
          section3: {
            backgroundImg: streamingBackground3,
            logo: streamingLogo3,
            altLogo: "Paramount+ logo",
            header: "7 DAYS FREE",
            description: "Up to 50% discount",
            brand: "Paramount+",
          },
          section4: {
            backgroundImg: streamingBackground4,
            logo: streamingLogo4,
            altLogo: "Spotify logo",
            header: "7 DAYS FREE",
            description: "Up to 50% discount",
            brand: "Spotify",
          },
        },
        textLink: "Discover more",
      },
    },
    {
      data: {
        id: 8,
        cardType: "offer",
        title: "Offers",
        mainImageData: {
          paths: {
            large: petLarge,
            medium: petMedium,
            small: petSmall,
          },
          alt: "Image of a dog",
        },
        discount: "Up to 50% off",
        OfferTime: "Deal of the day",
        description: "Offers on everything your pet needs",
        textLink: "See more",
      },
    },
  ];
  return cardsHomeList;
};
