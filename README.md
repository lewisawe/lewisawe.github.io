# Next.js Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach
- **Static Export**: Optimized for static hosting
- **SEO Optimized**: Meta tags and structured data

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build

```bash
npm run build
```

## Deployment

This portfolio is deployed to GitHub Pages for static hosting.

### GitHub Pages Deployment

The site automatically deploys via GitHub Actions when you push to the main branch.

**Live Site**: https://lewisawe.github.io

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

This script will:
1. Build the Next.js project
2. Add .nojekyll file to disable Jekyll processing
3. Deploy the `out/` directory to the gh-pages branch

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Builds the project on every push to main
2. Uploads the build artifacts
3. Deploys to GitHub Pages automatically

## Project Structure

```
├── src/
│   ├── app/           # App Router pages
│   ├── components/    # Reusable components
│   └── styles/        # Global styles
├── public/            # Static assets
├── out/              # Build output (generated)
├── .github/
│   └── workflows/    # GitHub Actions workflows
└── deploy-s3.sh      # Legacy S3 deployment script
```

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages
- **Build**: Static Export
- **CI/CD**: GitHub Actions

## License

MIT License
