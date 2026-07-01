import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Render as a different element, e.g. 'a'. @default 'button' */
  as?: 'button' | 'a';
  /** Stretch to fill container width. */
  fullWidth?: boolean;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary call-to-action button in the Earthy Luxe style.
 * @startingPoint section="Core" subtitle="Gold pill CTA with hover-lift" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
