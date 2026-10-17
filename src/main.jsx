import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Mail, Menu, Code2, ExternalLink, Layers3, MonitorSmartphone, Server, GraduationCap } from 'lucide-react';
import './styles.css';
import './hero.css';

const profile = {
  name: 'Ahmed Atya',
  role: 'Front-End Developer · React.js',
  email: 'ahmedatya2310@gmail.com',
  phone: '01026036330',
  location: 'Mansoura, Egypt',
  github: 'https://github.com/YOUR-GITHUB-USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/',
  cv: '/Ahmed-Atya-CV.pdf'
};

const projects = [
  {
    number: '01',
    title: 'Grinta',
    type: 'Full-Stack E-commerce',
    description: 'An e-commerce platform focused on football apparel, featuring a React and TypeScript storefront, a separate admin dashboard, and a Node.js/Express backend powered by MongoDB. Supports product browsing, authentication flows, shopping cart functionality, cash-on-delivery orders, order management, and product image uploads.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Zustand', 'Axios'],
    demo: 'https://grinta-official1.sintac.shop/',
    repo: 'https://github.com/AhmedAtya2005/Grinta',
    image: '/images/grinta.png',
    visual: 'visual-store'
  },
  {
    number: '02',
    title: 'LOOM & LININ',
    type: 'E-commerce Storefront & Admin Dashboard',
    description: 'LOOM & LININ is a modern e-commerce storefront with a separate admin dashboard, featuring product discovery, search and filtering, shopping cart and coupon workflows, order management, user management, and REST API integration.',
    stack: ['React 19', 'Vite 8', 'Tailwind CSS 4', 'React Router 7', 'TanStack Query 5', 'Axios'],
    demo: 'https://loom-and-linin-store-ebon.vercel.app/',
    repo: 'https://github.com/team-9-frontend/e-commerce',
    image: '/images/loom.jpg',
    imageFit: 'contain',
    visual: 'visual-store'
  },
  {
    number: '03',
    title: 'BMW Elite',
    type: 'Front-End Website',
    description: 'A BMW showroom and car catalog featuring BMW model categories and trending vehicles, built with HTML, CSS, and Font Awesome.',
    stack: ['HTML', 'CSS', 'Font Awesome'],
    demo: 'https://ahmedatya2005.github.io/project-2/',
    repo: 'https://github.com/AhmedAtya2005/project-2',
    image: '/images/bmwelite.jpg',
    imageAlt: 'BMW Elite showroom homepage screenshot',
    visual: 'visual-cars'
  },
  {
    number: '04',
    title: 'BMW Store',
    type: 'BMW Car Showcase',
    description: 'Responsive BMW car showcase website featuring vehicle collections, featured models, and an interactive browsing experience.',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    demo: 'https://ahmedatya2005.github.io/project-3/',
    repo: 'https://github.com/AhmedAtya2005/project-3',
    image: '/images/cars.jpg',
    imageAlt: 'BMW Store website screenshot',
    imageFit: 'contain',
    visual: 'visual-cars'
  }
];

const skills = [
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js'] },
  { title: 'UI & State', items: ['Tailwind CSS', 'Bootstrap', 'Redux Toolkit', 'Responsive Design'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Problem Solving', 'OOP'] }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ahmed Atya home">
          <span className="brand-mark"><Code2 size={22} strokeWidth={2.5} /></span>
          <span>Ahmed <b>Atya</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <Menu size={22} />
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cv" href={profile.cv} download>Download CV <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for junior opportunities</div>
            <p className="intro">Hello, I'm</p>
            <h1>Ahmed <span>Atya.</span></h1>
            <h2>Front-End Developer <em>focused on React.js</em></h2>
            <p className="hero-description">
              I build responsive, accessible, and user-friendly web interfaces.
              I enjoy turning ideas into clean, practical experiences with modern web technologies.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={19} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a>
            </div>
          </div>
          <div className="hero-art">
            <img className="hero-profile-photo" src="/images/profile.jpg" alt="Ahmed Atya - Profile Photo" />
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="kicker">A LITTLE ABOUT ME</p>
            <h2>Building useful things, <span>one component at a time.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>I'm a Computer Science student at Mansoura University interested in building modern web applications with React.js, JavaScript, and TypeScript.</p>
              <p>I also work with backend technologies such as Node.js, Express.js, and MongoDB, which helps me understand how frontend interfaces connect to APIs and data.</p>
              <p className="muted">I'm continuously learning, improving my code quality, and looking for opportunities to contribute to a development team.</p>
            </div>
            <div className="info-panel">
              <div><GraduationCap /><span><small>Education</small><b>Computer Science</b><small>Mansoura University</small></span></div>
              <div><MonitorSmartphone /><span><small>Focus</small><b>Responsive web interfaces</b><small>React · JavaScript · TypeScript</small></span></div>
              <div><Mail /><span><small>Email</small><b>{profile.email}</b></span></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading">
            <p className="kicker">MY TOOLKIT</p>
            <h2>Skills & <span>technologies.</span></h2>
            <p className="section-subtitle">Technologies I have worked with or studied. I'll keep this list aligned with my actual project experience.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-index">0{i + 1}</span>{i === 0 ? <Code2 /> : i === 1 ? <Layers3 /> : i === 2 ? <Server /> : <MonitorSmartphone />}</div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="kicker">SELECTED WORK</p>
              <h2>Projects that bring ideas <span>to life.</span></h2>
            </div>
            <p className="section-subtitle">A selection of my full-stack and front-end work, with source links where available.</p>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt || (project.title === 'LOOM & LININ' ? 'LOOM & LININ storefront homepage' : 'Grinta football apparel storefront')}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', aspectRatio: '16 / 9', objectFit: project.imageFit || 'cover' }}
                    />
                  ) : (
                    <>
                      <div className="mock-browser"><span /><span /><span /><div className="mock-address" /></div>
                      {project.visual === 'visual-dashboard' && <div className="dashboard-mock"><div className="mock-sidebar" /><div className="mock-content"><div className="mock-title" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="mock-row" /><div className="mock-row small-row" /></div></div>}
                      {project.visual === 'visual-store' && <div className="store-mock"><div className="store-nav" /><div className="store-hero"><span /><i /></div><div className="store-products"><i /><i /><i /></div></div>}
                      {project.visual === 'visual-cars' && <div className="cars-mock"><div className="car-heading" /><div className="car-image">AUTO</div><div className="car-cards"><i /><i /><i /></div></div>}
                    </>
                  )}
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="project-link primary-link">Live demo <ExternalLink size={15} /></a> : <span className="project-link disabled-link">Demo coming soon</span>}
                    {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" className="project-link secondary-link"><Code2 size={15} /> Source code</a> : <span className="project-link disabled-link"><Code2 size={15} /> Repo pending</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <p className="kicker">LET'S CONNECT</p>
              <h2>Have a project in mind?<br /><span>Let's talk.</span></h2>
              <p className="section-subtitle">I'm open to junior opportunities, internships, and collaborations.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}?subject=Let's%20connect`}>Send me an email <ArrowUpRight size={17} /></a>
              <a className="contact-line" href={`tel:${profile.phone}`}><span>Phone</span>{profile.phone}</a>
              <span className="contact-line"><span>Based in</span>{profile.location}</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark"><Code2 size={20} /></span><span>Ahmed <b>Atya</b></span></a>
        <p>Designed & built with care. <span>© {new Date().getFullYear()} Ahmed Atya</span></p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
