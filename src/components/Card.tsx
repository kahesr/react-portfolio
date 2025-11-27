import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`card p-6 ${hoverable ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
