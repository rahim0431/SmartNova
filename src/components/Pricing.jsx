import './Pricing.css';

const WHATSAPP_NUMBER = '919342542389';
const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Abdul, I saw your pricing plans and I'd like to discuss my project."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const PRICING_PLANS = [
  {
    name: 'Basic',
    price: '₹1999',
    description: 'Simple website',
    paymentLabel: 'Single Payment',
    tone: 'basic',
    features: ['1 page website', 'Mobile responsive', 'Contact details section', 'Quick delivery'],
  },
  {
    name: 'Standard',
    price: '₹4999',
    description: 'Business website',
    paymentLabel: 'Single Payment',
    tone: 'standard',
    popular: true,
    features: ['Up to 5 pages', 'Contact form', 'WhatsApp integration', 'SEO-ready structure'],
  },
  {
    name: 'Premium',
    price: '₹9999+',
    description: 'Web apps / advanced features',
    paymentLabel: 'Custom Scope',
    tone: 'premium',
    features: ['Custom functionality', 'Booking or dashboard flow', 'Advanced integrations', 'Priority support'],
  },
];

const Pricing = () => (
  <section id="pricing" className="pricing">
    <div className="pricing__inner">
      <div className="pricing__panel">
        <div className="pricing__header">
          <p className="pricing__label">Pricing</p>
          <h2 className="pricing__title">Choose the Right Plan for Your Needs</h2>
        </div>

        <div className="pricing__grid">
          {PRICING_PLANS.map(({ name, price, description, paymentLabel, tone, popular, features }) => (
            <article key={name} className={`pricing-card pricing-card--${tone}`}>
              {popular ? <span className="pricing-card__badge">Popular</span> : null}
              <h3 className="pricing-card__name">{name}</h3>
              <p className="pricing-card__desc">{description}</p>
              <p className="pricing-card__payment">{paymentLabel}</p>
              <p className="pricing-card__price">{price}</p>

              <ul className="pricing-card__list">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a className="pricing-card__cta" href="#contact">
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="pricing-cta">
        <h3 className="pricing-cta__title">Have an Idea in Mind?</h3>
        <p className="pricing-cta__text">
          Tell me your idea and I'll help you turn it into a fast, modern website or web app for your business.
        </p>

        <div className="pricing-cta__actions">
          <a
            className="pricing-cta__book"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Start WhatsApp chat"
          >
            <span className="pricing-cta__book-text">Let's Talk</span>
            {/* <span className="pricing-cta__book-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14" />
                <path d="m13 7 5 5-5 5" />
              </svg>
            </span> */}
          </a>
          <a
            className="pricing-cta__phone"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Start WhatsApp chat"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.3 14.8c-1.5 1.5-3.7-.7-5.2-2.2-1.5-1.5-3.7-3.7-2.2-5.2l1-1a1.5 1.5 0 0 0 0-2.1L7.1 2.5a1.5 1.5 0 0 0-2.1 0L3.8 3.7c-2 2 0 6.7 4.6 11.3 4.6 4.6 9.3 6.6 11.3 4.6l1.2-1.2a1.5 1.5 0 0 0 0-2.1l-1.8-1.8a1.5 1.5 0 0 0-2.1 0l-1 1Z" />
            </svg>
          </a>
        </div>

        <p className="pricing-cta__trust">Usually responds within a few hours</p>
      </div>
    </div>
  </section>
);

export default Pricing;
