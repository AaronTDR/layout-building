import { Link } from "react-router-dom";

import FooterCard from "../footerCard/FooterCard";

import { CardOfferType } from "./CardOfferType";

import singleLine from "../../../../styles/singleLine.module.css";

const CardOffer = ({ data, css }: CardOfferType) => {
  return (
    <article className={css.cardWrapper}>
      <header className={css.cardHeader}>
        <h2 className={`${css.cardTitle} ${singleLine.singleLine}`}>
          {data.title}
        </h2>
        <Link to={"#"} className={css.cardOfferImgLink}>
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
      <Link to={"#"}>
        <div className={css.cardOfferOfferQuantityContainer}>
          <span
            className={`${css.cardOfferOfferQuantity} ${singleLine.singleLine}`}
          >
            {data.discount}
          </span>
          <span className={`${css.cardOfferOfferDay} ${singleLine.singleLine}`}>
            {data.OfferTime}
          </span>
        </div>
        <div className={css.extractContainer}>
          <span className={css.extractText}>{data.description}</span>
        </div>
      </Link>
      <FooterCard path="#" text={data.textLink} />
    </article>
  );
};

export default CardOffer;
