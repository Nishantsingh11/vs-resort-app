import React, { useState } from 'react';
import { Button } from './components/core/Button.jsx';
import { IconButton } from './components/core/IconButton.jsx';
import { Logo } from './components/core/Logo.jsx';

export default function NavBar({ current, onNavigate, solid = false }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'banquet', label: 'Banquet Lawns' },
    { id: 'guesthouse', label: 'Guest House' },
    { id: 'pool', label: 'Pool' },
    { id: 'gazebo', label: 'Gazebo' },
    { id: 'restaurant', label: 'Restaurant' },
  ];
  const onDark = !solid;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: solid ? 'rgba(11,11,12,0.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background .4s ease, border-color .4s ease',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto',
        padding: '0 var(--gutter)', height: 76,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={44} />
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
            color: 'var(--forest-800)', letterSpacing: '0.01em',
          }}>VS Resort</span>
        </a>

        <nav style={{ display: 'flex', gap: 30 }} className="vs-nav-links">
          {links.map((l) => (
            <a key={l.id} onClick={() => onNavigate(l.id)} style={{
              cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 14,
              fontWeight: 500, letterSpacing: '0.01em',
              color: current === l.id ? 'var(--gold-400)' : 'var(--ink-700)',
              paddingBottom: 4,
              borderBottom: current === l.id ? '1.5px solid var(--gold-500)' : '1.5px solid transparent',
              transition: 'color .2s ease',
            }}>{l.label}</a>
          ))}
        </nav>

        <Button className="vs-nav-cta" variant="primary" size="sm" onClick={() => onNavigate('enquire')}>Enquire</Button>

        <IconButton
          className="vs-nav-toggle"
          variant={onDark ? 'onDark' : 'outline'}
          label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          style={{ display: 'none' }}
        >
          {open ? '✕' : '☰'}
        </IconButton>
      </div>

      {open && (
        <nav className="vs-nav-mobile" style={{
          background: 'var(--cream-100)', borderTop: '1px solid var(--border-subtle)',
          display: 'flex', flexDirection: 'column', padding: '12px var(--gutter) 20px',
        }}>
          {links.map((l) => (
            <a key={l.id} onClick={() => { setOpen(false); onNavigate(l.id); }} style={{
              cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 15,
              fontWeight: 500, padding: '12px 0', color: current === l.id ? 'var(--gold-700)' : 'var(--ink-700)',
              borderBottom: '1px solid var(--border-subtle)',
            }}>{l.label}</a>
          ))}
          <Button variant="primary" size="sm" style={{ marginTop: 16 }} onClick={() => { setOpen(false); onNavigate('enquire'); }}>Enquire</Button>
        </nav>
      )}
    </header>
  );
}
