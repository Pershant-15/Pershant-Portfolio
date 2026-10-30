import Particles from './components/Particles.jsx';
import { profile, projects, skills, education } from './data.js';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-night/60 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {profile.name}
        </a>
        <ul className="flex gap-5 text-sm text-mute sm:gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 py-24"
    >
      <p className="mb-6 text-lg text-sky">{profile.role}</p>
      <h1 className="font-display text-[clamp(3rem,11vw,8.5rem)] leading-[0.92] font-extrabold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">{profile.intro}</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5"
        >
          See my projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-paper"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <p className="max-w-prose text-lg leading-relaxed text-paper/90">
          I am a computer applications student who enjoys turning a design into a page that works
          well on every screen. I learn by building, so most of what I know comes from small
          projects like the ones below: a weather app, a coffee shop landing page, and this site.
        </p>
        <div>
          <h3 className="font-display text-xl font-bold">Education</h3>
          <p className="mt-3 text-paper/90">{education.degree}</p>
          <p className="text-mute">{education.school}</p>
          <p className="text-mute">{education.period}</p>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {projects.map((p) => (
          <li
            key={p.title}
            className="group grid gap-4 py-8 transition-colors hover:bg-white/[0.03] md:grid-cols-[1fr_1.4fr] md:gap-10 md:px-4"
          >
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-amber sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-mute">{p.year}</p>
            </div>
            <div>
              <p className="leading-relaxed text-paper/90">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-white/8 px-3 py-1 text-xs text-sky"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {(p.live || p.code) && (
                <div className="mt-4 flex gap-5 text-sm font-semibold">
                  {p.live && (
                    <a className="text-amber hover:underline" href={p.live}>
                      View live site
                    </a>
                  )}
                  {p.code && (
                    <a className="text-amber hover:underline" href={p.code}>
                      View code
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 sm:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group}>
            <h3 className="font-display text-xl font-bold">{s.group}</h3>
            <ul className="mt-4 space-y-2 text-paper/90">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Let's work together">
      <p className="max-w-xl text-lg leading-relaxed text-paper/90">
        I am open to junior web developer roles and internships. Send me a message and I will reply
        as soon as I can.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5"
        >
          Email me
        </a>
        <a
          href={profile.github}
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-paper"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-paper"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-0" aria-hidden="true">
        <Particles
          particleColors={['#f2b661', '#8fb8ff', '#ece9e1']}
          particleCount={260}
          particleSpread={10}
          speed={prefersReducedMotion ? 0 : 0.1}
          particleBaseSize={110}
          moveParticlesOnHover={!prefersReducedMotion}
          particleHoverFactor={1.2}
          alphaParticles={false}
          disableRotation={prefersReducedMotion}
        />
      </div>

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-mute">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </div>
  );
}
