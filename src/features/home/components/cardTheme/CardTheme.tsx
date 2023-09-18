import { Link } from "react-router-dom";
/* components */
import TextTruncate from "../../../../components/textTruncate/TextTruncate";
import FooterCard from "../footerCard/FooterCard";
/* types */
import { CardThemeType } from "./CardThemeType";

const CardTheme = ({ data, css }: CardThemeType) => {
  return (
    <article className={css.cardWrapper}>
      <header className={css.cardThemeHeader}>
        <TextTruncate
          text={data.title}
          rows={2}
          tagType="h2"
          css={css.cardThemeTitle}
        />
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
          <TextTruncate
            text={data.mainImageData.figcaptionText}
            rows={1}
            tagType="figcaption"
            css={css.cardThemeImgFigcaption}
          />
        </figure>
      </Link>
      <div className={css.related}>
        <Link to={"#"} className={css.relatedLink}>
          <figure className={css.relatedFigure}>
            <img
              src={data.secondaryImages.img1.path}
              alt={data.secondaryImages.img1.alt}
              className={css.relatedImg}
            />
            <TextTruncate
              text={data.secondaryImages.img1.figcaptionText}
              rows={2}
              tagType="figcaption"
              css={css.relatedFigcaption}
            />
          </figure>
        </Link>
        <Link to={"#"} className={css.relatedLink}>
          <figure className={css.relatedFigure}>
            <img
              src={data.secondaryImages.img2.path}
              alt={data.secondaryImages.img2.alt}
              className={css.relatedImg}
            />
            <TextTruncate
              text={data.secondaryImages.img2.figcaptionText}
              rows={2}
              tagType="figcaption"
              css={css.relatedFigcaption}
            />
          </figure>
        </Link>
        <Link to={"#"} className={css.relatedLink}>
          <figure className={css.relatedFigure}>
            <img
              src={data.secondaryImages.img3.path}
              alt={data.secondaryImages.img3.alt}
              className={css.relatedImg}
            />
            <TextTruncate
              text={data.secondaryImages.img3.figcaptionText}
              rows={2}
              tagType="figcaption"
              css={css.relatedFigcaption}
            />
          </figure>
        </Link>
      </div>
      <FooterCard path="#" text={data.textLink} />
    </article>
  );
};

export default CardTheme;