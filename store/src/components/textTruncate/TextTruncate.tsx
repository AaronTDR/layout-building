import { useEffect, useRef, useState } from "react";
/* types */
import { TextTruncateType } from "./TextTruncateType";
/* styles */
import textTruncate from "./textTruncate.module.css";

/* Receives the text and accommodates it in a maximum number of rows provided, if the text overflows on the last line, the overflow is avoided and three points are added */
const TextTruncate = ({ text, rows, tagType = "p", css }: TextTruncateType) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const headerRef = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(
    null
  );

  useEffect(() => {
    const header = headerRef.current;
    if (header instanceof HTMLElement) {
      setIsOverflowing(header.scrollWidth > header.clientWidth);
    }
  }, []);

  const Tag = tagType;

  return (
    <Tag
      className={`${textTruncate.title} ${
        isOverflowing ? " overflow" : ""
      } ${css}`}
      style={{ WebkitLineClamp: `${rows}` }}
      ref={headerRef}
    >
      {text}
    </Tag>
  );
};

export default TextTruncate;
