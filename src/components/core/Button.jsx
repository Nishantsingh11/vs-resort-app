import React from 'react';

/**
 * VS Resort — Button
 * Earthy Luxe primary action. Gold fill, forest text; calm hover-lift.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: '13px', gap: '7px' },
    md: { padding: '12px 24px', fontSize: '14px', gap: '9px' },
    lg: { padding: '16px 34px', fontSize: '15px', gap: '11px' },
  };

  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--forest-900)',
      border: '1px solid var(--gold-500)',
      boxShadow: 'var(--shadow-gold)',
    },
    secondary: {
      background: 'var(--forest-800)',
      color: 'var(--cream-100)',
      border: '1px solid var(--forest-800)',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--forest-800)',
      border: '1px solid var(--forest-400)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--forest-800)',
      border: '1px solid transparent',
      boxShadow: 'none',
    },
  };

  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-fast) var(--ease-soft)',
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    ...variants[variant],
    ...style,
  };

  const Tag = as;
  return (
    <Tag
      style={base}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
