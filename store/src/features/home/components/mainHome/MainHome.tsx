import { useState, useEffect } from "react";
/* services */
import { getCardsHome } from "../../services/getCardsHome/getCardsHome";
/* components */
import CardOffer from "../cardOffer/CardOffer";
import CardTheme from "../cardTheme/CardTheme";
import Container from "../../../../components/container/Container";
/* types */
import { MainHomeType } from "./mainHomeType";
import { CardOfferType } from "../cardOffer/CardOfferType";
import { CardThemeType } from "../cardTheme/CardThemeType";
/* styles */
import cardOffer from "../../stylesHome/cardOffer.module.css";
import cardTheme from "../../stylesHome/cardTheme.module.css";
import cardsGrid from "../../stylesHome/cardsGrid.module.css";

type CardElementsArrayType = Array<CardOfferType | CardThemeType>;

type CardElementType = CardOfferType | CardThemeType;

const MainHome = ({ css }: MainHomeType) => {
  const [cardElements, setCardElements] = useState<CardElementsArrayType>([]);

  useEffect(() => {
    const elements = getCardsHome() as CardElementsArrayType;
    setCardElements(elements);
  }, []);

  /* Identifies the type of component to render according to the type of card and returns it by passing its props */
  const cardRenderer = (el: CardElementType) => {
    switch (el.data.cardType) {
      case "offer":
        return <CardOffer key={el.data.id} data={el.data} css={cardOffer} />;
        break;

      case "theme":
        return <CardTheme key={el.data.id} data={el.data} css={cardTheme} />;
        break;

      default:
        break;
    }
  };
  return (
    <main className={css}>
      <Container css={cardsGrid.grid}>
        {cardElements.map((cardElement: CardElementType) =>
          cardRenderer(cardElement)
        )}
      </Container>
    </main>
  );
};

export default MainHome;
