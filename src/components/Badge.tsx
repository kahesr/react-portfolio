import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export function Badge({ children, size = 'sm' }: BadgeProps) {
  const colors = 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200'; // Text and background colors

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span className={`inline-flex rounded-full font-medium ${colors} ${sizes[size]}`}>
      {children}
    </span>
  );
}
