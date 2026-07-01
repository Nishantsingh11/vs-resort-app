import React from 'react';

/**
 * VS Resort — Eyebrow
 * Uppercase label with gold rule(s); sits above section titles.
 */
export function Eyebrow({ rule = 'left', tone = 'gold', children, style = {}, ...rest }) {
  const color = tone === 'gold' ? 'var(--gold-700)' : 'var(--cream-200)';
  const line = tone === 'gold' ? 'var(--gold-500)' : 'rgba(248,242,232,0.5)';
  const Rule = () => <span style={{ width: 36, height: 1, background: line, display: 'inline-block' }} />;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '14px',
        fontFamily: 'var(--font-body)', fontWeight: 600,
        fontSize: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase', color, ...style,
      }}
      {...rest}
    >
      {(rule === 'left' || rule === 'both') && <Rule />}
      {children}
      {(rule === 'right' || rule === 'both') && <Rule />}
    </span>
  );
}
