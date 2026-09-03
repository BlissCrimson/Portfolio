import { siGithub, type SimpleIcon } from "simple-icons";
import { renderSkillIcon } from "./skill-icon";

const linkedinIcon: SimpleIcon = {
  title: "LinkedIn",
  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.048c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.556V9h3.558v11.452z",
} as SimpleIcon;

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <a id="imprint" class="btn--neon"><span>Impressum</span></a>
      <div class="site-footer__socials">
        <a class="site-footer__social" href="https://github.com/BlissCrimson" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profil">
          ${renderSkillIcon(siGithub)}
        </a>
        <a class="site-footer__social" href="https://www.linkedin.com/in/matthias-tausch-641234364/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profil">
          ${renderSkillIcon(linkedinIcon)}
        </a>
      </div>
      <p class="site-footer__copyright">&copy; 2026 Matthias Tausch</p>
    </footer>`;
}
