import {
  BlogProps,
  CompaniesProp,
  FeatureDetailsProps,
  FooterNavLinksProp,
  HowItWorkProps,
  NavLinksProp,
  PopupDetailsProp,
  TestimonialProps,
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

export const FEATURE_DATA: FeatureDetailsProps[] = [
  {
    gradientText: 'Erase any',
    noGradientText: 'background',
    gradientPosition: 'top',
    bottomText: '',
    img: 'capman.png',
    label: [
      "Edit photos quickly and accurately without all the effort. PhotoRoom makes it easy to keep the focus on the foreground, plus it's 2x more accurate than other apps.",
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-blue-gradient',
  },
  {
    gradientText: 'Remove objects',
    noGradientText: 'with a swipe',
    gradientPosition: 'top',
    bottomText: '',
    img: 'product.png',
    label: [
      'Instantly remove unwanted objects and defects. With just a swipe of your fingertip, you can make sure your snapshots are flawless.',
    ],
    uniqueFeatures: [],
    href: '',
    className: 'bg-purple-gradient',
  },
  {
    gradientText: 'Relight',
    noGradientText: 'your photographs',
    gradientPosition: 'top',
    bottomText: '',
    img: 'selfie.png',
    label: [
      'Relight your images with beautiful lights. Instantly light unwanted objects. With just a swipe of your point, you can make sure your snapshots are flawless.',
    ],
    uniqueFeatures: [],
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

export const REMOVEBGHOWITWORKDETAILS: HowItWorkProps[] = [
  {
    id: 0,
    img: 'remove-bg/how-it-work/upload.png',
    title: 'Upload  Image',
    alt: 'Upload Image',
    label:
      'Click the Upload Image button, drag or copy then paste your image to remove background from it',
  },
  {
    id: 1,
    img: 'remove-bg/how-it-work/ai.png',
    alt: 'Ai generated image',
    title: 'Remove automatically',
    label:
      'FocoClipping will remove BG automatically once the image is uploaded.',
  },
  {
    id: 2,
    img: 'remove-bg/how-it-work/free.png',
    alt: 'Upload Image',
    title: 'Download cut-out image',
    label:
      'Finally click the “Download” icon to freely download the transparent or white background image without any hassles.',
  },
];
export const REMOVEOBJHOWITWORKDETAILS: HowItWorkProps[] = [
  {
    id: 0,
    img: 'remove-obj/how-it-work/upload.png',
    title: 'Upload Your Image',
    alt: 'Upload Image',
    label:
      'You can be used to begin editing images by dragging and dropping them into the "Upload Photo" Frame.',
  },
  {
    id: 1,
    img: 'remove-obj/how-it-work/upload.png',
    alt: 'Ai generated image',
    title: 'Choose to edit an image',
    label:
      'Choose Eraser to blur, enhance, remove acne, and restore old photos, or choose Objects automatically detected by AI to remove objects from photos.',
  },
  {
    id: 2,
    img: 'remove-obj/how-it-work/upload.png',
    alt: 'Upload Image',
    title: 'Adjust and preview',
    label:
      'AI can quickly edit photographs using zoom in, zoom out, undo or redo, alter, preview, and apply.',
  },
  {
    id: 3,
    img: 'remove-obj/how-it-work/upload.png',
    alt: 'Upload Image',
    title: 'Download & share',
    label:
      "Download the lovely image you've edited after finishing your editing software, or post it directly to social media.",
  },
];

export const TESTIMONIALS: TestimonialProps[] = [
  {
    title: 'Emily Turner',
    jobTitle: 'Senior Graphic Designer',
    description:
      'As a professional designer, maintaining the integrity of the original image is paramount. PixelPro, Background and Object Remover excels in preserving fine details and nuances, ensuring that the edited images seamlessly integrate with the overall design. This attention to detail has not only saved me countless hours but has also elevated the quality of my work, garnering praise from clients and colleagues alike',
    src: 'cloud.png',
    color: 'CTA',
    profileSrc: 'profile-1.jpg',
  },
  {
    title: 'Vanessa Rodriguez',
    jobTitle: 'Professional Photographer',
    description:
      "My experience with PixelPro has been nothing short of extraordinary. As a professional photographer specializing in portrait and product shots, I've always sought tools that can enhance the visual appeal of my images. PixelPro, the background and object remover, has become my go-to solution for achieving impeccable results. The precision and speed with which it operates have not only saved me valuable editing time but have also elevated the overall quality of my work. I highly recommend PixelPro to fellow photographers and creatives looking to take their editing game to the next level.",
    src: 'iceberg.png',
    color: 'CTA1',
    profileSrc: 'profile-2.jpg',
  },
  {
    title: 'Jason Patel',
    jobTitle: 'Creative Director',
    description:
      "PixelPro has transformed the way I approach graphic design projects. In my role as a creative director, delivering visually stunning and cohesive designs is non-negotiable. PixelPro's background and object removal capabilities have streamlined my workflow and allowed for a level of precision that was previously time-consuming to achieve. The adaptability of PixelPro to various design needs, coupled with its exceptional customer support, makes it a must-have tool for any design professional. I'm genuinely impressed with PixelPro's performance and excited to continue incorporating it into my future projects.",
    src: 'u-turn.png',
    color: 'testimonial',
    profileSrc: 'profile-3.jpg',
  },
  {
    title: 'Olivia Lewis',
    jobTitle: 'Content Creator',
    description:
      "PixelPro has been a lifesaver for my social media content creation. As a content creator in the beauty and lifestyle niche, having visually appealing and polished images is crucial. PixelPro's background and object removal features have allowed me to curate a stunning and cohesive aesthetic for my social media feeds. The versatility of the tool means that I can effortlessly adapt it to different types of content, maintaining a professional and engaging look across all my platforms. PixelPro has become an essential part of my content creation toolkit, and I wholeheartedly recommend it to fellow creators",
    src: 'cloud.png',
    color: 'CTA2',
    profileSrc: 'profile-4.jpg',
  },
];
