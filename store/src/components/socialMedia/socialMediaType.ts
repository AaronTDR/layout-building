interface SocialMediaIconType {
  iconComponent: JSX.Element;
}

export interface socialMediaType {
  text?: string;
  textCss?: string;
  iconsArr: SocialMediaIconType[];
  socialMediaContainerCss: string;
}
