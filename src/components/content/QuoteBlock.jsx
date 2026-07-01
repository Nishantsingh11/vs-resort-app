import React from 'react';

/**
 * VS Resort — QuoteBlock
 * Centered testimonial: large gold quote mark, Playfair italic quote, attribution.
 */
export function QuoteBlock({ quote, author, role, tone = 'dark', style = {} }) {
  const onDark = tone === 'light';
  return (
    <figure style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      textAlign: 'center', maxWidth: '720px', margin: '0 auto', ...style,
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: '64px', lineHeight: 0.6,
        color: 'var(--gold-500)', height: '38px',
      }} aria-hidden="true">&ldquo;</span>
      <blockquote style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
        fontSize: 'var(--text-d3)', lineHeight: 'var(--leading-snug)',
        color: onDark ? 'var(--cream-100)' : 'var(--forest-800)',
        margin: '0 0 24px',
      }}>{quote}</blockquote>
      <figcaption style={{ fontFamily: 'var(--font-body)' }}>
        <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', letterSpacing: '0.04em', color: onDark ? 'var(--cream-100)' : 'var(--forest-800)' }}>{author}</div>
        {role && <div style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.14em', textTransform: 'uppercase', color: onDark ? 'var(--gold-400)' : 'var(--gold-700)', marginTop: 6 }}>{role}</div>}
      </figcaption>
    </figure>
  );
}
