import * as React from 'react';

export interface AmenityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node (e.g. a Lucide icon) shown in the gold-tinted circle. */
  icon?: React.ReactNode;
  /** Card title (Playfair). */
  title: string;
  /** Supporting description text. */
  description?: string;
}

/**
 * Icon + title + description card with hover-lift, for listing amenities.
 * @startingPoint section="Content" subtitle="Amenity feature card with hover-lift" viewport="380x300"
 */
export function AmenityCard(props: AmenityCardProps): JSX.Element;
