import React from 'react';
import { CONTACT } from './shared.jsx';

export default function Footer({ onNavigate }) {
  const col = (title, items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>{title}</div>
      {items.map((it) => (
        <a key={it.label} href={it.href} target={it.href?.startsWith('http') ? '_blank' : undefined} rel={it.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={() => it.id && onNavigate(it.id)} style={{
          cursor: it.id || it.href ? 'pointer' : 'default', fontFamily: 'var(--font-body)', fontSize: 14,
          color: 'var(--ink-500)', transition: 'color .2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--forest-800)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-500)'}
        >{it.label}</a>
      ))}
    </div>
  );

  return (
    <footer style={{ background: 'var(--surface-page)', color: 'var(--forest-800)' }}>
      <div className="vs-footer-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px var(--gutter) 40px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26 }}>VS Resort</div>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17, color: 'var(--gold-400)', margin: '8px 0 18px' }}>Make Every Occasion Magical</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--ink-500)', maxWidth: 280, margin: 0 }}>
            A luxury farmhouse &amp; event venue in Gurugram, set across landscaped lawns and gardens.
          </p>
        </div>
        {col('Explore', [
          { label: 'Banquet Lawns', id: 'banquet' },
          { label: 'Guest House', id: 'guesthouse' },
          { label: 'Swimming Pool', id: 'pool' },
          { label: 'Garden Gazebo', id: 'gazebo' },
          { label: 'Restaurant', id: 'restaurant' },
        ])}
        {col('Occasions', [
          { label: 'Weddings' }, { label: 'Corporate Retreats' },
          { label: 'Birthdays' }, { label: 'Private Dining' },
        ])}
        {col('Contact', [
          { label: 'Sector 56, Gurugram' },
          { label: CONTACT.phoneDisplay, href: CONTACT.tel },
          { label: 'Chat on WhatsApp', href: CONTACT.whatsapp },
          { label: 'hello@vsresort.in', href: 'mailto:hello@vsresort.in' },
          { label: 'Plan a Visit', id: 'enquire' },
        ])}
      </div>
      <div style={{ borderTop: '1px solid var(--border-default)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '22px var(--gutter)',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--ink-500)',
        }}>
          <span>© 2026 VS Resort. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
