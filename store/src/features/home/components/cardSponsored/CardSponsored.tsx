import { Link } from "react-router-dom";
/* components */
import TextTruncate from "../../../../components/textTruncate/TextTruncate";
/* types */
import { CardSponsoredType } from "./CardSponsoredType";

const CardSponsored = ({ data, css }: CardSponsoredType) => {
  return (
    <article className={css.cardWrapperSponsored}>
      <header className={css.cardSponsoredHeader}>
        <div className={css.cardSponsoredTitleContainer}>
          <TextTruncate
            title="Sign in to live your best experience"
            rows={2}
            tagType="h2"
            css={css.cardSponsoredTitle}
          />
        </div>
        <Link to={"#"} className={css.cardSponsoredButton}>
          Sign in securely
        </Link>
      </header>
      <aside className={css.cardSponsoredAd}>
        <Link to={"#"} className={css.cardSponsoredImgLink}>
          <figure className={css.cardSponsoredFigure}>
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
                className={css.cardSponsoredImg}
              />
            </picture>
          </figure>
        </Link>
      </aside>
    </article>
  );
};

export default CardSponsored;
