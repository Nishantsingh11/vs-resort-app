import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'gold' */
  tone?: 'gold' | 'forest' | 'sage' | 'cream';
  children?: React.ReactNode;
}

/** Uppercase pill marker for categories, capacities and statuses. */
export function Badge(props: BadgeProps): JSX.Element;
