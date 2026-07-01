import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  /** Options as strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  /** Disabled first option shown when nothing is selected. */
  placeholder?: string;
}

/** Labelled dropdown matching Input, with a custom gold chevron. */
export function Select(props: SelectProps): JSX.Element;
