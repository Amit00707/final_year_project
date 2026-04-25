import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'ai' | 'neutral';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-amber-900/30 text-amber-500 border-amber-900/50',
    ai: 'bg-violet-900/30 text-violet-400 border-violet-900/50',
    neutral: 'bg-[#292524] text-[#A8A29E] border-[#44403C]',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
