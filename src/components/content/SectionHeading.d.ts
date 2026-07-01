import * as React from 'react';

export interface SectionHeadingProps {
  /** Uppercase kicker label. */
  eyebrow?: string;
  /** Playfair display title. */
  title?: string;
  /** Supporting line beneath the title. */
  subtitle?: string;
  /** @default 'center' */
  align?: 'center' | 'left';
  /** 'dark' = forest text on light bg; 'light' = cream text on forest bg. @default 'dark' */
  tone?: 'dark' | 'light';
  /** Show gold divider under the title. @default true */
  divider?: boolean;
  style?: React.CSSProperties;
}

/**
 * Standard section opener: eyebrow, Playfair title, gold divider, subtitle.
 * @startingPoint section="Content" subtitle="Eyebrow + title + divider section header" viewport="700x320"
 */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
