import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Analytics } from '@vercel/analytics/react';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import useMetaTags from '../hooks/useMetaTags';

type ContactFormData = {
  user_name: string;
  user_email: string;
  user_message: string;
};

const SectionBar = ({ num, label, meta }: { num: string; label: string; meta: string }) => (
  <div className="section-bar">
    <div className="num">{num}</div>
    <div className="label">{label}</div>
    <div className="meta">{meta}</div>
  </div>
);

const getSkillLevel = (skill: string): string => {
  const levelMap: Record<string, string> = {
    React: 'A+',
    'Next.js': 'A+',
    TypeScript: 'A+',
    'Tailwind CSS': 'A',
    JavaScript: 'A',
    HTML: 'A',
    CSS: 'A',
    'Responsive Design': 'B+',
    Leaflet: 'B+',
    'Node.js': 'A',
    Express: 'A',
    Python: 'B+',
    'REST APIs': 'A',
    Git: 'A+',
    Vite: 'A',
    'VS Code': 'A+',
    Figma: 'B+',
    Photoshop: 'B+',
  };

  return levelMap[skill] ?? 'B';
};

const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

const projectDisplayOverrides = [
  {
    badge: '★ Featured · Production',
    description:
      'Full-stack production website for the Johns Hopkins Hillel — custom API endpoints, an event management system, dynamic content loading, and a fully responsive frontend running on a Jewish life center that hosts hundreds of students.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    liveLabel: 'Live site',
    showDetails: false,
    browserUrl: 'hopkinshillel.org',
  },
  {
    badge: '★ Featured · SaaS',
    description:
      'AI-powered workplace communication assistant. Analyzes messages and generates contextual response suggestions — AES-256-GCM encryption, user style profiling, Claude integration for nuanced relationship analysis.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Postgres', 'Prisma', 'Claude AI', 'Clerk'],
    liveLabel: 'Live demo',
    showDetails: false,
    browserUrl: 'repliable.app',
  },
  {
    badge: 'Side project',
    description:
      'Movie recommendation platform with external TMDB API integration, dynamic search, responsive design, and a user-friendly interface — built without a framework on purpose.',
    tech: ['HTML', 'CSS', 'JavaScript', 'TMDB API'],
    liveLabel: 'Live demo',
    showDetails: false,
    browserUrl: 'dreamfinder.app',
  },
  {
    badge: 'Clone',
    description:
      'Interactive map app — hundreds of US schools on Leaflet with search and marker clustering.',
    tech: ['React', 'Leaflet', 'Python'],
    liveLabel: 'Demo',
    showDetails: false,
    browserUrl: 'mapme-clone.vercel.app',
  },
  {
    badge: 'Prototype',
    description:
      'NFT marketplace prototype — responsive UI, dynamic asset browsing, API-driven data, Clerk auth.',
    tech: ['Next.js', 'Tailwind', 'Clerk'],
    liveLabel: 'Demo',
    showDetails: false,
    browserUrl: 'nftshop.demo',
  },
  {
    badge: 'Side project',
    description:
      'Digital library platform built with React — component architecture, state management, Stripe checkout.',
    tech: ['React', 'Stripe'],
    liveLabel: 'Demo',
    showDetails: false,
    browserUrl: 'openshelf.app',
  },
] as const;

