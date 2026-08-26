# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Was das ist

Das ist ein Portfolio welches zum Darstellen eines Developper dient. Es sit dafür gedacht Recruiter und Kunden auf einen aufmerksam zu machen.

## Tech Stack

### Frontend

- Vite
- TypeScript
- SCSS
- pnpm

## Befehle

- `pnpm dev` — Dev-Server starten
- `pnpm build` — Production-Build nach `dist/`
- `pnpm preview` — Production-Build lokal previewen
- `pnpm typecheck` — TypeScript-Typprüfung ohne Build (`tsc --noEmit`)

Es gibt aktuell kein funktionierendes Test-Setup (`pnpm test` ist ein Platzhalter ohne echte Tests).

## Architektur

- Einstiegspunkt ist `index.html` → lädt `src/ts/main.ts`, welches ausschließlich `src/styles/main.scss` importiert. Aktuell existiert keine JS/TS-Anwendungslogik, nur der Style-Import.
- SCSS ist über `@forward`/`@use`-Ketten strukturiert, nicht über direkte Imports:
  - `src/styles/main.scss` bindet `abstract/indexAbstract` (globale Variablen/Funktionen/Mixins) und danach `style.scss` (globale Basis-Styles) ein.
  - `abstract/indexAbstract.scss` ist der zentrale Sammelpunkt für `_colors.scss`, `_functions.scss` und `_mixin.scss` — neue globale Farben/Funktionen/Mixins werden dort ergänzt und über `indexAbstract` verfügbar gemacht.
  - `pages/_indexPages.scss` bündelt seitenspezifische Partials (aktuell `_home.scss`) und ist in `main.scss` noch auskommentiert, ebenso wie geplante, aber noch nicht angelegte Ordner (`base/`, `components/`, `layout/`, `themes/`, `vendor/`). Diese Struktur ist als 7-1-artiges Pattern angelegt, aber erst teilweise befüllt.
  - Farben/Theming laufen über CSS-Custom-Properties in `:root` (`_colors.scss`), nicht über SCSS-Variablen.
  - `_mixin.scss` definiert Breakpoints (`$breakpoints`) und darauf aufbauende `respond`/`respond-min`-Mixins für Media Queries.
- `tsconfig.json` prüft ausschließlich `src/` (`noEmit: true`, Build läuft über Vite/Rollup, nicht über `tsc`).

## Konventionen

- Kommentare auf Englisch
- Variablen auf Englisch camelCase

## Regeln

- Installiere keine npm oder pnpm packages selber
- Jede Änderung in logs/debug.log dokumentieren
- Keine neuen Dateien ohne Rückfrage anlegen

## Verhalten

- Wenn Anforderungen unklar sind: nachfragen, nicht raten
- Lieber eine kurze Rückfrage als falsch umsetzen
- Bei größeren Aufgaben erst den Plan zeigen, dann umsetzen
