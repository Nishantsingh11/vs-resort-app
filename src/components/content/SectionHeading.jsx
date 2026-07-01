import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
import { Divider } from '../core/Divider.jsx';

/**
 * VS Resort — SectionHeading
 * Eyebrow + Playfair title (+ optional divider & subtitle). The standard
 * way to open a section.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'dark',
  divider = true,
  style = {},
}) {
  const onDark = tone === 'light';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? '680px' : 'none',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
      ...style,
    }}>
      {eyebrow && <Eyebrow rule={align === 'center' ? 'both' : 'left'} tone={onDark ? 'light' : 'gold'}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 'var(--text-d2)', lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-tight)',
          color: onDark ? 'var(--cream-100)' : 'var(--forest-800)',
          margin: '18px 0 0',
        }}>{title}</h2>
      )}
      {divider && <div style={{ margin: '20px 0 0' }}><Divider width="92px" /></div>}
      {subtitle && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)',
          lineHeight: 'var(--leading-relaxed)',
          color: onDark ? 'rgba(248,242,232,0.78)' : 'var(--text-muted)',
          margin: '18px 0 0', maxWidth: '600px',
        }}>{subtitle}</p>
      )}
    </div>
  );
}
