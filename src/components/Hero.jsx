import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg hero__bg--grid" aria-hidden="true" />
      <div className="hero__bg hero__bg--orb hero__bg--orb-1" aria-hidden="true" />
      <div className="hero__bg hero__bg--orb hero__bg--orb-2" aria-hidden="true" />

      <div className="hero__inner">
        
        <h1 className="hero__title">
          <span className="hero__title-main">We craft websites that drive</span>
          <span className="hero__title-line"> real business growth</span>
        </h1>

        <p className="hero__desc">
          Your website should do more than look good, it should rank,
          convert, and scale your business every day.
        </p>

        <button
          id="hero-book-call-btn"
          className="hero__cta"
          onClick={() => scrollTo('contact')}
        >
          <span className="hero__cta-text">Let’s Talk</span>
          <span className="hero__cta-icon" aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
