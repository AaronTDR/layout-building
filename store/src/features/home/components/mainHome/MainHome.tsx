import { useState, useEffect } from "react";
/* services */
import { getCardsHome } from "../../services/getCardsHome/getCardsHome";
/* components */
import CardServices from "../cardServices/CardServices";
import CardSponsored from "../cardSponsored/CardSponsored";
import CardProduct from "../cardProduct/CardProduct";
import CardTheme from "../cardTheme/CardTheme";
import CardOffer from "../cardOffer/CardOffer";
/* types */
import { CardServicesType } from "../cardServices/CardServicesType";
import { CardSponsoredType } from "../cardSponsored/CardSponsoredType";
import { CardProductType } from "../cardProduct/CardProductType";
import { CardThemeType } from "../cardTheme/CardThemeType";
import { CardOfferType } from "../cardOffer/CardOfferType";
import { MainHomeType } from "./mainHomeType";
/* styles */
import cardServices from "../../stylesHome/cardServices.module.css";
import cardSponsored from "../../stylesHome/cardSponsored.module.css";
import cardProduct from "../../stylesHome/cardProduct.module.css";
import cardOffer from "../../stylesHome/cardOffer.module.css";
import cardTheme from "../../stylesHome/cardTheme.module.css";
import cardsGrid from "../../stylesHome/cardsGrid.module.css";

type CardElementsArrayType = Array<
  | CardOfferType
  | CardThemeType
  | CardProductType
  | CardSponsoredType
  | CardServicesType
>;

type CardElementType =
  | CardOfferType
  | CardThemeType
  | CardProductType
  | CardSponsoredType
  | CardServicesType;

const MainHome = ({ css }: MainHomeType) => {
  const [cardElements, setCardElements] = useState<CardElementsArrayType>([]);

  useEffect(() => {
    const elements = getCardsHome() as CardElementsArrayType;
    setCardElements(elements);
  }, []);

  /* Identifies the type of component to render according to the type of card and returns it by passing its props */
  const cardRenderer = (el: CardElementType) => {
    switch (el.data.cardCategory) {
      case "offer":
        return <CardOffer key={el.data.id} data={el.data} css={cardOffer} />;

      case "theme":
        return <CardTheme key={el.data.id} data={el.data} css={cardTheme} />;

      case "product":
        return (
          <CardProduct key={el.data.id} data={el.data} css={cardProduct} />
        );

      case "sponsored":
        return (
          <CardSponsored key={el.data.id} data={el.data} css={cardSponsored} />
        );

      case "services":
        return (
          <CardServices key={el.data.id} data={el.data} css={cardServices} />
        );

      default:
        return null;
    }
  };
  return (
    <main className={css}>
      <div className={cardsGrid.grid}>
        {cardElements.map((cardElement: CardElementType) =>
          cardRenderer(cardElement)
        )}
      </div>
    </main>
  );
};

export default MainHome;
