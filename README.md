# PetCare

Modern landing page for an animal assistance foundation.
Built with React + TypeScript + Vite, with responsive layout, animated hero stats, and a polished adoption-kit slider.

## Live Concept
The project presents a charity-style product page with sections for:
- Hero and impact metrics
- About the foundation
- Rescue stories gallery
- Adoption kit slider
- Contact form

## Tech Stack
- `React 19`
- `TypeScript`
- `Vite`
- `SCSS`
- `Swiper` (slider)

## Key Features
- Responsive layout for desktop and mobile
- Animated counters in Hero section (custom hook + IntersectionObserver)
- Reusable constants for breakpoints/timings/section anchors
- i18n architecture with centralized text dictionary (currently English-only)
- Refactored hooks for UI behavior and form state
- Vercel-ready configuration (`vercel.json`)

## Project Structure
```text
src/
  assets/         # images/icons/items
  components/     # UI sections (Header, Hero, About, Gallery, GiftSlider, Contact)
  constants/      # magic numbers and shared config
  hooks/          # reusable hooks (header nav, animated stats, contact form)
  i18n/           # translation dictionary + provider
  App.tsx
  main.tsx
styles/
  style.scss      # global styles/design tokens
public/
  logo.svg
vercel.json
```

## Getting Started
### 1) Install dependencies
```bash
npm install
```

### 2) Run in development
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Preview production build
```bash
npm run preview
```

## Scripts
- `npm run dev` — start local dev server
- `npm run build` — create production build in `dist/`
- `npm run preview` — preview built app locally
- `npm run lint` / `npm run lint:fix` — lint commands (if ESLint config is present)
- `npm run prettier` / `npm run prettier:fix` — formatting checks/fixes

## Security
Dependencies were checked and fixed with `npm audit fix`.
Current audit status: `0 vulnerabilities`.

## Deployment (Vercel)
This repository includes `vercel.json` with:
- Vite framework preset
- build output set to `dist`
- SPA rewrite to `index.html`

Deploy options:
1. Import repo into Vercel UI
2. Or deploy with Vercel CLI

## Notes
- App text is centralized in `src/i18n/translations.ts`.
- Locale switching UI was removed; currently only `en` is active.
- Large PNG assets are intentionally kept as-is for design consistency.

## Future Improvements
- Add form backend integration (email/API endpoint)
- Add image optimization pipeline (`webp/avif` + responsive sources)
- Add tests (component + visual regression)
- Re-enable multilingual support with route- or user-preference-based locale
