import React from 'react';
import { cn } from '@/lib/utils';

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = 'div',
  className,
  color = 'rgb(236, 72, 153)',
  speed = '6s',
  thickness = 3,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(
        'relative overflow-hidden rounded-lg',
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-60"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${color}, transparent 30%)`,
          animation: `star-border-spin ${speed} linear infinite`,
        }}
      />
      <div
        className="absolute inset-0 rounded-lg opacity-60"
        style={{
          background: `conic-gradient(from 120deg, transparent, ${color}, transparent 30%)`,
          animation: `star-border-spin ${speed} linear infinite`,
          animationDelay: '-2s',
        }}
      />
      <div
        className="absolute inset-0 rounded-lg opacity-60"
        style={{
          background: `conic-gradient(from 240deg, transparent, ${color}, transparent 30%)`,
          animation: `star-border-spin ${speed} linear infinite`,
          animationDelay: '-4s',
        }}
      />
      <div
        className="relative z-10 h-full w-full rounded-lg bg-background"
        style={{
          margin: `${thickness}px`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export { StarBorder };