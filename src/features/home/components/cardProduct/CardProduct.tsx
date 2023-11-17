import { Link } from "react-router-dom";

/* components */
import TextTruncate from "../../../../components/textTruncate/TextTruncate";
import FooterCard from "../footerCard/FooterCard";

/* types */
import { CardProductType } from "./CardProductType";

const CardProduct = ({ data, css }: CardProductType) => {
  return (
    <article className={`${css.theme} ${css.cardWrapper}`}>
      <header className={css.header}>
        <TextTruncate text={data.title} rows={2} tagType="h2" css={css.title} />
      </header>
      <Link to={"#"} className={css.imgLink}>
        <figure className={css.figure}>
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
        </figure>
      </Link>
      <FooterCard path="#" text={data.textLink} />
    </article>
  );
};

export default CardProduct;
