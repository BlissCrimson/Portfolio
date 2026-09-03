import { createErrorPage } from "./404";
import { initContactForm } from "../components/contact-form";
import { renderSkillIcon } from "../components/skill-icon";
import { renderFooter } from "../components/footer";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siSass,
  siVite,
  siFirebase,
  siSupabase,
  siGithub,
  siGit,
  siScrumalliance,
  siOpenapiinitiative,
  type SimpleIcon,
} from "simple-icons";

type Skill = { label: string; icon: SimpleIcon | null };

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Frontend",
    skills: [
      { label: "HTML", icon: siHtml5 },
      { label: "CSS", icon: siCss },
      { label: "Javascript", icon: siJavascript },
      { label: "Typescript", icon: siTypescript },
      { label: "SCSS", icon: siSass },
      { label: "Vite", icon: siVite },
    ],
  },
  {
    label: "Backend",
    skills: [
      { label: "Firebase", icon: siFirebase },
      { label: "Supabase", icon: siSupabase },
    ],
  },
  {
    label: "Tools",
    skills: [
      { label: "Github", icon: siGithub },
      { label: "Git", icon: siGit },
      { label: "Rest API", icon: siOpenapiinitiative },
      { label: "Scrum", icon: siScrumalliance },
    ],
  },
];

type Project = {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string;
  tech: Skill[];
};

const projects: Project[] = [
  {
    title: "Join",
    description:
      "Kanban-Board zur Aufgabenverwaltung mit Drag & Drop, Kontaktverwaltung und Login/Gastzugang, Daten werden über Firebase gespeichert.",
    repoUrl: "https://github.com/BlissCrimson/join",
    demoUrl: "https://join.matthias-tausch.com",
    tech: [
      { label: "HTML", icon: siHtml5 },
      { label: "CSS", icon: siCss },
      { label: "Javascript", icon: siJavascript },
      { label: "Firebase", icon: siFirebase },
    ],
  },
  {
    title: "El Pollo Loco",
    description:
      "2D-Jump-'n'-Run-Browsergame in Vanilla JavaScript mit Canvas-Rendering, Gegner-KI, Endgegner-Kampf und objektorientierter Spiellogik.",
    repoUrl: "https://github.com/BlissCrimson/EL_POLLO_LOCO",
    demoUrl: "https://elpolloloco.matthias-tausch.com",
    tech: [
      { label: "HTML", icon: siHtml5 },
      { label: "CSS", icon: siCss },
      { label: "Javascript", icon: siJavascript },
    ],
  },
  {
    title: "Pokedex",
    description:
      "Web-App zum Durchsuchen und Filtern von Pokémon, lädt Daten live über die PokéAPI und stellt Details in einer Kartenansicht dar.",
    repoUrl: "https://github.com/BlissCrimson/Pokedex",
    demoUrl: "https://pokedex.matthias-tausch.com",
    tech: [
      { label: "HTML", icon: siHtml5 },
      { label: "CSS", icon: siCss },
      { label: "Javascript", icon: siJavascript },
    ],
  },
];

function renderProjectCard(project: Project): string {
  const techIcons = project.tech
    .map(
      (skill) => `<span class="projects__tech-icon">${renderSkillIcon(skill.icon)}</span>`
    )
    .join("");

  return `
    <article class="projects__card">
      <h3>${project.title}</h3>
      <p class="text-muted">${project.description}</p>
      <div class="projects__tech">${techIcons}</div>
      <div class="projects__actions">
        <a class="btn--neon" href="${project.repoUrl}" target="_blank" rel="noopener noreferrer">
          <span>Auf GitHub ansehen</span>
        </a>
        <a class="btn--neon" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer">
          <span>Live ansehen</span>
        </a>
      </div>
    </article>`;
}

function renderSkillGroup(group: { label: string; skills: Skill[] }): string {
  const cards = group.skills
    .map(
      (skill) => `
        <div class="skill-card">
          ${renderSkillIcon(skill.icon)}
          <span>${skill.label}</span>
        </div>`
    )
    .join("");

  return `
    <div class="techstack__group">
      <p>${group.label}</p>
      <div class="techstack__grid">${cards}</div>
    </div>`;
}

export function createHomePage() {
  const homePageRef = document.querySelector("#app");
  if (!homePageRef) return createErrorPage();
  homePageRef.innerHTML = `
    <header class="site-header">
      <div class="site-header__start">
        <a class="site-header__logo" href="#top" aria-label="Matthias Tausch">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20,30 L20,75 M20,30 L45,58 L70,30 M70,30 L70,75 M58,30 L95,30" />
          </svg>
        </a>
        <span class="site-header__name heading">Matthias<br />Tausch</span>
      </div>
      <nav>
        <ul>
          <li><a class="btn--neon" href="#about"><span>About Me</span></a></li>
          <li><a class="btn--neon" href="#techstack"><span>Tech Stack</span></a></li>
          <li><a class="btn--neon" href="#projects"><span>Projekte</span></a></li>
          <li><a class="btn--neon" href="#contact"><span>Kontakt</span></a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="top" name="welcome" class="welcome">
        <span class="welcome__role heading">Frontend Developer</span>
        <span class="welcome__name heading">Matthias Tausch</span>
      </section>

      <section id="about" name="about" class="about">
        <h2 class="heading">About Me</h2>
        <p>
          Ich bin Frontend Developer mit Fokus auf moderne, performante und
          zugängliche Web-Anwendungen. Ich arbeite gerne mit TypeScript,
          durchdachten UI-Konzepten und sauberem, wartbarem Code – von der
          ersten Idee bis zum fertigen Interface.
        </p>
        <dl class="about__facts">
          <div class="about__fact">
            <dt>Name</dt>
            <dd>Matthias Tausch</dd>
          </div>
          <div class="about__fact">
            <dt>Rolle</dt>
            <dd>Frontend Developer</dd>
          </div>
          <div class="about__fact">
            <dt>Standort</dt>
            <dd>Husum</dd>
          </div>
        </dl>
      </section>

      <section id="techstack" name="techstack" class="techstack">
        <h2 class="heading">Tech Stack</h2>
        ${skillGroups.map(renderSkillGroup).join("")}
      </section>

      <section id="projects" name="projects" class="projects">
        <h2 class="heading">Projekte</h2>
        <div class="projects__grid">${projects.map(renderProjectCard).join("")}</div>
      </section>

      <section id="contact" name="contact" class="contact">
        <h2 class="heading">Kontakt</h2>
        <form id="contact-form" class="contact-form" novalidate>
          <div class="contact-form__field">
            <label for="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autocomplete="name" />
            <span class="contact-form__error" data-error-for="name"></span>
          </div>

          <div class="contact-form__field">
            <label for="contact-email">E-Mail</label>
            <input id="contact-email" name="email" type="email" autocomplete="email" />
            <span class="contact-form__error" data-error-for="email"></span>
          </div>

          <div class="contact-form__field">
            <label for="contact-message">Nachricht</label>
            <textarea id="contact-message" name="message" rows="5"></textarea>
            <span class="contact-form__error" data-error-for="message"></span>
          </div>

          <div class="contact-form__field">
            <div class="contact-form__checkbox">
              <input id="contact-privacy" name="privacy" type="checkbox" />
              <label for="contact-privacy">Ich stimme der Verarbeitung meiner Daten zur Kontaktaufnahme zu.</label>
            </div>
            <span class="contact-form__error" data-error-for="privacy"></span>
          </div>

          <button type="submit" class="btn--neon"><span>Senden</span></button>
        </form>
      </section>
    </main>

    ${renderFooter()}
    `;

  initContactForm();
}
