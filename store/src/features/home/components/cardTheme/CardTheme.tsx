import { Link } from "react-router-dom";

import singleLine from "../../../../styles/singleLine.module.css";

const CardTheme = ({ data, css }) => {
  return (
    <article className={css.cardWrapper}>
      <header className={css.cardThemeHeader}>
        <div className={css.cardThemeTitleContainer}>
          <h2 className={css.cardThemeTitle}>{data.title}</h2>
        </div>
      </header>
      <Link to={"#"} className={css.cardThemeImgLink}>
        <figure className={css.cardThemeFigure}>
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
              className={css.cardThemeImg}
            />
          </picture>
          <figcaption
            className={`${css.cardThemeImgFigcaption} ${singleLine.singleLine}`}
          >
            {data.mainImageData.figcaptionText}
          </figcaption>
        </figure>
      </Link>
      <div className={css.related}>
        <Link to={"#"} className={css.relatedLink}>
          <figure className={css.relatedFigure}>
            <img
              src={data.secondaryImages.img1.path}
              alt={data.secondaryImages.img1.atl}
              className={css.relatedImg}
            />
            <figcaption className={css.relatedFigcaption}>
              {data.secondaryImages.img1.figcaptionText}
            </figcaption>
          </figure>
        </Link>
        <Link to={"#"} className={css.relatedLink}>
          <figure className={css.relatedFigure}>
            <img
              src={data.secondaryImages.img2.path}
              alt={data.secondaryImages.img2.atl}
              className={css.relatedImg}
            />
            <figcaption className={css.relatedFigcaption}>
              {data.secondaryImages.img2.figcaptionText}
            </figcaption>
          </figure>
        </Link>
        <Link to={"#"} className={css.relatedLink}>
          <figure className={css.relatedFigure}>
            <img
              src={data.secondaryImages.img3.path}
              alt={data.secondaryImages.img3.atl}
              className={css.relatedImg}
            />
            <figcaption className={css.relatedFigcaption}>
              {data.secondaryImages.img3.figcaptionText}
            </figcaption>
          </figure>
        </Link>
      </div>
      <div className={css.footerCard}>
        <Link
          to={"#"}
          className={`${css.footerCardSeeMoreLink} ${singleLine.singleLine}`}
        >
          {data.textLink}
        </Link>
      </div>
    </article>
  );
};

export default CardTheme;
