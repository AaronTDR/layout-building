import { Link } from "react-router-dom";
/* components */
import FooterCard from "../footerCard/FooterCard";
/* types */
import { CardProductType } from "./CardProductType";

const CardProduct = ({ data, css }: CardProductType) => {
  return (
    <article className={css.cardWrapper}>
      <header className={css.cardProductHeader}>
        <div className={css.cardProductTitleContainer}>
          <h2 className={css.cardProductTitle}>
            Discover participating bank bonuses
          </h2>
        </div>
      </header>
      <Link to={"#"} className={css.cardProductImgLink}>
        <figure className={css.cardProductFigure}>
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
              alt={data.alt}
              className={css.cardProductImg}
            />
          </picture>
        </figure>
      </Link>
      <FooterCard path="#" text={data.textLink} />
    </article>
  );
};

export default CardProduct;
