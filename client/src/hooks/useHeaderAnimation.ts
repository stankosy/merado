import { useState, useEffect } from 'react';

export const useHeaderAnimation = (threshold = 80) => {
  const [headerClass, setHeaderClass] = useState('bg-transparent');

  useEffect(() => {
    const onScroll = (e) => {
      const amountScrolled = window.pageYOffset;

      if (amountScrolled > threshold) {
        setHeaderClass('bg-[#25153a]');
      } else {
        setHeaderClass('bg-transparent');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return [headerClass];
};
