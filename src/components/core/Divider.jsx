import React from 'react';

/**
 * VS Resort — Divider
 * Decorative gold hairline; optional centered diamond ornament.
 */
export function Divider({ ornament = true, width = '120px', style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width, ...style }}>
      <span style={{ flex: 1, height: 1, background: 'var(--hairline-gold)' }} />
      {ornament && (
        <span style={{
          width: 7, height: 7, transform: 'rotate(45deg)',
          background: 'var(--gold-500)', flexShrink: 0,
        }} />
      )}
      <span style={{ flex: 1, height: 1, background: 'var(--hairline-gold)' }} />
    </div>
  );
}
