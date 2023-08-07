import { ImageType } from "./imageType";

const Image = ({ src, alt, css }: ImageType) => {
  return <img src={src} alt={alt} className={css} />;
};

export default Image;
