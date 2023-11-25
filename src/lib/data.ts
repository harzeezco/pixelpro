import {
  BlogProps,
  CompaniesProp,
  FeatureDataProps,
  FooterNavLinksProp,
  HowItWorkProps,
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
    title: 'Product',
    links: [
      {
        id: 0,
        label: 'Remove Background',
        href: '',
      },
      {
        id: 1,
        label: 'Remove Objects',
        href: '',
      },
      {
        id: 2,
        label: 'Upscale',
        href: '',
      },
      {
        id: 3,
        label: 'Pricing',
        href: '',
      },
      {
        id: 4,
        label: 'API Docs',
        href: '',
      },
    ],
  },
  {
    id: 1,
    title: 'Services',
    links: [
      {
        id: 0,
        label: 'PixelPro Production',
        href: '',
      },
      {
        id: 1,
        label: 'Studio Hire',
        href: '',
      },
      {
        id: 2,
        label: 'Affiliate Program',
        href: '',
      },
      {
        id: 3,
        label: 'Request a Quote',
        href: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Resources',
    links: [
      {
        id: 0,
        label: 'How To BG Remove',
        href: '',
      },
      {
        id: 1,
        label: 'Our Blog',
        href: '',
      },
      {
        id: 2,
        label: 'Help Center',
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
        label: 'Contact',
        href: '',
      },
      {
        id: 2,
        label: 'Privacy',
        href: '',
      },
      {
        id: 3,
        label: 'Terms',
        href: '',
      },
      {
        id: 4,
        label: 'Cookies',
        href: '',
      },
    ],
  },
];

export const POPUPDETAILS: PopupDetailsProp[] = [
  {
    id: 0,
    img: 'first.png',
    alt: 'a man wearing jacket',
    title: 'Remove BG',
    href: '/remove-bg',
  },
  {
    id: 1,
    img: 'second.png',
    alt: 'a products',
    title: 'Remove Objects',
    href: '/remove-obj',
  },
  {
    id: 2,
    img: 'third.png',
    alt: 'a man who open his mouth',
    title: 'Upscale',
    href: '/upscale',
  },
  {
    id: 3,
    img: 'fourth.png',
    title: 'Relight',
    alt: 'a man with handsome face',
    href: '/relight',
  },
];

export const COMPANIES: CompaniesProp = [
  {
    id: 0,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'Adobe',
  },
  {
    id: 1,
    img: 'amazon.png',
    href: 'https://www.microsoft.com/',
    alt: 'Amazon',
  },
  {
    id: 2,
    img: 'shopify.png',
    href: 'https://www.shopify.com/',
    alt: 'Shopify',
  },
  {
    id: 3,
    img: 'shopee.png',
    href: 'https://shopee.com/',
    alt: 'Shopee',
  },
  {
    id: 4,
    img: 'instagram.png',
    href: 'https://www.instagram.com/',
    alt: 'Instagram',
  },
  {
    id: 5,
    img: 'figma.png',
    href: 'https://www.figma.com/',
    alt: 'Figma',
  },
  {
    id: 6,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'Adobe',
  },
  {
    id: 7,
    img: 'adobe.png',
    href: 'https://www.adobe.com/',
    alt: 'Adobe',
  },
];

export const FEATURE_DATA: FeatureDataProps[] = [
  {
    headingWithGradient: 'Erase any',
    headingWithTransparent: 'background',
    img: 'capman.png',
    paragraphs:
      "Edit photos quickly and accurately without all the effort. PhotoRoom makes it easy to keep the focus on the foreground, plus it's 2x more accurate than other apps.",
    href: '',
    className: 'bg-blue-gradient',
  },
  {
    headingWithGradient: 'Remove objects',
    headingWithTransparent: 'with a swipe',
    img: 'product.png',
    paragraphs:
      'Instantly remove unwanted objects and defects. With just a swipe of your fingertip, you can make sure your snapshots are flawless.',
    href: '',
    className: 'bg-purple-gradient',
  },
  {
    headingWithGradient: 'Relight',
    headingWithTransparent: 'your photographs',
    img: 'selfie.png',
    paragraphs:
      'Relight your images with beautiful lights. Instantly light unwanted objects. With just a swipe of your point, you can make sure your snapshots are flawless.',
    href: '',
    className: 'bg-pink-gradient',
  },
];

export const HOWITWORK_DATA: HowItWorkProps[] = [
  {
    id: 0,
    img: 'burble.png',
    alt: 'burble',
    title: 'Eliminate acne, wrinkles on the Face',
    label:
      'A picture when you have facial wrinkles, red pimples, or other skin flaws.',
  },
  {
    id: 1,
    img: 'vide.png',
    alt: 'video',
    title: 'Fix old photos',
    label:
      'Simply choose the problematic areas on the photo to remove blemishes, stains, and rips.',
  },
  {
    id: 2,
    img: 'tools.png',
    alt: 'tools',
    title: 'Eliminate acne, wrinkles on the Face',
    label:
      'A totally free AI photo altering tool is called PixelPro. Simple to use, quick photo editing. Be happy',
  },
  {
    id: 3,
    img: 'shape.png',
    alt: 'shape',
    title: 'Eliminate acne, wrinkles on the Face',
    label:
      'Use PixelPro on your smartphone or web browser to edit images anywhere.',
  },
];

export const BLOG_DATA: BlogProps[] = [
  {
    id: 0,
    img: 'chair.png',
    title: '10 Effective Strategies to Remove Background from Images',
    text: 'High-quality pictures are not enough, but editing them is also essential for taking good pictures, lighting, angles, and many factors impact.',
    profileImg: 'hasan.png',
    profileName: 'Moinul Hasan',
  },
  {
    id: 1,
    img: 'home-decoration.png',
    title: '7 Powerful Strategies to Build Stronger Relationships',
    text: 'A passport is an essential travel document confirming identity and citizenship. A passport photo with a plain background is required to ensure that the photo.',
    profileImg: 'sverku.png',
    profileName: 'Ksenia Sverku',
  },
];

export const REMOVEBGHOWITWORKDETAILS = [
  {
    id: 0,
    img: 'upload.png',
    title: 'Upload  Image',
    alt: 'Upload Image',
    label:
      'Click the Upload Image button, drag or copy then paste your image to remove background from it',
  },
  {
    id: 1,
    img: 'ai.png',
    alt: 'Ai generated image',
    title: 'Remove automatically',
    label:
      'FocoClipping will remove BG automatically once the image is uploaded.',
  },
  {
    id: 2,
    img: 'free.png',
    alt: 'Upload Image',
    title: 'Download cut-out image',
    label:
      'Finally click the “Download” icon to freely download the transparent or white background image without any hassles.',
  },
];