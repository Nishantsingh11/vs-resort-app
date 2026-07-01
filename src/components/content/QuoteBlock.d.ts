import * as React from 'react';

export interface QuoteBlockProps {
  /** The testimonial text. */
  quote: React.ReactNode;
  /** Person's name. */
  author: string;
  /** Their role / event, e.g. 'Wedding, Nov 2025'. */
  role?: string;
  /** @default 'dark' */
  tone?: 'dark' | 'light';
  style?: React.CSSProperties;
}

/** Centered testimonial with a gold quote mark and Playfair italic quote. */
export function QuoteBlock(props: QuoteBlockProps): JSX.Element;