export default function MagazinePortfolio() {
  useMetaTags();

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  const [clock, setClock] = useState('');
  const [accent, setAccent] = useState('#F03A47');
  const [paper, setPaper] = useState<'cream' | 'ivory' | 'kraft'>('cream');
  const [showTweaks, setShowTweaks] = useState(false);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    user_name: '',
    user_email: '',
    user_message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [didSend, setDidSend] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const selectedProject = useMemo(
    () => (location.pathname.startsWith('/projects/') ? projects.find((p) => p.id === id) : null),
    [id, location.pathname],
  );

  const selectedPost = useMemo(
    (): BlogPost | null =>
      location.pathname.startsWith('/blog/') ? blogPosts.find((p) => p.id === id) ?? null : null,
    [id, location.pathname],
  );

  useEffect(() => {
    const updateClock = () => {
      const value = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/New_York',
      });
      setClock(`${value} EST`);
    };

    updateClock();
    const interval = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--hot', accent);
    root.style.setProperty('--hot-soft', `rgba(${hexToRgb(accent)}, 0.10)`);
  }, [accent]);

  useEffect(() => {
    const root = document.documentElement;
    if (paper === 'cream') {
      root.style.setProperty('--paper', '#EFEAE0');
      root.style.setProperty('--paper-2', '#E5DFD2');
      return;
    }
    if (paper === 'ivory') {
      root.style.setProperty('--paper', '#F8F4EA');
      root.style.setProperty('--paper-2', '#EEEAD8');
      return;
    }
    root.style.setProperty('--paper', '#DCCFB5');
    root.style.setProperty('--paper-2', '#CFC0A0');
  }, [paper]);

  useEffect(() => {
    if (location.pathname === '/projects') {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (location.pathname === '/blog') {
      document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.pathname]);

  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const dataSkills = ['PostgreSQL', 'Prisma', 'Clerk', 'Stripe'];
  const toolSkills = skills.filter((skill) => skill.category === 'tools');

  const closeOverlays = () => navigate('/');

  const goToSection = (sectionId: string, route = '/') => {
    if (location.pathname !== route) {
      navigate(route);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const onSubmitContact = async (event: FormEvent) => {
    event.preventDefault();
    setIsSending(true);
    setDidSend(false);

    try {
      await emailjs.send(
        'service_7xmu46e',
        'template_2bw3a1p',
        contactForm,
        'XZiqXvXGUZ2WaKUne',
      );
      setDidSend(true);
      setContactForm({
        user_name: '',
        user_email: '',
        user_message: '',
      });
    } catch (_error) {
      alert('The email service is temporarily unavailable. Please contact me directly at rina.newhouse@gmail.com');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <div className="topband">
        <div>Vol. 02 · Iss. 26</div>
        <div className="center">Rina Newhouse — Portfolio &amp; Field Notes</div>
        <div className="right">{clock} · Baltimore, MD</div>
      </div>

      <header className="masthead">
        <div className="masthead-left">
          <button onClick={() => goToSection('work')}>WORK</button>
          <button onClick={() => goToSection('skills')}>SKILLS</button>
          <button onClick={() => goToSection('writing')}>WRITING</button>
        </div>
        <div className="title">
          <em>The</em> Newhouse
        </div>
        <div className="masthead-right">
          <button onClick={() => goToSection('contact')}>CONTACT</button>
          <a href="https://github.com/RinaNewhouse" target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>
          <a href="/Rina-Newhouse-Resume.pdf?v=2" target="_blank" rel="noreferrer">
            RÉSUMÉ ↗
          </a>
        </div>
      </header>

      <SectionBar
        num="No. 01"
        label="The Cover Story · Software Engineer at Large"
        meta="P. 01 – 02"
      />

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-portrait-block">
            <div className="hero-portrait-frame">
              <img
                className="hero-portrait-img"
                src="/rina-headshot-2026.png"
                alt="Rina Newhouse portrait"
              />
            </div>
            <div className="hero-portrait-caption">
              <span>
                <span className="hot">▲</span> FIG. 01
              </span>
              <span>RN / SELF</span>
            </div>
          </div>

          <div className="hero-display">
            Rina<em>.</em>
          </div>

          <div className="hero-bio-block">
            <span className="pill">Available · 2026</span>
            <p className="hero-bio">
              Hey — I&apos;m Rina, a <em>software engineer</em> specializing in frontend and fullstack
              development, shipping polished interfaces and robust backends that people can actually use.
            </p>
            <div className="hero-cta-row">
              <button className="btn primary" onClick={() => goToSection('work')}>
                View work <span className="arrow">↗</span>
              </button>
              <button className="btn" onClick={() => goToSection('contact')}>
                Email me
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="hero-meta-row">
        <div>
          <span className="lab">Discipline</span>
          <span className="val">
            Full-stack<em>.</em>
          </span>
        </div>
        <div>
          <span className="lab">Stack</span>
          <span className="val">
            React<em>/</em>TS
          </span>
        </div>
        <div>
          <span className="lab">Shipped</span>
          <span className="val">
            06<em>+</em>
          </span>
        </div>
        <div>
          <span className="lab">Coffee</span>
          <span className="val">
            Always<em>.</em>
          </span>
        </div>
        <div>
          <span className="lab">Status</span>
          <span className="val">
            Open<em>.</em>
          </span>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>
            <span>Available for opportunities in 2026</span>
            <span className="dot">●</span>
            <span>Frontend &amp; full-stack engineering</span>
            <span className="dot">●</span>
            <span>React · TypeScript · Next.js</span>
            <span className="dot">●</span>
            <span>Baltimore based, Chicago soon</span>
            <span className="dot">●</span>
            <span>Design-conscious code</span>
            <span className="dot">●</span>
          </span>
          <span>
            <span>Available for opportunities in 2026</span>
            <span className="dot">●</span>
            <span>Frontend &amp; full-stack engineering</span>
            <span className="dot">●</span>
            <span>React · TypeScript · Next.js</span>
            <span className="dot">●</span>
            <span>Baltimore based, Chicago soon</span>
            <span className="dot">●</span>
            <span>Design-conscious code</span>
            <span className="dot">●</span>
          </span>
        </div>
      </div>

      <SectionBar
        num="No. 02"
        label="The Toolkit · A working set, listed in order of reach"
        meta="P. 03"
      />

      <section className="skills" id="skills">
        <div className="intro">
          <h3>
            Things I
            <br />
            reach for
            <br />
            when I&apos;m
            <br />
            <em>building</em>.
          </h3>
          <p>Skills from frontend to backend and delivery tooling, pulled from my real project stack.</p>
        </div>

        <div className="skill-col">
          <div className="head">
            <span className="name">
              <em>—</em> Frontend
            </span>
            <span className="num">.{String(frontendSkills.length).padStart(2, '0')}</span>
          </div>
          <ul>
            {frontendSkills.map((skill) => (
              <li key={skill.name} data-level={getSkillLevel(skill.name)}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-col">
          <div className="head">
            <span className="name">
              <em>—</em> Backend
            </span>
            <span className="num">.{String(backendSkills.length).padStart(2, '0')}</span>
          </div>
          <ul>
            {backendSkills.map((skill) => (
              <li key={skill.name} data-level={getSkillLevel(skill.name)}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-col">
          <div className="head">
            <span className="name">
              <em>—</em> Data
            </span>
            <span className="num">.{String(dataSkills.length).padStart(2, '0')}</span>
          </div>
          <ul>
            {dataSkills.map((skill) => (
              <li key={skill} data-level={getSkillLevel(skill)}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-col">
          <div className="head">
            <span className="name">
              <em>—</em> Tools
            </span>
            <span className="num">.{String(toolSkills.length).padStart(2, '0')}</span>
          </div>
          <ul>
            {toolSkills.map((skill) => (
              <li key={skill.name} data-level={getSkillLevel(skill.name)}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionBar
        num="No. 03"
        label="The Portfolio · Six things, recently shipped"
        meta="P. 04 – 09"
      />

      <section className="featured-headline" id="work">
        <div className="kicker">— Selected work · Last 12 months</div>
        <h2>
          Six projects.
          <br />
          Six different
          <br />
          problems
          <br />
          worth <em>solving</em>.
        </h2>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => {
          const isLeadProject = index === 0;
          const display = projectDisplayOverrides[index];

          return (
            <article
              key={project.id}
              className={`project-cell ${isLeadProject ? 'span-12' : index > 2 ? 'span-4' : ''}`}
            >
            <div className="project-meta-block">
              <div className="project-row-top">
                <span className="idx">No. {String(index + 1).padStart(2, '0')}</span>
                <span>{display.badge}</span>
              </div>
              <h3 className="project-title">{renderProjectTitle(index)}</h3>
              <p className="project-desc">{display.description}</p>

              {isLeadProject && (
                <>
                  <div className="project-stack">
                    {display.tech.map((tech) => (
                      <span key={`${project.id}-${tech}`}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                        {display.liveLabel} <span className="arrow">↗</span>
                      </a>
                    )}
                    <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                      Code
                    </a>
                    {display.showDetails && (
                      <button className="btn" onClick={() => navigate(`/projects/${project.id}`)}>
                        Details
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
            <div className="project-canvas">
              <div className="browser">
                <span className="d" />
                <span className="d" />
                <span className="d" />
                <span className="url">{display.browserUrl}</span>
              </div>
              <div className="frame">{renderProjectCanvas(index)}</div>
            </div>

            {!isLeadProject && (
              <div className="project-lower-meta">
                <div className="project-stack">
                  {display.tech.map((tech) => (
                    <span key={`${project.id}-${tech}`}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl && (
                    <a className="btn primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      {display.liveLabel} <span className="arrow">↗</span>
                    </a>
                  )}
                  <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                  {display.showDetails && (
                    <button className="btn" onClick={() => navigate(`/projects/${project.id}`)}>
                      Details
                    </button>
                  )}
                </div>
              </div>
            )}
          </article>
        );
        })}
      </section>

      <SectionBar num="No. 04" label="Field Note · An aside from the desk" meta="P. 10" />

      <section className="margin-strip">
        <div className="side">
          <span className="lab">Discipline</span>
          <strong>Software engineering</strong>
          <span className="lab">Focus</span>
          <strong>Frontend &amp; full-stack</strong>
          <span className="lab">Currently</span>
          <strong>Baltimore, MD</strong>
        </div>
        <div className="pull">
          The job is to turn vague ideas into things people can <em>actually</em> use — and keep them
          running on Monday morning.
        </div>
        <div className="side">
          <span className="lab">Years coding</span>
          <strong>04+</strong>
          <span className="lab">Production sites</span>
          <strong>06+</strong>
          <span className="lab">Conferences</span>
          <strong>Next.js · SHiP AI</strong>
        </div>
      </section>

      <SectionBar num="No. 05" label="The Diary · Raw notes from a coding life" meta="P. 11 – 12" />

      <section className="writing-block" id="writing">
        <div className="writing-intro">
          <span className="lab">Field Notes</span>
          <h2>
            Raw notes
            <br />
            from a
            <br />
            coding <em>life</em>.
          </h2>
          <p>
            Coding insights, conference reports, interview prep, and the occasional balcony-furniture
            metaphor.
          </p>
          <button className="btn writing-btn" onClick={() => navigate('/blog')}>
            Read all {sortedBlogPosts.length} posts →
          </button>
        </div>

        <div className="posts-list">
          {sortedBlogPosts.slice(0, 6).map((post) => (
            <button key={post.id} className="post-row" onClick={() => navigate(`/blog/${post.id}`)}>
              <div className="date">
                {new Date(post.date).getFullYear()}
                <strong>{formatDateShort(post.date)}</strong>
              </div>
              <div>
                <div className="ttl">{post.title}</div>
                <div className="post-tags">{post.tags.join(' · ')}</div>
              </div>
              <div className="arr">→</div>
            </button>
          ))}
        </div>
      </section>

      <SectionBar num="No. 06" label="The Colophon · Get in touch" meta="P. 13" />

      <section className="colophon" id="contact">
        <div className="colophon-inner">
          <div>
            <h2>
              Got a project
              <br />
              that needs
              <br />
              an <em>engineer</em>?
            </h2>
            <button className="email-row" onClick={() => setIsContactOpen(true)}>
              <span>HMU - let's build something cool</span>
              <span className="arr">→</span>
            </button>
          </div>
          <div className="colophon-side">
            <div>
              <div className="lab">Currently</div>
              <div className="val">Open to full-time, freelance, and weird side projects.</div>
            </div>
            <div>
              <div className="lab">Response time</div>
              <div className="val">Usually within 24 hours.</div>
            </div>
            <div>
              <div className="lab">Elsewhere</div>
              <div className="val links-inline">
                <a href="https://github.com/RinaNewhouse" target="_blank" rel="noreferrer">
                  GitHub<sup>↗</sup>
                </a>
                <a href="https://www.linkedin.com/in/rina-newhouse/" target="_blank" rel="noreferrer">
                  LinkedIn<sup>↗</sup>
                </a>
                <a href="/Rina-Newhouse-Resume.pdf?v=2" target="_blank" rel="noreferrer">
                  Résumé<sup>↗</sup>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bottombar">
        <div>© {new Date().getFullYear()} Rina Newhouse · All rights reserved</div>
        <div className="center">
          <em>—</em> R.E.N. <em>—</em>
        </div>
        <div className="right">
          <button onClick={() => goToSection('top')}>Back to top ↑</button> · Set in Instrument Serif &amp; Manrope
        </div>
      </div>

      <button className="tweak-toggle-btn" onClick={() => setShowTweaks((prev) => !prev)} aria-label="Toggle tweaks">
        ⚙
      </button>

      {showTweaks && (
        <div className="tweaks">
          <div className="tweaks-head">
            <div className="ttl">Tweaks</div>
            <button onClick={() => setShowTweaks(false)}>✕</button>
          </div>
          <div className="tweak-group">
            <div className="lab">Accent</div>
            <div className="swatches">
              {['#F03A47', '#FF3D7F', '#5B6B3A', '#2A4FBC', '#C97A2B'].map((color) => (
                <button
                  key={color}
                  className={`swatch ${accent === color ? 'active' : ''}`}
                  style={{ background: color }}
                  onClick={() => setAccent(color)}
                  aria-label={`Set accent ${color}`}
                />
              ))}
            </div>
          </div>
          <div className="tweak-group">
            <div className="lab">Paper</div>
            <div className="tweak-radio">
              {(['cream', 'ivory', 'kraft'] as const).map((option) => (
                <button
                  key={option}
                  className={paper === option ? 'active' : ''}
                  onClick={() => setPaper(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="overlay" onClick={closeOverlays}>
          <div className="overlay-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" onClick={closeOverlays}>
              ×
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <img src={selectedProject.imageUrl} alt={selectedProject.title} />
            <div className="project-links">
              {selectedProject.liveUrl && (
                <a className="btn primary" href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                  Live demo ↗
                </a>
              )}
              <a className="btn" href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                Code
              </a>
            </div>
          </div>
        </div>
      )}

      {selectedPost && (
        <div className="overlay" onClick={closeOverlays}>
          <div className="overlay-card post-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" onClick={closeOverlays}>
              ×
            </button>
            <p className="post-date">{selectedPost.date}</p>
            <h3>{selectedPost.title}</h3>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
          </div>
        </div>
      )}

      {isContactOpen && (
        <div className="overlay" onClick={() => setIsContactOpen(false)}>
          <div className="overlay-card contact-card" onClick={(event) => event.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsContactOpen(false)}>
              ×
            </button>
            <h3>Let&apos;s have a chat.</h3>
            <form className="contact-form" onSubmit={onSubmitContact}>
              <label>
                Name
                <input
                  type="text"
                  value={contactForm.user_name}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, user_name: e.target.value }))}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={contactForm.user_email}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, user_email: e.target.value }))}
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  rows={5}
                  value={contactForm.user_message}
                  onChange={(e) => setContactForm((prev) => ({ ...prev, user_message: e.target.value }))}
                  required
                />
              </label>
              <button className="btn primary" type="submit" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send it my way'}
              </button>
              {didSend && <p className="send-success">Message sent. Looking forward to speaking with you.</p>}
            </form>
          </div>
        </div>
      )}

      <Analytics />
    </div>
  );
}

function renderProjectTitle(index: number) {
  if (index === 0) {
    return (
      <>
        Hopkins <em>Hillel.</em>
      </>
    );
  }
  if (index === 1) {
    return <em>Repliable.</em>;
  }
  if (index === 2) {
    return (
      <>
        Dream <em>Finder.</em>
      </>
    );
  }
  if (index === 3) {
    return (
      <>
        Mapme
        <br />
        <em>Clone.</em>
      </>
    );
  }
  if (index === 4) {
    return (
      <>
        NFT
        <br />
        <em>Market.</em>
      </>
    );
  }
  return (
    <>
      Online
      <br />
      <em>Library.</em>
    </>
  );
}

function renderProjectCanvas(index: number) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 600 380" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="380" fill="#1f1135" />
        <text x="40" y="100" fontFamily="Instrument Serif" fontSize="60" fill="#EFEAE0" fontStyle="italic">
          Hopkins
        </text>
        <text x="40" y="160" fontFamily="Instrument Serif" fontSize="60" fill="#F03A47">
          Hillel.
        </text>
        <text x="40" y="190" fontFamily="DM Mono" fontSize="11" letterSpacing="2" fill="#aaa">
          THE HOME FOR JEWISH LIFE
        </text>
        <text x="40" y="210" fontFamily="DM Mono" fontSize="11" letterSpacing="2" fill="#aaa">
          AT JOHNS HOPKINS UNIVERSITY
        </text>
        <rect x="40" y="240" width="120" height="36" fill="#F03A47" />
        <text x="100" y="263" fontFamily="DM Mono" fontSize="11" letterSpacing="1" fill="#fff" textAnchor="middle">
          JOIN US →
        </text>
        <rect x="340" y="60" width="220" height="260" fill="#2d1b50" stroke="rgba(255,255,255,0.1)" />
        <circle cx="370" cy="100" r="14" fill="#F03A47" />
        <rect x="392" y="92" width="120" height="8" fill="rgba(255,255,255,0.5)" />
        <rect x="392" y="106" width="80" height="6" fill="rgba(255,255,255,0.3)" />
        <rect x="354" y="140" width="190" height="5" fill="rgba(255,255,255,0.15)" />
        <rect x="354" y="156" width="170" height="5" fill="rgba(255,255,255,0.15)" />
        <rect x="354" y="172" width="180" height="5" fill="rgba(255,255,255,0.15)" />
        <rect x="354" y="200" width="190" height="100" fill="rgba(240,58,71,0.1)" stroke="#F03A47" strokeOpacity="0.4" />
        <text x="449" y="252" fontFamily="DM Mono" fontSize="11" fill="#F03A47" textAnchor="middle">
          UPCOMING EVENT
        </text>
        <text x="449" y="270" fontFamily="Instrument Serif" fontSize="20" fill="#fff" textAnchor="middle">
          Shabbat Dinner
        </text>
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="600" height="360" fill="#EFEAE0" />
        <text x="40" y="70" fontFamily="Instrument Serif" fontSize="34" fill="#111114">
          Stop second-
        </text>
        <text x="40" y="108" fontFamily="Instrument Serif" fontSize="34" fill="#111114">
          guessing your
        </text>
        <text x="40" y="146" fontFamily="Instrument Serif" fontSize="34" fill="#F03A47" fontStyle="italic">
          work replies.
        </text>
        <rect x="40" y="170" width="100" height="34" fill="#111114" />
        <text x="90" y="192" fontFamily="Manrope" fontWeight="600" fontSize="12" fill="#EFEAE0" textAnchor="middle">
          Try free
        </text>
        <rect x="300" y="60" width="260" height="260" fill="#fff" stroke="rgba(0,0,0,0.1)" />
        <rect x="300" y="60" width="260" height="40" fill="#111114" />
        <circle cx="324" cy="80" r="7" fill="#F03A47" />
        <rect x="338" y="74" width="90" height="5" fill="rgba(255,255,255,0.6)" />
        <rect x="338" y="86" width="60" height="3" fill="rgba(255,255,255,0.4)" />
        <rect x="320" y="120" width="160" height="44" fill="#EFEAE0" />
        <rect x="332" y="132" width="120" height="4" fill="rgba(0,0,0,0.6)" />
        <rect x="332" y="142" width="140" height="4" fill="rgba(0,0,0,0.6)" />
        <rect x="346" y="178" width="194" height="56" fill="rgba(240,58,71,0.12)" stroke="rgba(240,58,71,0.4)" />
        <rect x="358" y="190" width="120" height="4" fill="#F03A47" />
        <rect x="358" y="200" width="160" height="4" fill="#F03A47" opacity="0.6" />
        <rect x="358" y="210" width="130" height="4" fill="#F03A47" opacity="0.6" />
        <rect x="320" y="248" width="220" height="50" fill="#EFEAE0" stroke="rgba(0,0,0,0.08)" />
        <text x="332" y="278" fontFamily="Manrope" fontSize="11" fill="#111114" opacity="0.5">
          Type your reply...
        </text>
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 600 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="df2" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#4a2380" />
            <stop offset="1" stopColor="#2a1452" />
          </linearGradient>
        </defs>
        <rect width="600" height="360" fill="url(#df2)" />
        <text x="300" y="120" fontFamily="Instrument Serif" fontSize="64" fill="#EFEAE0" textAnchor="middle" fontStyle="italic">
          Dream
        </text>
        <text x="300" y="176" fontFamily="Instrument Serif" fontSize="64" fill="#F03A47" textAnchor="middle">
          Finder.
        </text>
        <rect x="170" y="210" width="260" height="40" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" />
        <circle cx="190" cy="230" r="7" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
        <text x="216" y="234" fontFamily="Manrope" fontSize="12" fill="rgba(255,255,255,0.5)">
          Search for a movie...
        </text>
        <rect x="60" y="280" width="60" height="76" fill="#F03A47" opacity="0.7" />
        <rect x="130" y="280" width="60" height="76" fill="#7F3DFF" opacity="0.7" />
        <rect x="200" y="280" width="60" height="76" fill="#3DFF7F" opacity="0.5" />
        <rect x="270" y="280" width="60" height="76" fill="#FFB73D" opacity="0.6" />
        <rect x="340" y="280" width="60" height="76" fill="#3DB7FF" opacity="0.6" />
        <rect x="410" y="280" width="60" height="76" fill="#F03A47" opacity="0.4" />
        <rect x="480" y="280" width="60" height="76" fill="#7F3DFF" opacity="0.4" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg viewBox="0 0 400 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="280" fill="#dde2d8" />
        <path d="M 0 80 Q 100 60 200 90 T 400 70 L 400 130 Q 300 140 200 120 T 0 140 Z" fill="#c8d2c5" opacity="0.6" />
        <path d="M 0 150 Q 80 170 180 155 T 400 170 L 400 220 Q 280 230 180 215 T 0 225 Z" fill="#b8c4b5" opacity="0.5" />
        <g stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M 0 100 Q 200 80 400 110" />
          <path d="M 50 0 L 80 280" />
          <path d="M 200 0 L 220 280" />
        </g>
        <circle cx="80" cy="100" r="6" fill="#F03A47" stroke="#fff" strokeWidth="2" />
        <circle cx="140" cy="140" r="6" fill="#F03A47" stroke="#fff" strokeWidth="2" />
        <circle cx="220" cy="80" r="6" fill="#F03A47" stroke="#fff" strokeWidth="2" />
        <circle cx="180" cy="180" r="6" fill="#F03A47" stroke="#fff" strokeWidth="2" />
        <circle cx="300" cy="120" r="6" fill="#F03A47" stroke="#fff" strokeWidth="2" />
        <circle cx="260" cy="200" r="14" fill="#F03A47" stroke="#fff" strokeWidth="2" />
        <text x="260" y="205" fontFamily="Manrope" fontSize="11" fill="#fff" textAnchor="middle" fontWeight="700">
          12
        </text>
        <rect x="20" y="20" width="140" height="40" fill="#fff" />
        <text x="32" y="36" fontFamily="DM Mono" fontSize="9" letterSpacing="1" fill="#888">
          US SCHOOLS
        </text>
        <text x="32" y="52" fontFamily="Instrument Serif" fontSize="16" fill="#111114">
          412 plotted
        </text>
      </svg>
    );
  }

  if (index === 4) {
    return (
      <svg viewBox="0 0 400 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="280" fill="#0e0e14" />
        <text x="30" y="60" fontFamily="Instrument Serif" fontSize="24" fill="#EFEAE0">
          Create, sell
        </text>
        <text x="30" y="88" fontFamily="Instrument Serif" fontSize="24" fill="#EFEAE0">
          or collect
        </text>
        <text x="30" y="116" fontFamily="Instrument Serif" fontSize="24" fill="#F03A47" fontStyle="italic">
          digital items.
        </text>
        <g transform="translate(290,130)">
          <polygon points="0,-45 45,-22 45,32 0,55 -45,32 -45,-22" fill="#F03A47" opacity="0.9" />
          <polygon points="0,-45 45,-22 0,0 -45,-22" fill="#fff" opacity="0.2" />
          <polygon points="45,-22 45,32 0,55 0,0" fill="#0B0B0E" opacity="0.4" />
        </g>
        <circle cx="220" cy="40" r="4" fill="#FFB73D" />
        <circle cx="350" cy="60" r="3" fill="#3DB7FF" />
        <circle cx="230" cy="200" r="3" fill="#3DFF7F" />
        <rect x="30" y="180" width="90" height="56" fill="#17171D" stroke="rgba(255,255,255,0.1)" />
        <rect x="38" y="188" width="34" height="34" fill="#F03A47" opacity="0.6" />
        <rect x="80" y="190" width="32" height="4" fill="rgba(255,255,255,0.6)" />
        <text x="80" y="222" fontFamily="DM Mono" fontSize="9" fill="#F03A47">
          2.4 ETH
        </text>
        <rect x="130" y="180" width="90" height="56" fill="#17171D" stroke="rgba(255,255,255,0.1)" />
        <rect x="138" y="188" width="34" height="34" fill="#7F3DFF" opacity="0.6" />
        <text x="180" y="222" fontFamily="DM Mono" fontSize="9" fill="#F03A47">
          0.8 ETH
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="280" fill="#f5e8e2" />
      <text x="30" y="60" fontFamily="Instrument Serif" fontSize="22" fill="#111114">
        America&apos;s most
      </text>
      <text x="30" y="86" fontFamily="Instrument Serif" fontSize="22" fill="#111114">
        awarded online
      </text>
      <text x="30" y="112" fontFamily="Instrument Serif" fontSize="22" fill="#F03A47" fontStyle="italic">
        library platform.
      </text>
      <rect x="30" y="138" width="100" height="32" fill="#111114" />
      <text x="80" y="159" fontFamily="Manrope" fontWeight="600" fontSize="11" fill="#EFEAE0" textAnchor="middle">
        Shop Books
      </text>
      <g transform="translate(270,150)">
        <rect x="-60" y="50" width="120" height="16" fill="#111114" />
        <rect x="-50" y="-10" width="22" height="60" fill="#F03A47" />
        <rect x="-26" y="-25" width="24" height="75" fill="#3DB7FF" />
        <rect x="0" y="-5" width="22" height="55" fill="#FFB73D" />
        <rect x="24" y="-20" width="24" height="70" fill="#7F3DFF" />
        <circle cx="20" cy="-50" r="11" fill="#d4b59a" />
        <rect x="14" y="-40" width="12" height="25" fill="#F03A47" />
      </g>
    </svg>
  );
}

function formatDateShort(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
}

function hexToRgb(hex: string): string {
  const color = hex.replace('#', '');
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
