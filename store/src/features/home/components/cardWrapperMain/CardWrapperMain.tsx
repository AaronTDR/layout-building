import { CardWrapperMainType } from "./CardWrapperMainType";

// import cardWrapper from "../../stylesHome/cardWrapperMain.module.css";

const CardWrapperMain = ({
  title,
  textLink,
  children,
  wrapperCardCss,
  headerCardCss,
}: CardWrapperMainType) => {
  /*   const wrapper = css ? css : cardWrapper;
  console.log(
    "🚀 ~ file: CardWrapperMain.tsx:12 ~ wrapper:",
    wrapper.cardWrapper
  ); */

  return (
    <article className={wrapperCardCss}>
      <header className={headerCardCss}>
        {children}
        {/* <h2 className={cardWrapper.cardTitle}></h2> */}
      </header>
    </article>
  );
};

export default CardWrapperMain;
