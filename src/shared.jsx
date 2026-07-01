import React, { useState, useEffect, useRef } from 'react';
import { CalendarHeart } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export const MOTION = { y: 28, parallax: 0.18, marquee: 34, count: 1650 };

export const CONTACT = {
  phoneDisplay: '+91 98000 00000',
  tel: 'tel:+919800000000',
  whatsapp: 'https://wa.me/919800000000',
};

export function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 1.6, style = {} }) {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} color={color} strokeWidth={strokeWidth} style={{ display: 'inline-flex', ...style }} />;
}

export function Reveal({ children, delay = 0, y, as = 'div', style = {} }) {
  const dist = y == null ? MOTION.y : y;
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(el); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : `translateY(${dist}px)`,
      transition: `opacity 820ms cubic-bezier(.22,1,.36,1) ${delay}ms, transform 820ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
      ...style,
    }}>{children}</Tag>
  );
}

export function CountUp({ end, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const t0 = performance.now(); const dur = MOTION.count;
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.6 });
    io.observe(el); return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

export function Marquee({ items, tone = 'forest' }) {
  const onForest = tone === 'forest';
  const seq = [];
  for (let copy = 0; copy < 2; copy++) {
    items.forEach((w, i) => {
      seq.push(<span key={`${copy}-w-${i}`} style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400,
        fontSize: 'clamp(22px, 3vw, 34px)',
        color: 'var(--forest-800)',
      }}>{w}</span>);
      seq.push(<span key={`${copy}-d-${i}`} style={{
        width: 8, height: 8, transform: 'rotate(45deg)', flexShrink: 0,
        background: 'var(--gold-500)', margin: '0 clamp(24px,4vw,52px)',
      }} />);
    });
  }
  return (
    <div style={{
      background: onForest ? 'var(--surface-card)' : 'var(--cream-200)',
      borderTop: '1px solid ' + (onForest ? 'rgba(201,162,75,0.25)' : 'var(--border-default)'),
      borderBottom: '1px solid ' + (onForest ? 'rgba(201,162,75,0.25)' : 'var(--border-default)'),
      overflow: 'hidden', padding: '22px 0',
    }}>
      <div className="vs-marquee" style={{ animationDuration: MOTION.marquee + 's' }}>
        {seq}
      </div>
    </div>
  );
}

export function HScroll({ children, itemWidth = 360 }) {
  const ref = useRef(null);
  const drag = useRef({ down: false, x: 0, left: 0 });
  const onDown = (e) => { drag.current = { down: true, x: e.pageX, left: ref.current.scrollLeft }; };
  const onMove = (e) => {
    if (!drag.current.down) return;
    ref.current.scrollLeft = drag.current.left - (e.pageX - drag.current.x);
  };
  const end = () => { drag.current.down = false; };
  return (
    <div ref={ref} className="vs-hscroll"
      onMouseDown={onDown} onMouseMove={onMove} onMouseUp={end} onMouseLeave={end}
      style={{ display: 'flex', gap: 18, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 14, cursor: 'grab' }}>
      {React.Children.map(children, (c) => (
        <div style={{ flex: `0 0 ${itemWidth}px`, scrollSnapAlign: 'start' }}>{c}</div>
      ))}
    </div>
  );
}

export function SideIndex({ sections }) {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 88, behavior: 'smooth' });
  };
  return (
    <div className="vs-sideindex" style={{
      position: 'fixed', left: 28, top: '50%', transform: 'translateY(-50%)', zIndex: 40,
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      {sections.map((s) => (
        <button key={s.id} onClick={() => go(s.id)} title={s.label} style={{
          display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none',
          cursor: 'pointer', padding: 0,
        }}>
          <span style={{
            width: active === s.id ? 26 : 8, height: 8, borderRadius: 'var(--radius-pill)',
            background: active === s.id ? 'var(--gold-500)' : 'var(--forest-400)',
            opacity: active === s.id ? 1 : 0.5, transition: 'all .4s cubic-bezier(.22,1,.36,1)',
          }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '.12em',
            textTransform: 'uppercase', color: 'var(--forest-700)',
            opacity: active === s.id ? 1 : 0, transform: active === s.id ? 'translateX(0)' : 'translateX(-6px)',
            transition: 'all .4s cubic-bezier(.22,1,.36,1)', whiteSpace: 'nowrap',
          }}>{s.label}</span>
        </button>
      ))}
    </div>
  );
}

export function FloatingEnquire({ onClick }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 680);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button onClick={onClick} aria-label="Enquire" style={{
      position: 'fixed', right: 26, bottom: 26, zIndex: 60,
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, letterSpacing: '.02em',
      color: 'var(--forest-900)', background: 'var(--gold-500)', border: 'none',
      padding: '14px 24px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-gold)',
      cursor: 'pointer',
      opacity: show ? 1 : 0, transform: show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(.9)',
      pointerEvents: show ? 'auto' : 'none',
      transition: 'opacity .45s cubic-bezier(.22,1,.36,1), transform .45s cubic-bezier(.22,1,.36,1)',
    }}>
      <CalendarHeart size={17} color="var(--forest-900)" /> Enquire
    </button>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" style={{
      position: 'fixed', right: 26, bottom: 92, zIndex: 60,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 50, height: 50, borderRadius: 'var(--radius-pill)',
      background: '#25D366', color: '#fff', boxShadow: 'var(--shadow-lg)',
    }}>
      <LucideIcons.MessageCircle size={24} color="#fff" strokeWidth={1.8} />
    </a>
  );
}

export function AnimatedHairline({ width = 92, align = 'center', delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.unobserve(el); } }), { threshold: 0.6 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start', margin: '20px 0 0' }}>
      <span style={{ position: 'relative', width, height: 1, display: 'block', background: 'var(--border-default)' }}>
        <span style={{
          position: 'absolute', inset: 0, transformOrigin: align === 'center' ? 'center' : 'left',
          background: 'var(--gold-500)', transform: shown ? 'scaleX(1)' : 'scaleX(0)',
          transition: `transform 900ms cubic-bezier(.22,1,.36,1) ${delay}ms`,
        }} />
        <span style={{
          position: 'absolute', left: '50%', top: '50%', width: 6, height: 6, marginLeft: -3, marginTop: -3,
          transform: shown ? 'rotate(45deg) scale(1)' : 'rotate(45deg) scale(0)', background: 'var(--gold-500)',
          transition: `transform 600ms cubic-bezier(.22,1,.36,1) ${delay + 500}ms`,
        }} />
      </span>
    </div>
  );
}

export function GhostType({ children, top = -30, left = '50%', color = 'var(--forest-800)', size = 'clamp(140px, 22vw, 300px)', opacity = 0.05 }) {
  return (
    <span aria-hidden="true" style={{
      position: 'absolute', top, left, transform: 'translateX(-50%)', zIndex: 0,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size, lineHeight: 1,
      color: 'transparent', WebkitTextStroke: `1px ${color}`, opacity, pointerEvents: 'none',
      whiteSpace: 'nowrap', letterSpacing: '-.02em',
    }}>{children}</span>
  );
}

const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w * 2}&q=95`;

export const IMG = {
  heroLawn:    U('1782025419777-09e493453d9f', 2000),
  banquet:     U('1464366400600-7168b8af9bc3', 1600),
  banquet2:    U('1530103862676-de8c9debad1d', 1200),
  banquet3:    U('1511795409834-ef04bbd61622', 1200),
  suite:       U('1582719478250-c89cae4dc85b', 1600),
  suite2:      U('1611892440504-42a792e24d32', 1200),
  suite3:      U('1618773928121-c32242e63f39', 1200),
  pool:        U('1571896349842-33c89424de2d', 1600),
  pool2:       U('1540541338287-41700207dee6', 1200),
  jacuzzi:     U('1582719508461-905c673771fd', 1200),
  gazebo:      U('1464983953574-0892a716854b', 1600),
  gazebo2:     U('1519167758481-83f550bb49b3', 1200),
  restaurant:  U('1517248135467-4c7edcad34c4', 1600),
  restaurant2: U('1555396273-367ea4eb4db5', 1200),
  food:        U('1414235077428-338989a2e8c0', 1200),
  garden:      U('1492684223066-81342ee5ff30', 1600),
  detail:      U('1465495976277-4387d4b0b4c6', 1200),
};

export const ATMO = {
  daylight: {
    heroScrim: 'linear-gradient(to bottom, rgba(30,40,26,0.34), rgba(30,40,26,0.66))',
    pageScrim: 'linear-gradient(to bottom, rgba(30,40,26,0.30), rgba(30,40,26,0.74))',
    glow: 'rgba(201,162,75,0.30)', grain: 0.10,
  },
  golden: {
    heroScrim: 'linear-gradient(to bottom, rgba(74,48,18,0.30), rgba(46,32,14,0.72))',
    pageScrim: 'linear-gradient(to bottom, rgba(74,48,18,0.28), rgba(40,28,12,0.78))',
    glow: 'rgba(214,182,110,0.42)', grain: 0.16,
  },
  moonlit: {
    heroScrim: 'linear-gradient(to bottom, rgba(18,26,30,0.52), rgba(12,18,16,0.86))',
    pageScrim: 'linear-gradient(to bottom, rgba(18,26,30,0.50), rgba(12,18,16,0.88))',
    glow: 'rgba(180,192,172,0.28)', grain: 0.22,
  },
};
