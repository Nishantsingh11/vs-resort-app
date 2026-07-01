import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default 'soft' */
  variant?: 'soft' | 'outline' | 'gold' | 'onDark';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also the tooltip). */
  label?: string;
  children?: React.ReactNode;
}

/** Circular icon-only control for navigation, galleries and dialogs. */
export function IconButton(props: IconButtonProps): JSX.Element;
