interface SocialMediaIconType {
  iconComponent: JSX.Element;
}

export interface socialMediaType {
  text?: string;
  css?: string;
  icons: SocialMediaIconType[];
}
