import * as React from 'react';

export interface GalleryTileProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL. */
  src: string;
  alt?: string;
  /** Italic caption revealed on hover. */
  caption?: string;
  /** CSS aspect-ratio. @default '4 / 3' */
  ratio?: string;
}

/** Photo tile with hover zoom and a scrim caption, for staggered galleries. */
export function GalleryTile(props: GalleryTileProps): JSX.Element;
