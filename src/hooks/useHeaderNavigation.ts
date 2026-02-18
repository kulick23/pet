import { useEffect, useState } from 'react';
import {
  DESKTOP_MENU_BREAKPOINT,
  HEADER_SCROLL_OFFSET,
  HEADER_SCROLL_THRESHOLD,
  SECTION_HASH,
} from '../constants/navigation';

const navHashes = Object.values(SECTION_HASH);

export const useHeaderNavigation = () => {
  const [activeHash, setActiveHash] = useState(SECTION_HASH.home);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > HEADER_SCROLL_THRESHOLD);
      const scrollY = window.scrollY + HEADER_SCROLL_OFFSET;

      let current = SECTION_HASH.home;
      navHashes.forEach(hash => {
        const section = document.querySelector(hash) as HTMLElement | null;
        if (section && scrollY >= section.offsetTop) {
          current = hash;
        }
      });

      setActiveHash(current);
    };

    const onResize = () => {
      if (window.innerWidth > DESKTOP_MENU_BREAKPOINT) {
        setIsMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return {
    activeHash,
    isSticky,
    isMenuOpen,
    setIsMenuOpen,
  };
};
