import React from 'react';

const fieldStyle = {
  width: '100%', boxSizing: 'border-box',
  fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
  color: 'var(--ink-900)', background: 'var(--cream-50)',
  border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
  padding: '13px 15px', outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
};

function Label({ label, htmlFor }) {
  if (!label) return null;
  return (
    <label htmlFor={htmlFor} style={{
      display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
      fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'var(--text-muted)', marginBottom: '8px',
    }}>{label}</label>
  );
}

function focusOn(e) { e.currentTarget.style.borderColor = 'var(--gold-500)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }
function focusOff(e) { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.boxShadow = 'none'; }

/**
 * VS Resort — Input
 * Labelled text field with gold focus ring.
 */
export function Input({ label, id, style = {}, ...rest }) {
  return (
    <div>
      <Label label={label} htmlFor={id} />
      <input id={id} style={{ ...fieldStyle, ...style }} onFocus={focusOn} onBlur={focusOff} {...rest} />
    </div>
  );
}

/**
 * VS Resort — Textarea
 */
export function Textarea({ label, id, rows = 4, style = {}, ...rest }) {
  return (
    <div>
      <Label label={label} htmlFor={id} />
      <textarea id={id} rows={rows} style={{ ...fieldStyle, resize: 'vertical', ...style }} onFocus={focusOn} onBlur={focusOff} {...rest} />
    </div>
  );
}
