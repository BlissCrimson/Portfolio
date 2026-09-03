import { createErrorPage } from "./404";
import { renderFooter } from "../components/footer";

export function createImprintPage() {
  const imprintRef = document.querySelector("#app");
  if (!imprintRef) return createErrorPage();
  imprintRef.innerHTML = `
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
          <li><a class="btn--neon" href="/index.html#about"><span>About Me</span></a></li>
          <li><a class="btn--neon" href="/index.html#techstack"><span>Tech Stack</span></a></li>
          <li><a class="btn--neon" href="/index.html#projects"><span>Projekte</span></a></li>
          <li><a class="btn--neon" href="/index.html#contact"><span>Kontakt</span></a></li>
        </ul>
      </nav>
    </header>

    <div id='generator_results'>
      <div id='generator_results_content'>
        <h1>Impressum</h1>
        <h2>Verantwortliche(r)</h2>
        <p class='generator_user_input'>Matthias Tausch</p>
        <h3>Postanschrift</h3>
        <p class='generator_user_input'>Eikammsweg 10<br />
        25821 Breklum</p>
        <h3>Kontakt</h3>
        <p>E-Mail: matthias.tausch@matthias-tausch.com</p>
        <p>Telefon: 0049 170 3828724</p>
        <h2>Hinweise zur Website</h2>
        <h3>Urheberrechtliche Hinweise</h3>
        <p class='generator_user_input'>[Bitte Informationen ergänzen]</p>
        <h3>Verantwortlich für journalistisch-redaktionelle Inhalte</h3>
        <p class='generator_user_input'>[Bitte Informationen ergänzen]</p>
        <p><em>Dieses Impressum wurde mit Hilfe des <a href="https://www.activemind.de/generatoren/impressum/" target="_blank" rel="noopener">Impressums-Generators der activeMind AG</a> erstellt (Version 2024-07-21).</em></p>
      </div>
    </div>

    ${renderFooter()}
    `;
}
