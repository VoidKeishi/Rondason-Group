'use client';

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const shouldAnimate = !prefersReducedMotion;
  const visible = prefersReducedMotion || isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={
        shouldAnimate
          ? {
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(14px)',
              transition: `opacity 600ms var(--ease-flow) ${delay}ms, transform 600ms var(--ease-flow) ${delay}ms`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
