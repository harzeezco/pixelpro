import { FooterNavLinksProp, NavLinksProp, PopupDetailsProp } from './types';

export const NAV_LINKS: NavLinksProp = [
  {
    id: 0,
    label: 'Product',
    isPopup: true,
    href: null,
    links: [],
  },
  {
    id: 1,
    label: 'Pricing',
    isPopup: false,
    href: '',
    links: [],
  },
  {
    id: 2,
    label: 'API',
    isPopup: false,
    href: '',
    links: [],
  },
  {
    id: 2,
    label: 'Blog',
    isPopup: false,
    href: '',
    links: [],
  },
];

export const FOOTER_LINKS: FooterNavLinksProp = [
  {
    id: 0,
    title: 'Marketplace',
    links: [
      {
        id: 0,
        label: 'Explore',
        href: '',
      },
      {
        id: 1,
        label: 'Blog',
        href: '',
      },
      {
        id: 2,
        label: 'How it works',
        href: '',
      },
      {
        id: 3,
        label: 'Jobs',
        href: '',
      },
      {
        id: 4,
        label: 'Help center',
        href: '',
      },
    ],
  },
  {
    id: 1,
    title: 'Marketplace',
    links: [
      {
        id: 0,
        label: 'Profile',
        href: '',
      },
      {
        id: 1,
        label: 'Favorites',
        href: '',
      },
      {
        id: 2,
        label: 'Watchlist',
        href: '',
      },
      {
        id: 3,
        label: 'My Collections',
        href: '',
      },
    ],
  },
  {
    id: 0,
    title: 'Company',
    links: [
      {
        id: 0,
        label: 'About',
        href: '',
      },
      {
        id: 1,
        label: 'Careers',
        href: '',
      },
      {
        id: 2,
        label: 'Ventures',
        href: '',
      },
      {
        id: 3,
        label: 'Grants',
        href: '',
      },
    ],
  },
];

export const POPUPDETAILS: PopupDetailsProp = [
  {
    id: 0,
    img: 'first.png',
    alt: 'a man wearing jacket',
    title: 'Remove BG',
    href: '',
  },
  {
    id: 0,
    img: 'second.png',
    alt: 'a products',
    title: 'Remove Objects',
    href: '',
  },
  {
    id: 0,
    img: 'third.png',
    alt: 'a man who open his mouth',
    title: 'Upscale',
    href: '',
  },
  {
    id: 0,
    img: 'fourth.png',
    title: 'Relight',
    alt: 'a man with handsome face',
    href: '',
  },
];
