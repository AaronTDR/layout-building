import { Link } from "react-router-dom";

import { CardOfferType } from "./CardOfferType";

import singleLine from "../../../../styles/singleLine.module.css";

const CardOffer = ({ data, css }: CardOfferType) => {
  return (
    <article className={css.cardWrapper}>
      <header className={css.cardHeader}>
        <h2 className={`${css.cardTitle} ${singleLine.singleLine}`}>
          {data.title}
        </h2>
        <Link to={"#"}>
          <picture>
            <source
              media="(min-width: 992px)"
              srcSet={data.mainImageData.paths.large}
            />
            <source
              media="(min-width: 600px)"
              srcSet={data.mainImageData.paths.medium}
            />
            <img
              src={data.mainImageData.paths.small}
              alt={data.mainImageData.alt}
              className={css.cardOfferImg}
            />
          </picture>
        </Link>
      </header>
    </article>
  );
};

export default CardOffer;
