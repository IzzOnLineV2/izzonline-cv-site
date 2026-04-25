'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe, Linkedin, Github, EyeOff, Eye, Minimize2, Maximize2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import {
  getExperiences,
  getOtherProjects,
  getEducation,
  skillCategoriesData,
} from '../../data/cv-data';
import './cv-print.css';

const SPRING_EXPERTISE = [
  'Spring Core', 'Spring Context', 'Spring Beans', 'Spring SpEL',
  'Spring Web MVC', 'Spring REST', 'Spring Boot', 'Spring Boot Actuator',
  'Spring Data JPA', 'Spring Data MongoDB', 'Spring JDBC',
  'Spring Transaction Management', 'Spring Security', 'Spring Security OAuth2',
  'Spring Security SAML2', 'Spring Cloud Config', 'Spring Cloud Gateway',
  'Spring Cloud OpenFeign', 'Spring Cloud Netflix', 'Spring Cloud Sleuth',
  'Spring Test', 'Spring AI', 'Spring for Apache Kafka', 'Spring AMQP',
  'Spring Scheduling', 'Spring Batch', 'Spring AOP', 'Spring Validation',
];

type SectionId = 'header' | 'summary' | 'experience' | 'otherProjects' | 'skills' | 'springExpertise' | 'education';

const ALL_SECTIONS: SectionId[] = ['header', 'summary', 'experience', 'otherProjects', 'skills', 'springExpertise', 'education'];

