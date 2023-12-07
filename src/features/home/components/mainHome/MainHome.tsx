import { useState, useEffect, useContext } from "react";

/* components */
import CardServices from "../cardServices/CardServices";
import CardSponsored from "../cardSponsored/CardSponsored";
import CardProduct from "../cardProduct/CardProduct";
import CardCategory from "../cardCategory/CardCategory";
import CardOffer from "../cardOffer/CardOffer";

/* types */
import { CardServicesType } from "../cardServices/CardServicesType";
import { CardSponsoredType } from "../cardSponsored/CardSponsoredType";
import { CardProductType } from "../cardProduct/CardProductType";
import { CardCategoryType } from "../cardCategory/CardCategoryType";
import { CardOfferType } from "../cardOffer/CardOfferType";

/* theme context */
import { ThemeContext } from "../../../../contexts/ThemeProvider";

/* styles */
import cardServices from "../../stylesHome/cardServices.module.css";
import cardSponsored from "../../stylesHome/cardSponsored.module.css";
import cardProduct from "../../stylesHome/cardProduct.module.css";
import cardOffer from "../../stylesHome/cardOffer.module.css";
import cardCategory from "../../stylesHome/cardCategory.module.css";
import cardsGrid from "../../stylesHome/cardsGrid.module.css";
import cardWrapperTheme from "../../stylesHome/cardWrapperTheme.module.css";
import styles from "./mainCardsContainer.module.css";

/* services */
import { getCardsHome } from "../../services/getCardsHome/getCardsHome";

/* utils */
import { getThemeClasses } from "../../../../utils/getThemeClasses/getThemeClasses";

type CardElementsArrayType = Array<
  | CardOfferType
  | CardCategoryType
  | CardProductType
  | CardSponsoredType
  | CardServicesType
>;

type CardElementType =
  | CardOfferType
  | CardCategoryType
  | CardProductType
  | CardSponsoredType
  | CardServicesType;

const MainHome = () => {
  const [cardElements, setCardElements] = useState<CardElementsArrayType>([]);

  // Get the theme context
  const themeContext = useContext(ThemeContext);
  const { isDarkMode } = themeContext || { isDarkMode: false };

  /* Gets a CSS properties object with the addition of the 'theme' class that contains the theme colors for the card wrapper */
  const cardOfferWithTheme = {
    ...cardOffer,
    theme: getThemeClasses(isDarkMode, cardWrapperTheme),
  };

  const cardCategoryWithTheme = {
    ...cardCategory,
    theme: getThemeClasses(isDarkMode, cardWrapperTheme),
  };

  const cardProductWithTheme = {
    ...cardProduct,
    theme: getThemeClasses(isDarkMode, cardWrapperTheme),
  };

  const cardSponsoredWithTheme = {
    ...cardSponsored,
    theme: getThemeClasses(isDarkMode, cardWrapperTheme),
  };

  const cardServicesWithTheme = {
    ...cardServices,
    theme: getThemeClasses(isDarkMode, cardWrapperTheme),
  };

  useEffect(() => {
    const elements = getCardsHome() as CardElementsArrayType;
    setCardElements(elements);
  }, []);

  /* Identifies the type of component to render according to the type of card and returns it by passing its props */
  const cardRenderer = (el: CardElementType) => {
    switch (el.data.cardCategory) {
      case "offer":
        return (
          <CardOffer key={el.data.id} data={el.data} css={cardOfferWithTheme} />
        );

      case "category":
        return (
          <CardCategory
            key={el.data.id}
            data={el.data}
            css={cardCategoryWithTheme}
          />
        );

      case "product":
        return (
          <CardProduct
            key={el.data.id}
            data={el.data}
            css={cardProductWithTheme}
          />
        );

      case "sponsored":
        return (
          <CardSponsored
            key={el.data.id}
            data={el.data}
            css={cardSponsoredWithTheme}
          />
        );

      case "services":
        return (
          <CardServices
            key={el.data.id}
            data={el.data}
            css={cardServicesWithTheme}
          />
        );

      default:
        return null;
    }
  };
  return (
    <main className={styles.container}>
      <div className={cardsGrid.grid}>
        {cardElements.map((cardElement: CardElementType) =>
          cardRenderer(cardElement)
        )}
      </div>
    </main>
  );
};

export default MainHome;
