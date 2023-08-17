import { useState, useEffect } from "react";
/* services */
import { getCardsHome } from "../../services/getCardsHome/getCardsHome";
/* components */
import CardOffer from "../cardOffer/CardOffer";
import CardTheme from "../cardTheme/CardTheme";
import Container from "../../../../components/container/Container";
/* styles */
import cardOffer from "../../stylesHome/cardOffer.module.css";
import cardTheme from "../../stylesHome/cardTheme.module.css";
import cardsGrid from "../../stylesHome/cardsGrid.module.css";

const MainHome = ({ css }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardsData = getCardsHome();
    setCards(cardsData);
  }, []);

  /* Identifies the type of component to render according to the type of card and returns it by passing its props */
  const GetCardComponent = (card) => {
    switch (card.type) {
      case "offer":
        return <CardOffer key={card.id} data={card} css={cardOffer} />;
        break;

      case "theme":
        return <CardTheme key={card.id} data={card} css={cardTheme} />;
        break;

      default:
        break;
    }
  };
  return (
    <main className={css}>
      <Container css={cardsGrid.grid}>
        {cards.map((card) => GetCardComponent(card))}
      </Container>
    </main>
  );
};

export default MainHome;