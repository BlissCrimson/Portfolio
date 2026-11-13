# simple-icons API-Notizen

Stand: 2026-11-13. Quelle: lokal `node_modules/simple-icons` (Version 16.37.0, Lizenz CC0-1.0). Online-Quellen (simpleicons.org, GitHub) nicht benötigt, da lokal vollständig.

## Endpoint / Zugriff

- Kein HTTP-Endpoint. Zugriff als Named Export aus dem Paket `simple-icons`.
- Schema: `siXxx`, Xxx = Titel ohne Leerzeichen/Sonderzeichen, Anfangsbuchstabe groß (Beispiel: `siTypescript`, `siNodedotjs`).
- Paket-Entry: `index.mjs` (ESM), `index.js` (CJS), Typen `index.d.ts`. Zusätzlich Subpath `./icons` vorhanden.
- Daten: `data/simple-icons.json` (Metadaten), `icons/*.svg` (Einzeldateien, 3470 Stück).

## Parameter (Felder des Icon-Objekts)

Typ `SimpleIcon` laut `types.d.ts`:

- `title`: string, Anzeigename (z. B. "Node.js")
- `slug`: string, URL-freundlicher Bezeichner (z. B. "nodedotjs")
- `hex`: string, Markenfarbe ohne `#` (z. B. "5FA04E")
- `path`: string, SVG-Pfad-Daten (d-Attribut), 24x24 viewBox
- `svg`: string, vollständiges SVG-Markup inklusive `<title>`
- `source`: string, URL der Logo-Quelle
- `guidelines`: string, optional, Marken-Richtlinien-URL
- `license`: optional, Lizenzobjekt (nur wenn abweichend von CC0-1.0)

## Response-Beispiel (`siTypescript`)

```json
{
  "title": "TypeScript",
  "slug": "typescript",
  "hex": "3178C6",
  "source": "https://www.typescriptlang.org/branding",
  "path": "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75...",
  "svg": "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>TypeScript</title><path d=\"M1.125 0C...\"/></svg>"
}
```

(`path` und `svg` gekürzt.)

## Gesamtanzahl

- 3470 Icons (Named Exports in `index.d.ts`, Einträge in `data/simple-icons.json`, SVG-Dateien in `icons/`; alle drei Zahlen stimmen überein).

## Prüfliste Projekt-Tech-Stack

| Technologie | Status | Export-Name | Titel / Hex |
|---|---|---|---|
| TypeScript | verfügbar | `siTypescript` | TypeScript / 3178C6 |
| JavaScript | verfügbar | `siJavascript` | JavaScript / F7DF1E |
| HTML5 | verfügbar | `siHtml5` | HTML5 / E34F26 |
| CSS3 | nur als `CSS` verfügbar | `siCss` | CSS / 663399 (kein eigener Eintrag "CSS3") |
| Sass/SCSS | verfügbar (Sass) | `siSass` | Sass / CC6699 (kein eigenes SCSS-Icon) |
| Vite | verfügbar | `siVite` | Vite / 9135FF |
| Angular | verfügbar | `siAngular` | Angular / 0F0F11 |
| pnpm | verfügbar | `siPnpm` | pnpm / F69220 |
| npm | verfügbar | `siNpm` | npm / CB3837 |
| Node.js | verfügbar | `siNodedotjs` | Node.js / 5FA04E |
| Git | verfügbar | `siGit` | Git / F03C2E |
| GitHub | verfügbar | `siGithub` | GitHub / 181717 |
| GitHub Actions | verfügbar | `siGithubactions` | GitHub Actions / 2088FF |
| OpenAPI | nur als "OpenAPI Initiative" verfügbar | `siOpenapiinitiative` | OpenAPI Initiative / 6BA539 |
| Scrum | nur als "Scrum Alliance" verfügbar | `siScrumalliance` | Scrum Alliance / 009FDA (Verbandslogo, kein generisches Scrum-Icon) |
| Figma | verfügbar | `siFigma` | Figma / F24E1E |
| VS Code | nicht verfügbar | — | kein Eintrag (weder "Visual Studio Code" noch "VS Code") |
| LinkedIn | nicht verfügbar | — | kein Eintrag |
| Xing | verfügbar | `siXing` | Xing / 006567 |

Zusammenfassung: 19 geprüfte Einträge. 17 verfügbar, davon 3 nur als Alternative (CSS3 als `siCss`, OpenAPI als `siOpenapiinitiative`, Scrum als `siScrumalliance`). Nicht verfügbar: VS Code, LinkedIn.

## Einbindung

Prüfstand: lokal `node_modules/simple-icons/package.json` (16.37.0, Lizenz CC0-1.0), `types.d.ts`, `index.d.ts`, `data/simple-icons.d.ts`, lokales `README.md` sowie das README und die DISCLAIMER.md des Repos simple-icons/simple-icons (GitHub, master).

### 1) Import-Varianten

