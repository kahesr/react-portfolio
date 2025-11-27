import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500';

  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-600',
    secondary: 'bg-charcoal-200 text-charcoal-900 hover:bg-charcoal-300 dark:bg-charcoal-700 dark:text-white dark:hover:bg-charcoal-600',
    outline: 'border-2 border-charcoal-300 text-charcoal-900 hover:bg-charcoal-50 dark:border-charcoal-600 dark:text-white dark:hover:bg-charcoal-800',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
