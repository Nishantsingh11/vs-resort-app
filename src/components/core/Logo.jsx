import React from 'react';

export function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="90" fill="none" stroke="var(--gold-400)" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="var(--gold-400)" strokeWidth="1" opacity="0.5" />
      <path d="M100 18 l7 8 -7 8 -7 -8 z" fill="var(--gold-400)" />
      <text x="100" y="116" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="600" fontSize="72" fill="var(--forest-800)">VS</text>
      <line x1="68" y1="138" x2="83" y2="138" stroke="var(--gold-400)" strokeWidth="1.2" />
      <line x1="117" y1="138" x2="132" y2="138" stroke="var(--gold-400)" strokeWidth="1.2" />
      <text x="100" y="142" textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" letterSpacing="4" fill="var(--gold-400)">RESORT</text>
      <text x="100" y="170" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7.5" letterSpacing="3" fill="var(--forest-800)" opacity="0.7">GURUGRAM</text>
    </svg>
  );
}
