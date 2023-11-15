import { Link } from "react-router-dom";

/* components */
import TextTruncate from "../../../../components/textTruncate/TextTruncate";
import FooterCard from "../footerCard/FooterCard";

/* types */
import { CardOfferType } from "./CardOfferType";

/* styles */
import singleLine from "../../../../styles/singleLine.module.css";

const CardOffer = ({ data, css }: CardOfferType) => {
  return (
    <article className={`${css.theme} ${css.cardWrapper}`}>
      <header className={css.header}>
        <TextTruncate text={data.title} rows={2} tagType="h2" css={css.title} />
      </header>
      <Link to={"#"} className={css.imgLink}>
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
            className={css.img}
          />
        </picture>
      </Link>
      <Link to={"#"}>
        <div className={css.quantityContainer}>
          <span className={`${css.quantity} ${singleLine.singleLine}`}>
            {data.discount}
          </span>
          <span className={`${css.offerDay} ${singleLine.singleLine}`}>
            {data.OfferTime}
          </span>
        </div>
        <div className={css.extractContainer}>
          <TextTruncate
            text={data.description}
            rows={2}
            tagType="p"
            css={css.extractText}
          />
        </div>
      </Link>
      <FooterCard path="#" text={data.textLink} />
    </article>
  );
};

export default CardOffer;
