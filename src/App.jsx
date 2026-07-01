import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import VenuePage from './pages/VenuePage.jsx';
import EnquiryPage from './pages/EnquiryPage.jsx';
import { FloatingEnquire, FloatingWhatsApp, MOTION } from './shared.jsx';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle } from './tweaks-panel.jsx';
import { VENUES } from './venues.js';

const TWEAK_DEFAULTS = {
  atmosphere: 'daylight',
  grain: false,
  motion: 'lush',
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const presets = {
      calm:  { y: 14, parallax: 0.06, marquee: 48, count: 1100 },
      lush:  { y: 28, parallax: 0.18, marquee: 34, count: 1650 },
      still: { y: 0,  parallax: 0,    marquee: 60, count: 1 },
    };
    Object.assign(MOTION, presets[t.motion] || presets.lush);
  }, [t.motion]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (id) => {
    if (id === page) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    setFade(true);
    setTimeout(() => { setPage(id); window.scrollTo({ top: 0 }); setFade(false); }, 280);
  };

  const solidNav = page !== 'home' || scrolled;
  const atmoProps = { atmo: t.atmosphere, grain: t.grain };

  let content;
  if (page === 'home') content = <HomePage onNavigate={navigate} {...atmoProps} />;
  else if (page === 'enquire') content = <EnquiryPage />;
  else if (VENUES[page]) content = <VenuePage key={page} data={VENUES[page]} onNavigate={navigate} {...atmoProps} />;
  else content = <HomePage onNavigate={navigate} {...atmoProps} />;

  const needsTopPad = page !== 'home';

  return (
    <div style={{ background: 'var(--cream-100)', minHeight: '100vh' }}>
      <NavBar current={page} onNavigate={navigate} solid={solidNav} />
      <main style={{
        paddingTop: needsTopPad ? 76 : 0,
        opacity: fade ? 0 : 1,
        transform: fade ? 'translateY(10px)' : 'translateY(0)',
        transition: 'opacity 280ms cubic-bezier(.22,1,.36,1), transform 280ms cubic-bezier(.22,1,.36,1)',
      }}>
        {content}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingEnquire onClick={() => navigate('enquire')} />
      <FloatingWhatsApp />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Atmosphere" />
        <TweakRadio label="Time of day" value={t.atmosphere}
          options={['daylight', 'golden', 'moonlit']}
          onChange={(v) => setTweak('atmosphere', v)} />
        <TweakToggle label="Film grain" value={t.grain}
          onChange={(v) => setTweak('grain', v)} />
        <TweakSection label="Motion" />
        <TweakRadio label="Feel" value={t.motion}
          options={['calm', 'lush', 'still']}
          onChange={(v) => setTweak('motion', v)} />
      </TweaksPanel>
    </div>
  );
}
