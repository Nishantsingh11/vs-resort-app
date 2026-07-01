import React from 'react';

/**
 * VS Resort — Badge
 * Small status / category marker. Gold, forest, and soft cream tones.
 */
export function Badge({ tone = 'gold', children, style = {}, ...rest }) {
  const tones = {
    gold:   { background: 'var(--gold-200)', color: 'var(--gold-700)' },
    forest: { background: 'var(--forest-800)', color: 'var(--cream-100)' },
    sage:   { background: 'var(--forest-200)', color: 'var(--forest-800)' },
    cream:  { background: 'var(--cream-200)', color: 'var(--ink-700)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-body)', fontWeight: 600,
        fontSize: '11.5px', letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)',
        lineHeight: 1, whiteSpace: 'nowrap',
        ...tones[tone], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
