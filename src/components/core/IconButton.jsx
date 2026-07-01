import React from 'react';

/**
 * VS Resort — IconButton
 * Round, quiet control for icon-only actions (nav, gallery, close).
 */
export function IconButton({
  variant = 'soft',
  size = 'md',
  label,
  style = {},
  children,
  ...rest
}) {
  const dims = { sm: 34, md: 42, lg: 50 };
  const d = dims[size];

  const variants = {
    soft: { background: 'var(--cream-200)', color: 'var(--forest-800)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--forest-800)', border: '1px solid var(--border-default)' },
    gold: { background: 'var(--gold-500)', color: 'var(--forest-900)', border: '1px solid var(--gold-500)' },
    onDark: { background: 'rgba(248,242,232,0.12)', color: 'var(--forest-800)', border: '1px solid rgba(248,242,232,0.25)' },
  };

  return (
    <button
      aria-label={label}
      title={label}
      style={{
        width: d, height: d,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-fast) var(--ease-soft)',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
