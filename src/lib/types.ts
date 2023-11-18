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

export type PopupDetailsProp = {
  title: string;
};
