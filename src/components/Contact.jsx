import { useState } from 'react';
import './Contact.css';

const BUSINESS_PHONE = '919342542389';
const CONTACT_EMAIL = 'smartnova718@gmail.com';
const CONTACT_FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/mrejbrak';
const SOCIAL_IDS = {
  instagram: 'smartnova.dev',
  x: 'smartnova718',
  linkedin: 'rahim0431',
};
const SOCIAL_LINKS = {
  instagram: `https://www.instagram.com/${SOCIAL_IDS.instagram}/`,
  x: `https://x.com/${SOCIAL_IDS.x}`,
  linkedin: `https://www.linkedin.com/in/${SOCIAL_IDS.linkedin}/`,
};
const SERVICE_LABELS = {
  'landing-page': 'Landing Page',
  'business-website': 'Business Website',
  'web-app': 'Web App',
  redesign: 'Website Redesign',
};

const getFormPayload = (form) => {
  const formData = new FormData(form);
  const serviceValue = formData.get('service')?.toString() || '';

  return {
    name: formData.get('name')?.toString().trim() || '',
    email: formData.get('email')?.toString().trim() || '',
    service: SERVICE_LABELS[serviceValue] || 'Not selected',
    message: formData.get('message')?.toString().trim() || '',
  };
};

const buildInquiryMessage = ({ name, email, service, message }) =>
  [
    'Hi SmartNova, I want to discuss my project.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Message: ${message}`,
  ].join('\n');

const submitInquiry = async (payload) => {
  if (!CONTACT_FORM_ENDPOINT) {
    throw new Error('MISSING_ENDPOINT');
  }

  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      service: payload.service,
      message: payload.message,
      ownerEmail: CONTACT_EMAIL,
      businessPhone: BUSINESS_PHONE,
      messageText: buildInquiryMessage(payload),
      _subject: `New inquiry from ${payload.name} - ${payload.service}`,
      _replyto: payload.email,
      submittedAt: new Date().toISOString(),
      source: 'portfolio-contact-form',
    }),
  });

  if (!response.ok) {
    throw new Error('SUBMIT_FAILED');
  }
};

const Contact = () => {
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = getFormPayload(form);
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitInquiry(payload);
      form.reset();
      setStatus({
        type: 'success',
        message: 'Submitted successfully. We received your inquiry.',
      });
    } catch (error) {
      if (error.message === 'MISSING_ENDPOINT') {
        setStatus({
          type: 'error',
          message: 'Form endpoint is not configured yet. Set VITE_CONTACT_FORM_ENDPOINT.',
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Submission failed. Please try again in a moment.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__panel">
          <p className="contact__label">Contact</p>

          <div className="contact__intro">
            <h2 className="contact__title">Let&apos;s Build Your Next Project</h2>
            <p className="contact__text">
              Tell me about your idea and I'll help you build a fast, modern website or web app for your business.
            </p>

            <div className="contact__intro-divider" aria-hidden="true" />

            <div className="contact__brand-card">
              <h3 className="contact__brand-name">SmartNova</h3>
              <p className="contact__brand-sub">Web Design &amp; Software Development</p>
              <p className="contact__brand-pill">
                <span className="contact__brand-dot" aria-hidden="true" />
                Available for new projects
              </p>

              <div className="contact__meta-row">
                <a className="contact__meta-item" href={`mailto:${CONTACT_EMAIL}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 7h18v10H3z" />
                    <path d="m4 8 8 6 8-6" />
                  </svg>
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <a className="contact__meta-item contact__meta-item--right" href="tel:+919342542389">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.3 14.8c-1.5 1.5-3.7-.7-5.2-2.2-1.5-1.5-3.7-3.7-2.2-5.2l1-1a1.5 1.5 0 0 0 0-2.1L7.1 2.5a1.5 1.5 0 0 0-2.1 0L3.8 3.7c-2 2 0 6.7 4.6 11.3 4.6 4.6 9.3 6.6 11.3 4.6l1.2-1.2a1.5 1.5 0 0 0 0-2.1l-1.8-1.8a1.5 1.5 0 0 0-2.1 0l-1 1Z" />
                  </svg>
                  <span>+91 93425 42389</span>
                </a>
              </div>
            </div>

            <div className="contact__socials" aria-label="Social media links">
              <a
                className="contact__social"
                href={SOCIAL_LINKS.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="6" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" />
                </svg>
              </a>
              <a
                className="contact__social"
                href={SOCIAL_LINKS.x}
                aria-label="X"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 5.8c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2-.7.4-1.6.8-2.4.9a3.7 3.7 0 0 0-6.3 3.4A10.5 10.5 0 0 1 5 4.9a3.7 3.7 0 0 0 1.1 4.9c-.6 0-1.2-.2-1.7-.5 0 1.8 1.2 3.3 2.9 3.7-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.6 1.5 2 2.6 3.8 2.6A7.5 7.5 0 0 1 4 17.2 10.6 10.6 0 0 0 9.7 19c6.8 0 10.6-5.6 10.6-10.5v-.5c.7-.5 1.3-1.2 1.7-2z" />
                </svg>
              </a>
              <a
                className="contact__social"
                href={SOCIAL_LINKS.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 10v8H5v-8h3zM6.5 5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM19 14.2V18h-3v-3.3c0-1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8V18h-3s0-6.5 0-8h3v1.1c.4-.6 1.2-1.4 2.8-1.4 2 0 3.1 1.3 3.1 4.1z" />
                </svg>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your name" required />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="you@example.com" required />
            </div>

            <div className="contact__field contact__field--full">
              <label htmlFor="contact-service">Service</label>
              <div className="contact__select-wrap">
                <select id="contact-service" name="service" defaultValue="" className="contact__select" required>
                  <option value="" disabled>
                    Select service
                  </option>
                  <option value="landing-page">Landing Page</option>
                  <option value="business-website">Business Website</option>
                  <option value="web-app">Web App</option>
                  <option value="redesign">Website Redesign</option>
                </select>
              </div>
            </div>

            <div className="contact__field contact__field--full">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me what you need (website, app, features, timeline)..."
                required
              />
            </div>

            <div className="contact__actions">
              <button type="submit" className="contact__submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </div>

            {status.message ? (
              <p className={`contact__status contact__status--${status.type}`} role="status" aria-live="polite">
                {status.type === 'success' ? <span className="contact__status-icon" aria-hidden="true">✓</span> : null}
                <span>{status.message}</span>
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
