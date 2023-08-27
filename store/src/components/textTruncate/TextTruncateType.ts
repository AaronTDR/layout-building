type TagTypeType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextTruncateType = {
  text: string;
  rows: number;
  tagType?: TagTypeType;
  css: string;
};
