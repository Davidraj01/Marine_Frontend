// client/src/hooks/useLazyLoad.js
import { useEffect, useRef } from 'react';

export const useLazyLoad = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.tagName === 'IMG') {
              el.src = el.dataset.src;
            } else {
              el.style.backgroundImage = `url(${el.dataset.bg})`;
            }
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
};
