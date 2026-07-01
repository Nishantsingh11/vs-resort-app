import React from 'react';

/**
 * VS Resort — AmenityCard
 * Icon + title + description card with a calm hover-lift. The workhorse for
 * listing venue amenities and features.
 */
export function AmenityCard({ icon, title, description, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 28px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
      {...rest}
    >
      {icon && (
        <div style={{
          width: 52, height: 52, borderRadius: 'var(--radius-pill)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--cream-200)', color: 'var(--gold-700)',
          marginBottom: 20,
        }}>{icon}</div>
      )}
      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: 'var(--text-xl)', color: 'var(--forest-800)',
        margin: '0 0 10px', letterSpacing: '-0.01em',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', margin: 0,
      }}>{description}</p>
    </div>
  );
}
