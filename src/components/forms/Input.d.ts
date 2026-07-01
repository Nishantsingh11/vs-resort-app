import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Uppercase field label. */
  label?: string;
}
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  /** @default 4 */
  rows?: number;
}

/** Labelled text input with gold focus ring. */
export function Input(props: InputProps): JSX.Element;
/** Labelled multi-line text input. */
export function Textarea(props: TextareaProps): JSX.Element;
