import { useState, useRef, useCallback, useEffect } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.85,
};

export const useHeaderAnimation = (options = {}) => {
  const [headerClass, setHeaderClass] = useState('bg-transparent');
  const containerRef = useRef<HTMLDivElement>(null);

  const addBgToHeader = useCallback((entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      setHeaderClass('bg-[#25153a]');
    } else {
      setHeaderClass('bg-transparent');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(addBgToHeader, {
      ...defaultOptions,
      ...options,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return [containerRef, headerClass];
};
