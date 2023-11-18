import {
  CommonProp,
  CompaniesProp,
  FooterNavLinksProp,
  NavLinksProp,
  PopupDetailsProp,
} from './types';

export const NAV_LINKS: NavLinksProp = [
  {
    id: 0,
    label: 'Product',
    isPopup: true,
    href: '',
    links: [],
  },
  {
    id: 1,
    label: 'Pricing',
    isPopup: false,
    href: '/pricing',
    links: [],
  },
  {
    id: 2,
    label: 'API',
    isPopup: false,
    href: '/api',
    links: [],
  },
  {
    id: 3,
    label: 'Blog',
    isPopup: false,
    href: '/blog',
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
    id: 2,
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

export const POPUPDETAILS: (PopupDetailsProp | CommonProp)[] = [
  {
    id: 0,
    img: 'first.png',
    alt: 'a man wearing jacket',
    title: 'Remove BG',
    href: '',
  },
  {
    id: 1,
    img: 'second.png',
    alt: 'a products',
    title: 'Remove Objects',
    href: '',
  },
  {
    id: 2,
    img: 'third.png',
    alt: 'a man who open his mouth',
    title: 'Upscale',
    href: '',
  },
  {
    id: 3,
    img: 'fourth.png',
    title: 'Relight',
    alt: 'a man with handsome face',
    href: '',
  },
];

export const COMPANIES: CompaniesProp = [
  {
    id: 0,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'adobe logo',
  },
  {
    id: 1,
    img: 'amazon.png',
    href: 'https://www.microsoft.com/',
    alt: 'amazon logo',
  },
  {
    id: 2,
    img: 'shopify.png',
    href: 'https://www.shopify.com/',
    alt: 'shopify logo',
  },
  {
    id: 3,
    img: 'shopee.png',
    href: 'https://shopee.com/',
    alt: 'shopee logo',
  },
  {
    id: 4,
    img: 'instagram.png',
    href: 'https://www.instagram.com/',
    alt: 'instagram logo',
  },
  {
    id: 5,
    img: 'figma.png',
    href: 'https://www.figma.com/',
    alt: 'figma logo',
  },
  {
    id: 6,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'adobe logo',
  },
  {
    id: 7,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'adobe logo',
  },
];
