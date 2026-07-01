import React, { useState } from 'react';
import { Button } from '../components/core/Button.jsx';
import { Input, Textarea } from '../components/forms/Input.jsx';
import { Select } from '../components/forms/Select.jsx';
import { SectionHeading } from '../components/content/SectionHeading.jsx';
import { Eyebrow } from '../components/core/Eyebrow.jsx';
import { Icon, Reveal, IMG, CONTACT } from '../shared.jsx';


/**
 * VS Resort — Enquiry page. Split layout: contact details + form.
 */
const WEB3FORMS_KEY = '8e658bb1-d5e7-45e5-bd1a-92b76706e383';

function EnquiryPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    setSending(false);
    if (res.ok) setSent(true);
    else alert('Something went wrong. Please try again or WhatsApp us.');
  }

  const contact = [
    { icon: 'MapPin', label: 'Sector 56, Gurugram, Haryana' },
    { icon: 'Phone', label: CONTACT.phoneDisplay, href: CONTACT.tel },
    { icon: 'MessageCircle', label: 'Chat on WhatsApp', href: CONTACT.whatsapp },
    { icon: 'Mail', label: 'hello@vsresort.in', href: 'mailto:hello@vsresort.in' },
    { icon: 'Clock', label: 'Site visits: 10am – 7pm, daily' },
  ];

  return (
    <section style={{
      background: `linear-gradient(rgba(248,242,232,0.92), rgba(248,242,232,0.96)), url(${IMG.detail})`,
      backgroundSize: 'cover', backgroundAttachment: 'fixed',
      padding: 'calc(var(--section-y) + 40px) var(--gutter) var(--section-y)',
    }}>
      <div className="vs-enquiry-grid" style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(32px, 6vw, 72px)', alignItems: 'start',
      }}>
        {/* Left — info */}
        <Reveal>
          <SectionHeading align="left" divider={false} eyebrow="Plan Your Event" title="Let's Make It Magical" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 1.8, color: 'var(--text-body)', margin: '22px 0 36px' }}>
            Tell us about your occasion and our events team will craft a tailored proposal — typically within 24 hours.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {contact.map((c) => {
              const Tag = c.href ? 'a' : 'div';
              return (
                <Tag key={c.label} href={c.href} target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                  <span style={{
                    width: 44, height: 44, borderRadius: 'var(--radius-pill)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'var(--forest-800)', color: 'var(--gold-400)',
                  }}><Icon name={c.icon} size={18} color="var(--gold-400)" /></span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--ink-700)' }}>{c.label}</span>
                </Tag>
              );
            })}
          </div>
        </Reveal>

        {/* Right — form card */}
        <Reveal delay={120}>
          <div style={{
            background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
            padding: 'clamp(28px, 4vw, 44px)', boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-subtle)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 12px' }}>
                <span style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: '50%', background: 'var(--forest-200)', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <Icon name="Check" size={30} color="var(--forest-800)" />
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-d3)', color: 'var(--forest-800)', margin: '0 0 10px' }}>Thank You</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: 0 }}>Your enquiry is in. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="vs-enquiry-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                <Input name="name" label="Full Name" placeholder="Your name" required />
                <Input name="phone" label="Phone" placeholder="+91 ..." required />
                <Input name="email" label="Email" type="email" placeholder="you@email.com" />
                <Input name="event_date" label="Event Date" type="date" />
                <Select name="occasion" label="Occasion" placeholder="Select an occasion" options={['Wedding', 'Reception', 'Corporate Event', 'Birthday', 'Private Dining', 'Other']} />
                <Select name="guests" label="Guests" placeholder="Approx. guests" options={['Under 100', '100 – 300', '300 – 600', '600 – 1000']} />
                <div style={{ gridColumn: '1 / -1' }}>
                  <Textarea name="message" label="Tell us about your event" rows={4} placeholder="Your vision, preferred spaces, any questions..." />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <Button variant="primary" size="lg" fullWidth type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send Enquiry'}</Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default EnquiryPage;
