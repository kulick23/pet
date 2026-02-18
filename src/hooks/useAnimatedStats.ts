import { RefObject, useEffect, useState } from 'react';
import {
  HERO_ANIMATION_INTERVAL_MS,
  HERO_ANIMATION_STEPS,
  HERO_INTERSECTION_THRESHOLD,
} from '../constants/hero';

export const formatStatValue = (value: number, suffix: string): string => {
  if (suffix === 'K+') {
    return `${Math.floor(value / 1000)}K+`;
  }
  return `${value}${suffix}`;
};

export const useAnimatedStats = (values: number[], statsRef: RefObject<HTMLDivElement | null>) => {
  const [counts, setCounts] = useState<number[]>(values.map(() => 0));

  useEffect(() => {
    let intervals: ReturnType<typeof setInterval>[] = [];
    let started = false;

    const animate = () => {
      if (started) return;
      started = true;

      values.forEach((value, idx) => {
        let current = 0;
        const step = Math.ceil(value / HERO_ANIMATION_STEPS);

        intervals[idx] = setInterval(() => {
          current += step;

          if (current >= value) {
            current = value;
            clearInterval(intervals[idx]);
          }

          setCounts(prev => {
            const updated = [...prev];
            updated[idx] = current;
            return updated;
          });
        }, HERO_ANIMATION_INTERVAL_MS);
      });
    };

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        }
      },
      { threshold: HERO_INTERSECTION_THRESHOLD }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      intervals.forEach(clearInterval);
    };
  }, [statsRef, values]);

  return counts;
};
