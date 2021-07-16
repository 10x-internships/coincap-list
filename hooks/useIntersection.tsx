import { useState, useEffect, RefObject } from 'react';

const useIntersection = (
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit | undefined
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (target) observer.observe(target);
    else console.error('no elementRef');

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isVisible;
};

export default useIntersection;
