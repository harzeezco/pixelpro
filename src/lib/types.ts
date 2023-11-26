export type NavLinksProp = NavDetailsProp[];

type IdProp = {
  id: number;
};

export type NavDetailsProp = {
  id: number;
  label: string;
  isPopup: boolean;
  href: string;
  links: [];
};

export type FooterNavLinksProp = {
  id: number;
  title: string;
  links: {
    id: number;
    label: string;
    href: string;
  }[];
}[];

export type CommonProp = {
  id: number;
  img: string;
  href: string;
  alt: string;
};

export type CompaniesProp = CommonProp[];

export type PopupDetailsProp = CommonProp & {
  title: string;
};

export type FeatureDataProps = {
  headingWithGradient: string;
  headingWithTransparent: string;
  img: string;
  paragraphs: string;
  href: string;
  className: string;
};

export type FeatureProps = { layoutType: 'default' | 'reverse' } & {
  details: FeatureDataProps;
};

export type CommonProps = {
  img: string;
  alt: string;
  title: string;
  label: string;
};

export type HowItWorkProps = IdProp & CommonProps;

export type HowItWorkDetailsProps = {
  details: CommonProps;
};

type BlogCommonProps = {
  img: string;
  title: string;
  text: string;
  profileImg: string;
  profileName: string;
};

export type BlogProps = IdProp & BlogCommonProps;

export type BlogDetailsProps = {
  details: BlogCommonProps;
};

export type FeatureDetailsProps = {
  gradientPosition: string;
  className: string;
  gradientText: string;
  noGradientText: string;
  label: string[];
  uniqueFeatures: string[];
  href: string;
  img: string;
  bottomText: string;
};