export default function CvPage() {
  const { t } = useLanguage();
  const [included, setIncluded] = useState<Record<SectionId, boolean>>(() =>
    ALL_SECTIONS.reduce((acc, id) => ({ ...acc, [id]: true }), {} as Record<SectionId, boolean>)
  );
  const [expIncluded, setExpIncluded] = useState<boolean[]>([]);
  const [otherIncluded, setOtherIncluded] = useState<boolean[]>([]);
  const [headerMinimized, setHeaderMinimized] = useState(false);

  // Force light mode + white body on this tab only (bypass next-themes to avoid cross-tab sync).
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const hadDark = root.classList.contains('dark');
    const prevBodyStyle = body.getAttribute('style') ?? '';
    root.classList.remove('dark');
    root.classList.add('light');
    body.removeAttribute('style');
    body.style.backgroundColor = '#ffffff';
    return () => {
      root.classList.remove('light');
      if (hadDark) root.classList.add('dark');
      if (prevBodyStyle) body.setAttribute('style', prevBodyStyle);
      else body.removeAttribute('style');
    };
  }, []);

  const experiences = getExperiences(t);
  const otherProjects = getOtherProjects(t);
  const education = getEducation(t);

  // Lazy-init per-entry toggles once data is known.
  if (expIncluded.length !== experiences.length) {
    setExpIncluded(experiences.map(() => true));
  }
  if (otherIncluded.length !== otherProjects.length) {
    setOtherIncluded(otherProjects.map(() => true));
  }

  const toggleExp = (i: number) =>
    setExpIncluded((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  const toggleOther = (i: number) =>
    setOtherIncluded((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const toggle = (id: SectionId) => setIncluded((prev) => ({ ...prev, [id]: !prev[id] }));
  const handlePrint = () => window.print();

  const sectionClass = (id: SectionId, base: string) =>
    `${base}${included[id] ? '' : ' cv-section-excluded'}`;

  const ToggleBtn = ({ id }: { id: SectionId }) => (
    <button
      onClick={() => toggle(id)}
      className={`cv-no-print cv-section-toggle inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-semibold shadow-sm transition-colors ${
        included[id]
          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
          : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
      }`}
      title={included[id] ? t('cv.exclude') : t('cv.include')}
      type="button"
    >
      {included[id] ? <Eye size={12} /> : <EyeOff size={12} />}
      {included[id] ? t('cv.exclude') : t('cv.include')}
    </button>
  );

  const EntryToggleBtn = ({ on, onClick }: { on: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`cv-no-print cv-section-toggle inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10.5px] font-semibold shadow-sm transition-colors ${
        on
          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
          : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
      }`}
      title={on ? t('cv.exclude') : t('cv.include')}
      type="button"
    >
      {on ? <Eye size={11} /> : <EyeOff size={11} />}
      {on ? t('cv.exclude') : t('cv.include')}
    </button>
  );

  return (
    <div className="cv-page light min-h-screen bg-white text-slate-900">
      {/* Screen-only toolbar */}
      <div className="cv-no-print cv-no-justify sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            {t('cv.back')}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:from-cyan-700 hover:to-purple-700"
            >
              <Printer size={16} />
              {t('cv.print')}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-8 py-10 print:px-0 print:py-0">
        {/* Header */}
        <header className={sectionClass('header', 'cv-header cv-section mb-6')}>
          <div className="cv-no-justify mb-2 flex items-center justify-end gap-2">
            <button
              onClick={() => setHeaderMinimized((v) => !v)}
              className="cv-no-print cv-section-toggle inline-flex items-center gap-1 rounded-md bg-indigo-100 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-200"
              type="button"
            >
              {headerMinimized ? <Maximize2 size={12} /> : <Minimize2 size={12} />}
              {headerMinimized ? t('cv.expand') : t('cv.minimize')}
            </button>
            <ToggleBtn id="header" />
          </div>
          {headerMinimized ? (
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Stefania I.</h1>
              <p className="mt-1 text-base text-slate-700">{t('hero.role')}</p>
            </div>
          ) : (
            <div className="flex items-start gap-5">
              <img
                src="https://assets.izzonline.it/images/stefy.png"
                alt="Stefania Izzo"
                width={96}
                height={96}
                className="cv-photo h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-slate-300"
              />
              <div className="min-w-0 grow">
                <h1 className="text-3xl font-bold tracking-tight">Stefania Izzo</h1>
                <p className="mt-1 text-base text-slate-700">{t('hero.role')}</p>

                <div className="cv-no-justify mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-slate-700 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="shrink-0 text-slate-500" />
                    <a href="mailto:izzonline@gmail.com">izzonline@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="shrink-0 text-slate-500" />
                    <a href="tel:+393391876363">+39 339 187 63 63</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-slate-500" />
                    <span>Cologno Al Serio (BG), Italy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="shrink-0 text-slate-500" />
                    <a href="https://izzonline.it" target="_blank" rel="noopener noreferrer">izzonline.it</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin size={14} className="shrink-0 text-slate-500" />
                    <a href="https://www.linkedin.com/in/st3fania/" target="_blank" rel="noopener noreferrer">linkedin.com/in/st3fania</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github size={14} className="shrink-0 text-slate-500" />
                    <a href="https://github.com/IzzOnLineV2" target="_blank" rel="noopener noreferrer">github.com/IzzOnLineV2</a>
                  </div>
                </div>
              </div>
              <img
                src="https://assets.smartapibox.com/QR/IzzOnLine.svg"
                alt={t('contact.qr.alt')}
                width={96}
                height={96}
                className="cv-qr h-24 w-24 shrink-0 rounded-md bg-white p-1 ring-1 ring-slate-300"
              />
            </div>
          )}
        </header>

        {/* Summary */}
        <section className={sectionClass('summary', 'cv-section mb-6')}>
          <div className="cv-no-justify flex items-center justify-between gap-4">
            <h2 className="mb-2 grow border-b border-slate-300 pb-1 text-base font-semibold uppercase tracking-wider text-slate-900">
              {t('cv.summary')}
            </h2>
            <ToggleBtn id="summary" />
          </div>
          <p className="text-sm leading-relaxed text-slate-700">{t('summary.content')}</p>
        </section>

        {/* Experience */}
        <section className={sectionClass('experience', 'cv-section mb-6')}>
          <div className="cv-no-justify flex items-center justify-between gap-4">
            <h2 className="mb-3 grow border-b border-slate-300 pb-1 text-base font-semibold uppercase tracking-wider text-slate-900">
              {t('cv.experience')}
            </h2>
            <ToggleBtn id="experience" />
          </div>
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <article key={i} className={`cv-entry${expIncluded[i] === false ? ' cv-section-excluded' : ''}`}>
                <div className="cv-no-justify flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {exp.role} <span className="font-normal text-slate-700">— {exp.company}</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{exp.period} · {exp.location}</span>
                    <EntryToggleBtn on={expIncluded[i] !== false} onClick={() => toggleExp(i)} />
                  </div>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{exp.description}</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="mt-[3px] shrink-0 text-slate-400">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="cv-no-justify mt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="cv-chip rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10.5px] text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className={sectionClass('otherProjects', 'cv-section mb-6')}>
          <div className="cv-no-justify flex items-center justify-between gap-4">
            <h2 className="mb-3 grow border-b border-slate-300 pb-1 text-base font-semibold uppercase tracking-wider text-slate-900">
              {t('cv.otherProjects')}
            </h2>
            <ToggleBtn id="otherProjects" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {otherProjects.map((p, i) => (
              <article key={i} className={`cv-entry${otherIncluded[i] === false ? ' cv-section-excluded' : ''}`}>
                <div className="cv-no-justify flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900">{p.company}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{p.period}</span>
                    <EntryToggleBtn on={otherIncluded[i] !== false} onClick={() => toggleOther(i)} />
                  </div>
                </div>
                <p className="mt-0.5 text-sm text-slate-700">{p.description}</p>
                <div className="cv-no-justify mt-1.5 flex flex-wrap gap-1">
                  {p.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="cv-chip rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10.5px] text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={sectionClass('skills', 'cv-section mb-6')}>
          <div className="cv-no-justify flex items-center justify-between gap-4">
            <h2 className="mb-3 grow border-b border-slate-300 pb-1 text-base font-semibold uppercase tracking-wider text-slate-900">
              {t('cv.skills')}
            </h2>
            <ToggleBtn id="skills" />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {skillCategoriesData.map((cat) => (
              <div key={cat.id} className="cv-entry text-sm">
                <h3 className="text-sm font-semibold text-slate-900">{t(cat.titleKey)}</h3>
                <p className="text-slate-700">{cat.skills.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spring expertise */}
        <section className={sectionClass('springExpertise', 'cv-section mb-6')}>
          <div className="cv-no-justify flex items-center justify-between gap-4">
            <h2 className="mb-2 grow border-b border-slate-300 pb-1 text-base font-semibold uppercase tracking-wider text-slate-900">
              {t('cv.springExpertise')}
            </h2>
            <ToggleBtn id="springExpertise" />
          </div>
          <p className="text-sm text-slate-700">{SPRING_EXPERTISE.join(' · ')}</p>
        </section>

        {/* Education */}
        <section className={sectionClass('education', 'cv-section mb-6')}>
          <div className="cv-no-justify flex items-center justify-between gap-4">
            <h2 className="mb-2 grow border-b border-slate-300 pb-1 text-base font-semibold uppercase tracking-wider text-slate-900">
              {t('cv.education')}
            </h2>
            <ToggleBtn id="education" />
          </div>
          <ul className="cv-no-justify space-y-1 text-sm">
            {education.map((e, i) => (
              <li key={i} className="flex justify-between gap-4">
                <span className="font-semibold text-slate-900">{e.school}</span>
                <span className="text-slate-700">{e.degree}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
