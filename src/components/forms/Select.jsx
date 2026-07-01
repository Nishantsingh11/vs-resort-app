import React from 'react';

/**
 * VS Resort — Select
 * Labelled dropdown matching the Input style, with a custom gold chevron.
 */
export function Select({ label, id, options = [], placeholder, style = {}, children, ...rest }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} style={{
          display: 'block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
          fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: '8px',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={id}
          style={{
            width: '100%', boxSizing: 'border-box', appearance: 'none',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
            color: 'var(--ink-900)', background: 'var(--cream-50)',
            border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
            padding: '13px 40px 13px 15px', outline: 'none', cursor: 'pointer',
            transition: 'border-color var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)',
            ...style,
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--gold-500)'; e.currentTarget.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.boxShadow = 'none'; }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
          {children}
        </select>
        <span style={{
          position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
          width: 8, height: 8, borderRight: '1.5px solid var(--gold-700)',
          borderBottom: '1.5px solid var(--gold-700)', rotate: '45deg',
          pointerEvents: 'none', marginTop: -2,
        }} />
      </div>
    </div>
  );
}
