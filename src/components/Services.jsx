import './Services.css';

const SERVICE_ITEMS = [
  {
    id: '01',
    title: 'Website & Web App Development',
    content:
      'Modern websites and web apps tailored to your business goals.',
    icon: 'code',
    badge: 'Core Service',
    highlights: ['Responsive UI', 'Fast Performance'],
  },
  {
    id: '02',
    title: 'WhatsApp Chat Support   Integration',
    content:
      'Add one-click WhatsApp chat so customers can reach you instantly.',
    icon: 'chat',
    badge: 'Lead Boost',
    highlights: ['Instant Chat', 'Mobile Friendly'],
  },
  {
    id: '03',
    title: 'Booking / Appointment System',
    content:
      'Simple online booking flow for appointments, slots, and confirmations.',
    icon: 'calendar',
    badge: 'Automation',
    highlights: ['Time Slots', 'Easy Scheduling'],
  },
  {
    id: '04',
    title: 'Portfolio Website',
    content:
      'A clean portfolio that highlights your work and builds trust.',
    icon: 'portfolio',
    badge: 'Personal Brand',
    highlights: ['Clean Layout', 'Work Showcase'],
  },
  {
    id: '05',
    title: 'Website Deployment',
    content:
      'Fast, secure deployment so your website stays live and reliable.',
    icon: 'launch',
    badge: 'Go Live',
    highlights: ['Secure Hosting', 'Reliable Uptime'],
  },
];

const ServiceIcon = ({ type }) => {
  if (type === 'code') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 7 4 12l5 5" />
        <path d="m15 7 5 5-5 5" />
      </svg>
    );
  }

  if (type === 'chat') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="4.5" width="17" height="12" rx="3" />
        <path d="m9 16.5-2.5 3" />
        <path d="M8 9.5h8" />
        <path d="M8 12.5h5.5" />
      </svg>
    );
  }

  if (type === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2.5" />
        <path d="M8 3.5v3" />
        <path d="M16 3.5v3" />
        <path d="M4 10h16" />
        <path d="M8.5 13.5h2" />
        <path d="M13.5 13.5h2" />
      </svg>
    );
  }

  if (type === 'portfolio') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="6.5" width="17" height="12" rx="2.5" />
        <path d="M9 6.5V5.3a1.8 1.8 0 0 1 1.8-1.8h2.4A1.8 1.8 0 0 1 15 5.3v1.2" />
        <path d="M3.5 11.2h17" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v6" />
      <path d="m8.5 9.5 3.5-3.5 3.5 3.5" />
      <path d="M5 14.5a7 7 0 1 0 14 0" />
    </svg>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__panel">
          <div className="services__header">
            <p className="services__label">Services</p>
            <h2 className="services__title">What I Can Do For Your Business</h2>
          </div>

          <div className="services__grid">
            {SERVICE_ITEMS.map(({ id, title, content, icon, badge, highlights }, index) => (
              <article
                key={id}
                className="service-card"
                style={{ '--icon-delay': `${index * 0.12}s` }}
              >
                <div className={`service-card__icon service-card__icon--${icon}`}>
                  <ServiceIcon type={icon} />
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__content">{content}</p>
                <div className="service-card__chips">
                  {highlights.map((item) => (
                    <span key={`${id}-${item}`} className="service-card__chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="service-card__footer">
                  <span className="service-card__badge">{badge}</span>
                  <a className="service-card__cta" href="#contact">
                   Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
