import * as React from 'react';

export interface StatItemProps {
  /** The headline figure, e.g. '1000+' or '18'. */
  value: React.ReactNode;
  /** Uppercase label beneath. */
  label: string;
  /** @default 'dark' */
  tone?: 'dark' | 'light';
  /** @default 'center' */
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}

/** Big gold Playfair figure with an uppercase label — capacities, acreage, counts. */
export function StatItem(props: StatItemProps): JSX.Element;
