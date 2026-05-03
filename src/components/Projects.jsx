import './Projects.css';

const PROJECT_ITEMS = [
  {
    title: 'Dental Care Website',
    description:
      'A modern and responsive dental clinic website designed to showcase services, build trust, and simplify appointment booking for patients.',
    url: 'https://primedentall.netlify.app/',
    image: '/project1.png',
    tone: 'legal',
  },
  {
    title: 'Salon & Beauty Website',
    description:
      'A modern salon website featuring service highlights, stylist profiles, and a seamless booking experience to attract and convert local clients.',
    url: 'https://saloneshop.netlify.app/',
    image: '/project2.png',
    tone: 'construction',
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects__inner">
      <div className="projects__panel">
        <div className="projects__top">
          <p className="projects__label">Projects</p>
          <h2 className="projects__title">
            Projects That Deliver
            <br />
            Real Results
          </h2>
        </div>

        <div className="projects__divider" />

        <div className="projects__grid">
          {PROJECT_ITEMS.slice(0, 2).map(({ title, description, tone, url, image }) => (
            <article key={title} className="project-card">
              <div
                className={`project-card__visual ${
                  image ? 'project-card__visual--image' : `project-card__visual--${tone}`
                }`}
              >
                {image ? (
                  <img className="project-card__image" src={image} alt={`${title} preview`} />
                ) : null}
                <a
                  className="project-card__view"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${title}`}
                >
                  {'\u2192'}
                </a>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>
                <p className="project-card__desc">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
