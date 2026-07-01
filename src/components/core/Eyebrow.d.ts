import * as React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which side(s) show the gold rule. @default 'left' */
  rule?: 'left' | 'right' | 'both' | 'none';
  /** 'gold' for light backgrounds, 'light' for forest backgrounds. @default 'gold' */
  tone?: 'gold' | 'light';
  children?: React.ReactNode;
}

/** Uppercase kicker label with gold hairline rule(s), placed above headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
