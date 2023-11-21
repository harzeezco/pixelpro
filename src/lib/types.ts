export type NavLinksProp = NavDetailsProp[];

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

type CommonProps = {
  img: string;
  alt: string;
  title: string;
  label: string;
};

export type HowItWorkProps = { id: number } & CommonProps;

export type HowItWorkDetailsProps = {
  details: CommonProps;
};
