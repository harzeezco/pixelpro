export type NavLinksProp = NavDetailsProp[];

export type NavDetailsProp = {
  id: number;
  label: string;
  isPopup: boolean;
  href: string | null;
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

export type PopupDetailsProp = {
  id: number;
  img: string;
  alt: string;
  title: string;
  href: string;
}[];
