import React from 'react';

/**
 * VS Resort — GalleryTile
 * Image tile with gold-framed hover, scrim caption and gentle zoom.
 * Use in staggered photo galleries.
 */
export function GalleryTile({ src, alt = '', caption, ratio = '4 / 3', style = {}, ...rest }) {
  return (
    <figure
      style={{
        position: 'relative', margin: 0, overflow: 'hidden',
        borderRadius: 'var(--radius-md)', aspectRatio: ratio,
        cursor: 'pointer', boxShadow: 'var(--shadow-sm)',
        ...style,
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.06)';
        const cap = e.currentTarget.querySelector('figcaption');
        if (cap) { cap.style.opacity = '1'; cap.style.transform = 'translateY(0)'; }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
        const cap = e.currentTarget.querySelector('figcaption');
        if (cap) { cap.style.opacity = '0'; cap.style.transform = 'translateY(8px)'; }
      }}
      {...rest}
    >
      <img src={src} alt={alt} style={{
        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        transition: 'transform var(--dur-slow) var(--ease-soft)',
      }} />
      {caption && (
        <figcaption style={{
          position: 'absolute', inset: 'auto 0 0 0', padding: '16px 18px',
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 'var(--text-lg)', color: 'var(--cream-100)',
          background: 'linear-gradient(to top, rgba(30,40,26,0.78), transparent)',
          opacity: 0, transform: 'translateY(8px)',
          transition: 'opacity var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
        }}>{caption}</figcaption>
      )}
    </figure>
  );
}
