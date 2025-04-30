"use client";

import { useEffect, useRef, useState, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export default function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null as unknown as T); // Explicitly type the ref

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
}