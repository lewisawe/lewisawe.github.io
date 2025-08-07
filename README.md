# Lewis Sawe - DevOps Portfolio

A modern, terminal-inspired portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features 3D animations, interactive elements, and a unique GitHub contribution heatmap that spells "DevOps".

🌐 **Live Demo**: [https://lewisawe.github.io](https://lewisawe.github.io)

## 🚀 Features

- **Terminal Aesthetic**: Unique command-line inspired design with ASCII art headers
- **3D Floating Cards**: Interactive cards with depth and perspective transforms
- **DevOps GitHub Heatmap**: Creative contribution graph that spells "DevOps"
- **Interactive Timeline**: Expandable career progression with achievements
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Sound Effects**: Optional terminal-style audio feedback
- **Responsive Design**: Mobile-first approach with perfect cross-device experience
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom terminal theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: JetBrains Mono (Google Fonts)
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Quick Start

```bash
# Clone and install
git clone https://github.com/lewisawe/portfolio.git
cd portfolio
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment Options

### GitHub Pages (Recommended - Free)

**Automatic Deployment:**
1. Clone this repository to your local machine
2. Update personal information in `src/app/page.tsx`
3. Run the deployment script: `./deploy-to-github.sh`
4. Your site will be live at `https://lewisawe.github.io`

**Quick Setup:**
```bash
git clone https://github.com/lewisawe/lewisawe.github.io.git
cd lewisawe.github.io
npm install
./deploy-to-github.sh
```

**Manual Setup:**
See [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) for detailed instructions.

### Alternative Deployments

**Vercel:**
```bash
npm i -g vercel
vercel
```

**AWS S3:**
```bash
# Update bucket name in deploy.sh
./deploy.sh
```

## 🎨 Key Components

### DevOps GitHub Heatmap
- Custom contribution pattern spelling "DevOps"
- Realistic GitHub-style visualization
- Interactive hover effects and tooltips

### 3D Floating Cards
- CSS transforms with perspective
- Hover animations with depth
- Gradient overlays and shadows

### Interactive Timeline
- Expandable career milestones
- Technology stack visualization
- Achievement highlights

### ASCII Art Headers
- Terminal-style section headers
- Custom border designs
- Consistent branding

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: ~46KB (optimized)
- **Load Time**: <2s on 3G
- **SEO**: Fully optimized meta tags

## 🔧 Customization

### Update Personal Information
Edit `src/app/page.tsx` to update:
- Personal details and bio
- Skills and technologies
- Projects and experience
- Social media links
- Contact information

### Modify GitHub Heatmap
Edit `src/components/GitHubHeatmap.tsx` to:
- Change the "DevOps" pattern to your name
- Adjust colors and intensity
- Modify contribution stats

### Update Colors
Modify CSS variables in `src/app/globals.css`:
```css
:root {
  --terminal-bg: #0a0a0a;
  --terminal-text: #00ff00;
  --terminal-link: #00ffff;
}
```

### Repository Configuration
If using a different repository name, update:
- `next.config.ts` - basePath and assetPrefix
- `package.json` - homepage URL
- `.github/workflows/deploy.yml` - if needed

## 📱 Mobile Features

- Touch-friendly interactions
- Responsive 3D effects
- Optimized typography
- Gesture support
- Mobile navigation

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Production Checklist

- [ ] Update personal information
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Validate HTML/CSS
- [ ] Test GitHub Pages deployment
- [ ] Configure custom domain (optional)
- [ ] Set up analytics (optional)

## 🤝 Contributing

Issues and pull requests are welcome! Please feel free to contribute.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🔗 Links

- **Live Site**: [https://lewisawe.github.io](https://lewisawe.github.io)
- **GitHub**: [https://github.com/lewisawe/lewisawe.github.io](https://github.com/lewisawe/lewisawe.github.io)
- **LinkedIn**: [https://linkedin.com/in/lewisawe](https://linkedin.com/in/lewisawe)

---

**Built with ❤️ by Lewis Sawe**  
*DevOps & Cloud Engineer*
