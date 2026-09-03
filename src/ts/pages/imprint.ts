import { createErrorPage } from "./404";

export function createImprintPage() {
  const imprintRef = document.querySelector("#app");
  if (!imprintRef) return createErrorPage();
  imprintRef.innerHTML = `
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
    `;
}
