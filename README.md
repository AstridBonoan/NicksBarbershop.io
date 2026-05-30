# Nick's Barbershop — Website Redesign

A modern, mobile-first website redesign for Nick's Barbershop in Queens, NY. Built with React, TypeScript, and Tailwind CSS.

**Live site:** [https://astridbonoan.github.io/NicksBarbershop.io/](https://astridbonoan.github.io/NicksBarbershop.io/)

## Features

- Mobile-first responsive design
- Multi-step booking flow
- Service cards with pricing and duration
- Barber team profiles with booking CTAs
- Filterable photo gallery
- Customer reviews and testimonials
- FAQ, gift cards, loyalty program, and promotions sections
- Interactive map and click-to-call
- Sticky mobile booking button
- SEO optimized with meta tags

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- GitHub Actions + GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

This project uses **GitHub Actions** to build and deploy to the **`gh-pages` branch**.

### GitHub Pages Setup (required once)

1. Go to your repo **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to `/ (root)`
4. Save

Every push to `main` triggers the workflow, which builds the site and pushes the output to `gh-pages`.

## Project Structure

```
src/
├── components/   # UI components
├── data/         # Static content (services, team, reviews, etc.)
├── hooks/        # Custom React hooks
├── App.tsx       # Main app layout
└── main.tsx      # Entry point
```
