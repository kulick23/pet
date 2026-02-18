import { SECTION_HASH } from '../constants/navigation';

export const supportedLocales = ['en'] as const;
export type Locale = (typeof supportedLocales)[number];

export type Messages = {
  header: {
    brand: string;
    homeAria: string;
    mainNavAria: string;
    mobileNavAria: string;
    menuToggleAria: string;
    cta: string;
    nav: Record<keyof typeof SECTION_HASH, string>;
  };
  hero: {
    kicker: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    adoptNow: string;
    watchStory: string;
    tags: string[];
    stats: Record<'animalsHelped' | 'volunteers' | 'positiveReviews', string>;
  };
  about: {
    label: string;
    title: string;
    description: string;
    features: Array<{ title: string; description: string }>;
    imageAlt: string;
  };
  gallery: {
    label: string;
    title: string;
    itemsAlt: string[];
  };
  gifts: {
    label: string;
    title: string;
    description: string;
    itemNamePrefix: string;
    sectionAria: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    imageAlt: string;
    fields: {
      name: string;
      email: string;
      message: string;
      privacy: string;
      privacyPolicy: string;
      submit: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    linksAria: {
      facebook: string;
      telegram: string;
      instagram: string;
    };
    successMessage: string;
  };
};

export const translations: Record<Locale, Messages> = {
  en: {
    header: {
      brand: 'PetCare',
      homeAria: 'Pet Care home',
      mainNavAria: 'Main navigation',
      mobileNavAria: 'Mobile navigation',
      menuToggleAria: 'Toggle menu',
      cta: 'Become a Helper',
      nav: {
        home: 'Home',
        about: 'About',
        gallery: 'Gallery',
        contact: 'Contact',
      },
    },
    hero: {
      kicker: 'Pet Assistance Foundation',
      titlePrefix: 'Looking for a',
      titleAccent: 'good',
      titleSuffix: 'time?',
      description:
        'We rescue, heal, and rehome animals in crisis. Join the network of people creating a safe future for pets.',
      adoptNow: 'Adopt Now',
      watchStory: 'Watch Story',
      tags: ['Trusted shelters', '24/7 rescue line', 'Transparent donations'],
      stats: {
        animalsHelped: 'Animals Helped',
        volunteers: 'Volunteers',
        positiveReviews: 'Positive Reviews',
      },
    },
    about: {
      label: 'About Us',
      title: 'We are a modern animal assistance team',
      description:
        'We combine field rescue, veterinary partnerships, and adoption programs to create measurable impact for animals in need.',
      features: [
        {
          title: 'Charity Events',
          description: 'Community events and educational talks that directly fund rescue operations.',
        },
        {
          title: 'Fundraising Campaigns',
          description: 'Transparent campaigns for food, treatment, transport, and shelter improvements.',
        },
      ],
      imageAlt: 'Hamster under care',
    },
    gallery: {
      label: 'Gallery',
      title: 'Stories from our rescue network',
      itemsAlt: [
        'Curious cat',
        'Cat portrait',
        'Friendly dog',
        'Dog rescue',
        'Playful monkey',
        'Monkey close-up',
      ],
    },
    gifts: {
      label: 'Adoption Kit',
      title: 'What adopters receive',
      description:
        'Each adoption comes with care essentials and a starter comfort pack for the first days at home.',
      itemNamePrefix: 'Starter Pack',
      sectionAria: 'Gifts for adopters',
    },
    contact: {
      label: 'Contact',
      title: "Let's build safer lives for animals",
      description:
        'Tell us how you want to help: donations, volunteering, foster care, or adoption support.',
      imageAlt: 'Rescued monkey',
      fields: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        privacy: 'I agree with the',
        privacyPolicy: 'privacy policy',
        submit: 'Send Message',
      },
      placeholders: {
        name: 'John',
        email: 'john@example.com',
        message: 'Write your message...',
      },
      linksAria: {
        facebook: 'Facebook',
        telegram: 'Telegram',
        instagram: 'Instagram',
      },
      successMessage: 'Thanks! We will contact you soon.',
    },
  },
};
