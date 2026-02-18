export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  gallery: 'gallery',
  contact: 'contact',
} as const;

export const SECTION_HASH = {
  home: `#${SECTION_IDS.home}`,
  about: `#${SECTION_IDS.about}`,
  gallery: `#${SECTION_IDS.gallery}`,
  contact: `#${SECTION_IDS.contact}`,
} as const;

export const HEADER_SCROLL_THRESHOLD = 24;
export const HEADER_SCROLL_OFFSET = 120;
export const DESKTOP_MENU_BREAKPOINT = 900;