- Named Export pro Icon: `siXxx` aus `simple-icons` (ESM per `import`, CJS per `require`, laut README).
- Tree-Shaking: Bei ESM-Import entfernt ein Bundler ungenutzte Icons. Empfehlung laut README. `package.json` setzt `sideEffects: false`.
- `import * as icons from 'simple-icons'` lädt den vollständigen Namespace (laut README zum Iterieren über alle Icons).
- Exports-Map in `package.json`: Root `.` mit `import` = `index.mjs`, `require` = `index.js`, `types` = `index.d.ts`. Subpath `./icons` mit `index-icons.mjs` / `index-icons.js`. Weitere Subpaths: `./sdk`, `./icons.json` (auf `data/simple-icons.json`), `./icons/*` (einzelne SVG-Dateien). Inhalt von `./icons` und `./sdk` wurde nicht geprüft.
- Typen: `index.d.ts` deklariert alle Named Exports vom Typ `SimpleIcon`. Typimport laut README: `import type {SimpleIcon} from 'simple-icons'`.

### 2) Felder des Icon-Objekts

- `title` (string, Pflicht): Anzeigename.
- `slug` (string, Pflicht): URL-Bezeichner.
- `hex` (string, Pflicht): Markenfarbe ohne führendes `#`.
- `source` (string, Pflicht): URL der Logo-Quelle.
- `svg` (string, Pflicht): vollständiges SVG-Markup mit `role="img"`, `viewBox="0 0 24 24"` und `<title>`.
- `path` (string, Pflicht): d-Daten des Pfads, 24x24 viewBox.
- `guidelines` (string, optional): Markenrichtlinien-URL. Ist `undefined`, wenn keine Richtlinien hinterlegt sind.
- `license` (optional): SPDX-Objekt `{type, url}` oder `{type: 'custom', url}`. Ist `undefined`, wenn keine Lizenzdaten vorliegen.

### 3) Einbindung in Angular

- Das Icon-Objekt wird als Property der Komponente gehalten (Import aus `simple-icons`, Typ `SimpleIcon`).
- Variante A, SVG-String: Das Feld `svg` wird per `innerHTML`-Bindung ausgegeben. Angular sanitisiert `innerHTML`-Bindungen. Bei SVG-Markup kann der Sanitizer Elemente entfernen. Abhilfe ist `DomSanitizer` mit `bypassSecurityTrustHtml`. Die Quelle ist ein statischer Wert aus dem Paket. Die Wirkung im Projekt wurde nicht getestet.
- Variante B, svg-Element: Im Template ein `svg`-Element mit `viewBox="0 0 24 24"` und einem `path`-Kindelement. Das `d`-Attribut wird aus dem Feld `path` per Attributbindung (`attr.d`) gesetzt. Kein `innerHTML`, daher kein Sanitizer-Bedarf. Der `<title>` aus `svg` entfällt in dieser Variante und muss ggf. separat gesetzt werden.

### 4) Farbe

- `hex` enthält keinen `#`. Für CSS muss `#` vorangestellt werden.
- Monochrom ist möglich über `fill="currentColor"` am `svg`/`path` und Steuerung über CSS-`color`. Ob das Original-Markup bereits ein `fill`-Attribut enthält, wurde nicht geprüft.
- CDN-Farbangabe laut README: Hex oder CSS-Keyword, Standard ist der Wert von `hex`. Dunkelmodus per zweitem Farbwert. Gilt nur für den CDN-Dienst, nicht für das npm-Paket.

### 5) Barrierefreiheit

- Das SVG-Markup enthält `role="img"` und `<title>`.
- Informative Icons: `role="img"` plus `aria-label` oder `<title>` mit dem Markennamen.
- Dekorative Icons, etwa neben sichtbarem Text: `aria-hidden="true"`, ohne `title`. Vermeidet doppelte Ansage.
- Quelle für die Attribute ist das Markup laut `types.d.ts` und README. Die ARIA-Regeln sind Standardpraxis (WAI-ARIA).

### 6) Eigene Icons für fehlende Marken (LinkedIn, VS Code)

- Stand 16.37.0 nicht im Paket: Grep auf `index.d.ts` findet weder `siLinkedin` noch `siVscode` oder `siVisualstudiocode`. Die Angular-Komponente `siAngular` ist vorhanden.
- Pflichtfelder für ein SimpleIcon-kompatibles Objekt laut `types.d.ts`: `title`, `slug`, `svg`, `path`, `source`, `hex`.
- Optionale Felder: `guidelines`, `license`.
- Das Projekt hat bereits ein LinkedIn-Objekt im Footer (laut `logs/debug.log`, Eintrag 2026-08-27).

### 7) Lizenz und Markenhinweis

- `package.json`: Lizenz CC0-1.0.
- DISCLAIMER.md (Repo): Simple Icons selbst steht unter CC0. Das gilt nicht automatisch für alle enthaltenen Icons, dafür gelten die jeweiligen Lizenzen. Fehlende Lizenzangaben bedeuten nicht, dass ein Icon lizenzfrei ist.
- Marken können eingetragene Marken (®) oder Markenzeichen (™) sein. Die Marken bleiben Eigentum der jeweiligen Inhaber.
- Die Nutzung ist vom Projekt aus zu klären. Die Verantwortung für nötige Genehmigungen liegt beim Nutzer. Simple Icons übernimmt keine Haftung für rechtliche Schritte.
- Markenrichtlinien: Das Feld `guidelines` verlinkt sie, wo vorhanden. Fehlt der Link, können trotzdem Richtlinien existieren. Die `source`-URL kann Hinweise liefern.
- README: Vor Nutzung soll das Disclaimer gelesen werden.
