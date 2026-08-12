import type { ReactNode } from 'react';

/**
 * Gold uppercase section label. Gold-deep on light backgrounds (AA),
 * gold-bright on navy — per DESIGN_GUIDELINE.md → Colors.
 */
export function Eyebrow({
  children,
  tone = 'light',
  className = '',
}: {
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <div
      className={`text-[13px] uppercase tracking-[3px] ${
        tone === 'dark' ? 'text-gold-bright' : 'text-gold-deep'
      } ${className}`}
    >
      {children}
    </div>
  );
}
