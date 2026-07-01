import React from 'react';

/**
 * VS Resort — StatItem
 * Big Playfair number + label, for capacity / acreage / counts.
 */
export function StatItem({ value, label, tone = 'dark', align = 'center', style = {} }) {
  const onDark = tone === 'light';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align, ...style,
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: 'var(--text-d2)', lineHeight: 1,
        color: onDark ? 'var(--gold-400)' : 'var(--gold-700)',
      }}>{value}</span>
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
        fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: onDark ? 'rgba(248,242,232,0.72)' : 'var(--text-muted)',
        marginTop: 10,
      }}>{label}</span>
    </div>
  );
}
