import * as React from 'react';

export interface DividerProps {
  /** Show the centered diamond ornament. @default true */
  ornament?: boolean;
  /** CSS width of the divider. @default '120px' */
  width?: string;
  style?: React.CSSProperties;
}

/** Decorative gold hairline with an optional diamond, for separating content blocks. */
export function Divider(props: DividerProps): JSX.Element;
