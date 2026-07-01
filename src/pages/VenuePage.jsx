import React, { useRef, useEffect } from 'react';
import { Button } from '../components/core/Button.jsx';
import { AmenityCard } from '../components/content/AmenityCard.jsx';
import { StatItem } from '../components/content/StatItem.jsx';
import { SectionHeading } from '../components/content/SectionHeading.jsx';
import { Eyebrow } from '../components/core/Eyebrow.jsx';
import { GalleryTile } from '../components/content/GalleryTile.jsx';
import { Badge } from '../components/core/Badge.jsx';
import { Icon, Reveal, CountUp, HScroll, SideIndex, AnimatedHairline, GhostType, ATMO, MOTION } from '../shared.jsx';


/**
 * VS Resort — venue/amenity page. Grain+parallax hero, sticky side index,
 * asymmetric offset intro grid, bento features, horizontal gallery, big numerals.
 */
function VenuePage({ data, onNavigate, atmo = 'daylight', grain = true }) {
  const A = ATMO[atmo] || ATMO.daylight;
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const top = bgRef.current.parentElement.getBoundingClientRect().top;
      bgRef.current.style.transform = `translateY(${-top * MOTION.parallax}px) scale(1.14)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [data]);

  const sections = [
    { id: 'v-intro', label: 'Overview' },
    { id: 'v-features', label: 'Included' },
    { id: 'v-gallery', label: 'Gallery' },
    { id: 'v-enquire', label: 'Enquire' },
  ];

  return (
    <div style={{ background: 'var(--cream-100)' }}>
      <SideIndex sections={sections} />

      {/* HERO */}
      <section className={grain ? 'vs-grain' : ''} style={{
        position: 'relative', minHeight: '66vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
      }}>
        <div ref={bgRef} style={{
          position: 'absolute', inset: '-8% 0', zIndex: 0, willChange: 'transform',
          backgroundImage: `url(${data.hero})`, backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: A.pageScrim }} />
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter) 64px', width: '100%' }}>
          <div className="vs-rise"><Eyebrow tone="light">{data.eyebrow}</Eyebrow></div>
          <h1 className="vs-rise" style={{
            animationDelay: '140ms',
            fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-d1)',
            lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--forest-800)', margin: '18px 0 0', maxWidth: 760,
          }}>{data.title}</h1>
          <div className="vs-rise" style={{ animationDelay: '280ms', display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
            {data.badges.map((b) => <Badge key={b} tone="gold">{b}</Badge>)}
          </div>
        </div>
      </section>

      {/* INTRO — asymmetric offset image grid */}
      <section id="v-intro" style={{ position: 'relative', padding: 'var(--section-y) var(--gutter)', overflow: 'hidden' }}>
        <GhostType top={30} left="82%" size="clamp(120px, 16vw, 240px)">01</GhostType>
        <div className="vs-venue-hero" style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center' }}>
          <Reveal>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--gold-600)', fontStyle: 'italic' }}>01 — Overview</span>
            <SectionHeading align="left" divider={false} eyebrow={data.introEyebrow} title={data.introTitle} style={{ marginTop: 6 }} />
            <AnimatedHairline width={80} align="left" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 1.8, color: 'var(--text-body)', margin: '22px 0 0' }}>{data.intro}</p>
            <div style={{ display: 'flex', gap: 48, marginTop: 36 }}>
              {data.stats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-d2)', lineHeight: 1, color: 'var(--gold-700)' }}>
                    <CountUp end={s.num} prefix={s.prefix || ''} suffix={s.suffix || ''} />
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Offset overlapping images */}
          <Reveal delay={120}>
            <div style={{ position: 'relative', height: 460 }}>
              <div className={grain ? 'vs-grain' : ''} style={{
                position: 'absolute', top: 0, right: 0, width: '76%', height: 340, overflow: 'hidden',
                borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
                backgroundImage: `url(${data.gallery[0]})`, backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
              <div className={grain ? 'vs-grain' : ''} style={{
                position: 'absolute', bottom: 0, left: 0, width: '58%', height: 260, overflow: 'hidden',
                borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', border: '5px solid var(--cream-50)',
                backgroundImage: `url(${data.gallery[1]})`, backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
              <div style={{ position: 'absolute', top: 300, right: 18, width: 70, height: 70, borderRadius: '50%', background: 'var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-gold)', zIndex: 4 }}>
                <Icon name="Sparkles" size={26} color="var(--forest-900)" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES — bento */}
      <section id="v-features" style={{ position: 'relative', background: 'var(--cream-50)', padding: 'var(--section-y) var(--gutter)', overflow: 'hidden' }}>
        <GhostType top={30} left="16%" size="clamp(120px, 16vw, 240px)">02</GhostType>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <Reveal><SectionHeading eyebrow="What's Included" title={data.featuresTitle} /></Reveal>
          <div className="vs-venue-trio" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginTop: 56 }}>
            {data.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90} style={i === 0 ? { gridColumn: 'span 1' } : {}}>
                <AmenityCard icon={<Icon name={f.icon} />} title={f.title} description={f.desc} style={{ height: '100%' }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — horizontal */}
      <section id="v-gallery" style={{ position: 'relative', padding: 'var(--section-y) 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
              <SectionHeading align="left" divider={false} eyebrow="Gallery" title={data.galleryTitle} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, letterSpacing: '.06em', color: 'var(--ink-500)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Icon name="MoveHorizontal" size={16} color="var(--gold-700)" /> Drag to explore
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100} style={{ marginTop: 44 }}>
          <div style={{ padding: '0 var(--gutter)' }}>
            <HScroll itemWidth={340}>
              {data.gallery.map((src, i) => (
                <GalleryTile key={src} src={src} alt={`${data.title} ${i + 1}`} caption={data.galleryTitle} ratio="4 / 5" style={{ height: 430 }} />
              ))}
            </HScroll>
          </div>
        </Reveal>
      </section>

      {/* CTA BAND */}
      <section id="v-enquire" className={grain ? 'vs-grain' : ''} style={{ position: 'relative', background: 'var(--surface-card)', padding: '80px var(--gutter)', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 3, maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-d3)', color: 'var(--forest-800)', margin: 0 }}>{data.ctaTitle}</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--ink-700)', margin: '16px auto 28px', maxWidth: 460, lineHeight: 1.7 }}>{data.ctaText}</p>
            <Button variant="primary" size="lg" onClick={() => onNavigate('enquire')}>Check Availability</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default VenuePage;
