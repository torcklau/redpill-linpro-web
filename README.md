# Redpill Linpro Showcase

Modulær React + TypeScript-applikasjon for Redpill Linpros showcase-nettsted.

## Komme i gang

### Forutsetninger

- **Node.js 20+** ([nodejs.org](https://nodejs.org))
- **Git** ([git-scm.com](https://git-scm.com))
- En kode-editor — anbefalt: [VS Code](https://code.visualstudio.com)

### Installasjon

```bash
# 1. Klon repoet (eller pakk ut zip-filen)
git clone https://github.com/torcklau/redpill-linpro-web.git
cd redpill-linpro-web

# 2. Installer dependencies (kun første gang)
npm install

# 3. Start utviklingsserveren
npm run dev
```

Siden åpnes på **http://localhost:5173** (URL-en vises i terminalen).
Endringer i koden reflekteres umiddelbart i nettleseren.

## Scripts

| Kommando | Hva den gjør |
|---|---|
| `npm run dev` | Starter utviklingsserveren med live-reload |
| `npm run build` | Bygger en produksjons-klar versjon i `dist/`-mappen |
| `npm run preview` | Forhåndsviser den ferdig bygde versjonen lokalt |
| `npm run typecheck` | Sjekker at TypeScript-typene er gyldige |
| `npm run lint` | Kjører ESLint og rapporterer kodekvalitet-problemer |
| `npm run lint:fix` | Fikser ESLint-problemer automatisk der det er mulig |
| `npm run format` | Formaterer koden med Prettier |
| `npm run test` | Kjører tester én gang |
| `npm run test:watch` | Kjører tester i watch-modus |
| `npm run validate` | Kjører typecheck + lint + test — bruk før commit |

## Prosjektstruktur

```
redpill-linpro-web/
├── .github/workflows/    CI-pipelines som kjøres på GitHub
├── public/               Statiske filer (favicon, bilder)
├── src/
│   ├── pages/            En fil per side i applikasjonen
│   │   ├── HomePage.tsx
│   │   ├── TjenesterPage.tsx
│   │   ├── BeredskapPage.tsx
│   │   └── SovereignScalePage.tsx
│   ├── __tests__/        Tester
│   ├── App.tsx           Applikasjons-shell med side-routing
│   ├── main.tsx          React mount-punkt
│   ├── shared.tsx        Delte komponenter (Navbar, Footer) og statiske data
│   ├── types.ts          Sentrale TypeScript-typer
│   └── index.css         Global CSS + Tailwind-import
├── index.html            HTML entry point
├── package.json          Dependencies og scripts
└── vite.config.ts        Vite-konfigurasjon
```

## Arbeidsflyt for endringer

### Gjør en endring

1. Start utviklingsserveren: `npm run dev`
2. Åpne prosjektet i VS Code
3. Endre en fil — siden oppdateres automatisk i nettleseren
4. Lagre filen (Ctrl+S)

### Før du committer

Kjør valideringssjekker for å fange feil tidlig:

```bash
npm run validate
```

Dette kjører:
- TypeScript-typesjekk
- ESLint
- Tester

Hvis alt passerer, kan du committe trygt:

```bash
git add .
git commit -m "Beskriv hva du endret"
git push
```

GitHub Actions kjører samme sjekk automatisk på hver push, så hvis noe glapp lokalt blir det fanget der.

### Deployment

Når koden pushes til `main`-branchen og CI passerer, vil Vercel automatisk deploye en ny versjon av siden. Du trenger ikke gjøre noe ekstra.

## Teknologi-stack

- **[Vite](https://vite.dev)** – byggeverktøy
- **[React 19](https://react.dev)** – UI-bibliotek
- **[TypeScript](https://www.typescriptlang.org)** – typesikkerhet
- **[Tailwind CSS v4](https://tailwindcss.com)** – styling
- **[Lucide React](https://lucide.dev)** – ikoner
- **[Vitest](https://vitest.dev)** – testing
- **[ESLint](https://eslint.org)** + **[Prettier](https://prettier.io)** – kodekvalitet
