import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/core/Button.jsx';
import { AmenityCard } from '../components/content/AmenityCard.jsx';
import { StatItem } from '../components/content/StatItem.jsx';
import { QuoteBlock } from '../components/content/QuoteBlock.jsx';
import { SectionHeading } from '../components/content/SectionHeading.jsx';
import { Eyebrow } from '../components/core/Eyebrow.jsx';
import { GalleryTile } from '../components/content/GalleryTile.jsx';
import { Icon, Reveal, CountUp, Marquee, HScroll, AnimatedHairline, GhostType, IMG, ATMO, MOTION } from '../shared.jsx';


/**
 * VS Resort — Home page. Parallax + cursor-glow + grain hero, availability strip,
 * marquee ribbon, count-up stats, bento amenities, horizontal gallery, ghost type.
 */
function HomePage({ onNavigate, atmo = 'daylight', grain = true }) {
  const A = ATMO[atmo] || ATMO.daylight;
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);
  const [glowOn, setGlowOn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const p = MOTION.parallax;
      bgRef.current.style.transform = `translateY(${window.scrollY * p}px) scale(1.12)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onHeroMove = (e) => {
    if (!glowRef.current || !heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    glowRef.current.style.left = (e.clientX - r.left) + 'px';
    glowRef.current.style.top = (e.clientY - r.top) + 'px';
  };

  const amenities = [
    { icon: 'Trees', title: 'Banquet Lawns', desc: 'Sprawling open-air lawns for up to 1000 guests, framed by mature trees and festoon light.', id: 'banquet', span: 'big', img: IMG.banquet },
    { icon: 'BedDouble', title: 'Guest House', desc: 'Four boutique suites for the couple, family and close guests to stay the night.', id: 'guesthouse' },
    { icon: 'Waves', title: 'Pool & Jacuzzi', desc: 'A crystal-blue pool and bubbling jacuzzi, framed by loungers and palms.', id: 'pool' },
    { icon: 'Flower2', title: 'Garden Gazebo', desc: 'An intimate gazebo for vows, mehndi and golden-hour portraits.', id: 'gazebo' },
    { icon: 'UtensilsCrossed', title: 'Outdoor Restaurant', desc: 'Open-air dining with live counters and a curated multi-cuisine menu.', id: 'restaurant', span: 'wide', img: IMG.restaurant },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        ref={heroRef}
        onMouseEnter={() => setGlowOn(true)}
        onMouseLeave={() => setGlowOn(false)}
        onMouseMove={onHeroMove}
        className={grain ? 'vs-grain' : ''}
        style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
      >
        <div ref={bgRef} style={{
          position: 'absolute', inset: '-6% 0', zIndex: 0,
          backgroundImage: `url(${IMG.heroLawn})`, backgroundSize: 'cover', backgroundPosition: 'center',
          willChange: 'transform',
        }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: A.heroScrim }} />
        <div ref={glowRef} style={{
          position: 'absolute', width: 520, height: 520, borderRadius: '50%', zIndex: 1,
          transform: 'translate(-50%, -50%)', pointerEvents: 'none',
          background: `radial-gradient(circle, ${A.glow} 0%, transparent 68%)`,
          opacity: glowOn ? 1 : 0, transition: 'opacity .5s ease', mixBlendMode: 'screen',
        }} />

        <div style={{ position: 'relative', zIndex: 3, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '120px var(--gutter) 80px', width: '100%' }}>
          <div style={{ maxWidth: 760 }}>
            <div className="vs-rise" style={{ animationDelay: '120ms' }}>
              <Eyebrow tone="light">Luxury Farmhouse &amp; Event Venue · Gurugram</Eyebrow>
            </div>
            <h1 className="vs-rise" style={{
              animationDelay: '260ms',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'var(--text-hero)', lineHeight: 1.04, letterSpacing: '-0.02em',
              color: 'var(--forest-800)', margin: '22px 0 0',
            }}>Make Every<br/>Occasion <span style={{ fontStyle: 'italic', color: 'var(--gold-400)' }}>Magical</span></h1>
            <p className="vs-rise" style={{
              animationDelay: '440ms',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-xl)', lineHeight: 1.6,
              color: 'rgba(248,242,232,0.9)', margin: '26px 0 0', maxWidth: 540,
            }}>Banquet lawns, boutique suites, a crystal-blue pool and an open-air restaurant — set across landscaped grounds for celebrations of every size.</p>
            <div className="vs-rise" style={{ animationDelay: '620ms', display: 'flex', gap: 16, marginTop: 38, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNavigate('enquire')}>Plan Your Event</Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('banquet')}
                style={{ color: 'var(--forest-800)', borderColor: 'rgba(248,242,232,0.5)' }}
                iconRight={<Icon name="ArrowRight" size={16} />}>Explore the Venue</Button>
            </div>

            {/* Availability strip */}
            <div className="vs-rise" style={{ animationDelay: '780ms', marginTop: 44, display: 'inline-flex', alignItems: 'stretch', gap: 0,
              background: 'rgba(248,242,232,0.10)', border: '1px solid rgba(248,242,232,0.22)',
              backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-pill)', padding: '8px 8px 8px 20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingRight: 18 }}>
                <Icon name="CalendarCheck" size={17} color="var(--gold-400)" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--forest-800)' }}>
                  <strong style={{ fontWeight: 600 }}>2026 dates open</strong> · Oct–Mar peak season
                </span>
              </div>
              <button onClick={() => onNavigate('enquire')} style={{
                display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--gold-500)', color: 'var(--forest-900)',
                border: 'none', borderRadius: 'var(--radius-pill)', padding: '9px 18px', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
              }}>Check a date <Icon name="ArrowRight" size={14} color="var(--forest-900)" /></button>
            </div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(248,242,232,0.7)' }}>Scroll</span>
          <span style={{ width: 1, height: 34, background: 'linear-gradient(rgba(201,162,75,.9), transparent)' }} />
        </div>
      </section>

      {/* MARQUEE RIBBON */}
      <Marquee items={['Weddings', 'Corporate Retreats', 'Birthdays', 'Private Dining', 'Sangeets', 'Receptions', 'Milestones']} tone="forest" />

      {/* INTRO + STATS */}
      <section style={{ position: 'relative', background: 'var(--cream-100)', padding: 'var(--section-y) var(--gutter)', overflow: 'hidden' }}>
        <GhostType top={40}>VS</GhostType>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <Eyebrow rule="both">Welcome to VS Resort</Eyebrow>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic',
              fontSize: 'var(--text-d3)', lineHeight: 1.4, color: 'var(--forest-800)',
              margin: '24px 0 0',
            }}>A private estate where landscaped lawns, warm hospitality and golden-hour light come together for the moments that matter most.</p>
            <AnimatedHairline width={100} />
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="vs-stats" style={{
            position: 'relative', zIndex: 1,
            maxWidth: 'var(--container-max)', margin: '56px auto 0', background: 'var(--surface-card)',
            borderRadius: 'var(--radius-lg)', padding: '52px 44px', display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)', gap: 24, boxShadow: 'var(--shadow-lg)',
          }}>
            {[
              { end: 1000, suffix: '+', label: 'Guest Capacity' },
              { end: 18, suffix: '', label: 'Acres of Lawns' },
              { end: 4, suffix: '', label: 'Boutique Suites' },
              { end: 50, suffix: '+', label: 'Events a Year' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-d2)', lineHeight: 1, color: 'var(--gold-400)' }}>
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-700)', marginTop: 12 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* AMENITIES — BENTO */}
      <section style={{ position: 'relative', background: 'var(--cream-50)', padding: 'var(--section-y) var(--gutter)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Reveal>
            <SectionHeading eyebrow="The Estate" title="Everything Your Celebration Needs"
              subtitle="Five distinct spaces, one seamless experience — explore each corner of VS Resort." />
          </Reveal>
          <div className="vs-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '210px', gap: 20, marginTop: 56 }}>
            {amenities.map((a, i) => {
              const span = a.span === 'big' ? { gridColumn: 'span 2', gridRow: 'span 2' }
                : a.span === 'wide' ? { gridColumn: 'span 2' } : {};
              const media = !!a.img;
              return (
                <Reveal key={a.title} delay={(i % 3) * 90} style={span}>
                  <div onClick={() => onNavigate(a.id)} className={media && grain ? 'vs-grain' : ''} style={{
                    position: 'relative', height: '100%', cursor: 'pointer', overflow: 'hidden',
                    borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)',
                    background: media ? `linear-gradient(to top, rgba(30,40,26,.82), rgba(30,40,26,.14)), url(${a.img})` : 'var(--surface-card)',
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    boxShadow: 'var(--shadow-sm)', transition: 'transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s cubic-bezier(.22,1,.36,1)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: media ? 28 : '30px 26px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                  >
                    <div style={{ position: 'relative', zIndex: 3 }}>
                      <div style={{
                        width: 46, height: 46, borderRadius: 'var(--radius-pill)', marginBottom: media ? 14 : 18,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: media ? 'rgba(248,242,232,0.16)' : 'var(--cream-200)',
                        color: media ? 'var(--gold-400)' : 'var(--gold-700)',
                        backdropFilter: media ? 'blur(6px)' : 'none',
                      }}><Icon name={a.icon} size={20} color={media ? 'var(--gold-400)' : 'var(--gold-700)'} /></div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xl)', letterSpacing: '-.01em',
                        color: media ? 'var(--cream-100)' : 'var(--forest-800)', margin: '0 0 8px' }}>{a.title}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 1.6,
                        color: media ? 'rgba(248,242,232,0.82)' : 'var(--text-muted)', margin: 0, maxWidth: 340 }}>{a.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HORIZONTAL GALLERY */}
      <section style={{ position: 'relative', background: 'var(--cream-100)', padding: 'var(--section-y) 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
              <SectionHeading align="left" divider={false} eyebrow="Gallery" title="Moments at VS Resort" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, letterSpacing: '.06em', color: 'var(--ink-500)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="MoveHorizontal" size={16} color="var(--gold-700)" /> Drag to explore
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100} style={{ marginTop: 44 }}>
          <div style={{ padding: '0 var(--gutter)' }}>
            <HScroll itemWidth={380}>
              {[
                { src: IMG.banquet, cap: 'Festoon-lit lawns' },
                { src: IMG.suite2, cap: 'Boutique suites' },
                { src: IMG.pool2, cap: 'Poolside afternoons' },
                { src: IMG.gazebo2, cap: 'The garden gazebo' },
                { src: IMG.food, cap: 'Live dining counters' },
                { src: IMG.garden, cap: 'Golden-hour celebrations' },
              ].map((g) => (
                <GalleryTile key={g.src} src={g.src} alt={g.cap} caption={g.cap} ratio="4 / 5" style={{ height: 470 }} />
              ))}
            </HScroll>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIAL */}
      <section className={grain ? 'vs-grain' : ''} style={{
        position: 'relative',
        backgroundImage: `${A.pageScrim}, url(${IMG.garden})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        padding: 'var(--section-y) var(--gutter)',
      }}>
        <Reveal style={{ position: 'relative', zIndex: 3 }}>
          <QuoteBlock tone="light"
            quote="They turned our wedding into pure magic. The lawns at dusk, the food, the team — every detail was effortless."
            author="Aarti & Rohan" role="Wedding · November 2025" />
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: 'var(--cream-100)', padding: 'var(--section-y) var(--gutter)', overflow: 'hidden' }}>
        <GhostType top={-10} opacity={0.045}>MAGICAL</GhostType>
        <Reveal style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
            <AnimatedHairline width={92} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-d2)', color: 'var(--forest-800)', margin: '28px 0 0', lineHeight: 1.1 }}>Let's Plan Something Magical</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--text-muted)', margin: '18px auto 32px', maxWidth: 520, lineHeight: 1.7 }}>Tell us about your occasion and our team will craft a tailored proposal — usually within 24 hours.</p>
            <Button variant="primary" size="lg" onClick={() => onNavigate('enquire')}>Enquire Now</Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default HomePage;
