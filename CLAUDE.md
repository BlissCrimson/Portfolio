# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Was das ist

Das ist ein Portfolio welches zum Darstellen eines Developper dient. Es sit dafür gedacht Recruiter und Kunden auf einen aufmerksam zu machen.

## Tech Stack

### Frontend

- Angular (Standalone Components, Signals, Router)
- TypeScript
- SCSS
- pnpm (Version 11, siehe `packageManager` in `package.json`)
- Tests: Vitest über `ng test` (`@angular/build:unit-test`)
- Formatierung: Prettier (`.prettierrc`)

### Deployment

- GitHub Actions (`.github/workflows/main.yml`): bei Push auf `master` installieren, bauen und per FTPS deployen (`dist/Portfolio/browser/`).
- Kontaktformular: `public/contact_form_mail.php` (PHP-Skript auf dem Hosting).

## Befehle

- `pnpm start` — Dev-Server starten (`ng serve`)
- `pnpm build` — Production-Build nach `dist/Portfolio/browser/`
- `pnpm watch` — Development-Build im Watch-Modus
- `pnpm test` — Unit-Tests (Vitest über `ng test`)

## Architektur

- Einstiegspunkt ist `src/index.html` → `src/main.ts` → Root-Komponente `src/app/app.ts` (Konfiguration in `app.config.ts`, Routen in `app.routes.ts`).
- Routen: `''` (Home), `imprint`, `privacy`, `**` (404). Beim Aktivieren einer Seite wird in `app.ts` nach oben gescrollt.
- `src/app/layout/`: Header, Navbar (Seitenleiste bzw. mobiles Overlay), Footer und `social-links.ts` (gemeinsame Social-Daten für Header/Footer).
- `src/app/pages/`:
  - `home/` besteht aus Panels (`hero`, `why-me`, `tech-stack`, `projects`, `reviews`, `contact`). `home.ts` steuert das horizontale Scrollen (ein Mausrad-Schritt = ein Panel, Pfeiltasten, Fragment-Sprünge).
  - `imprint/`, `privacy/`, `page-404/` (nutzt die Styles von `imprint.scss`).
- `src/app/shared/`:
  - `services/translation.ts` — Sprachwechsel DE/EN über Signals, Auswahl in `localStorage`, setzt das `lang`-Attribut.
  - `services/dictionaries.ts` — alle Texte (DE/EN) zentral. Neue Texte hier für beide Sprachen ergänzen, nicht in Templates hardcoden.
  - `components/` — wiederverwendbare Komponenten (z. B. `arrow`).
- Projekt-Daten stehen in `pages/home/projects/projects.ts`.
- Statische Dateien liegen in `public/` (`assets/img`, Schriften usw.). `docs/` enthält Design-Vorlagen und Notizen, keinen App-Code.
- Globale Styles: `src/styles.scss` → `src/styles/main.scss`, das über `@use` diese Ordner einbindet: `themes/`, `abstract/`, `base/`, `components/`, `layout/`, `vendor/` und `style.scss`.
  - `abstract/_indexAbstract.scss` leitet `_functions.scss` und `_mixin.scss` per `@forward` weiter (Breakpoints und `respond`-Mixins).
  - Farben/Theming laufen über CSS-Custom-Properties (`themes/_colors.scss`).
  - Komponentenstyles liegen als `.scss` neben der Komponente (Budget: Warnung ab 4 kB, Fehler ab 8 kB pro Komponente).
- TypeScript: `tsconfig.app.json` für die App, `tsconfig.spec.json` für Tests.

## Konventionen

- Kommentare auf Englisch
- Variablen auf Englisch camelCase

## Regeln

- Installiere keine npm oder pnpm packages selber
- Jede Änderung in logs/debug.log dokumentieren
- Keine neuen Dateien ohne Rückfrage anlegen
- Build-Skripte von Abhängigkeiten werden in `pnpm-workspace.yaml` unter `allowBuilds` freigegeben (pnpm 11 bricht sonst ab)

## Verhalten

- Wenn Anforderungen unklar sind: nachfragen, nicht raten
- Lieber eine kurze Rückfrage als falsch umsetzen
- Bei größeren Aufgaben erst den Plan zeigen, dann umsetzen
