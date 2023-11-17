import { Link } from "react-router-dom";

/* components */
import TextTruncate from "../../../../components/textTruncate/TextTruncate";

/* types */
import { CardSponsoredType } from "./CardSponsoredType";

const CardSponsored = ({ data, css }: CardSponsoredType) => {
  return (
    <article className={`${css.wrapperSponsored}`}>
      {/* theme class is added to the header because the rest of the wrapper is transparent */}
      <header className={`${css.theme} ${css.header}`}>
        <div className={css.titleContainer}>
          <TextTruncate
            text="Sign in to live your best experience"
            rows={2}
            tagType="h2"
            css={css.title}
          />
        </div>
        <Link to={"#"} className={css.button}>
          Sign in securely
        </Link>
      </header>
      <aside className={css.ad}>
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
      </aside>
    </article>
  );
};

export default CardSponsored;
