# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages for free hosting.

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Ensure Git is installed on your system
3. **Repository Ready**: Your portfolio code should be in a GitHub repository

## 🔧 Setup Steps

### 1. Create GitHub Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Create repository on GitHub (replace 'yourusername' with your GitHub username)
# Repository name should be 'portfolio' to match the configuration

# Add remote origin
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### 3. Update Repository Name (if different)

If your repository name is NOT 'portfolio', update the configuration:

**In `next.config.ts`:**
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

**In `package.json`:**
```json
"homepage": "https://yourusername.github.io/your-repo-name",
```

## 🚀 Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The GitHub Actions workflow will automatically deploy your site when you push to the main branch.

```bash
# Make changes to your portfolio
git add .
git commit -m "Update portfolio"
git push origin main

# GitHub Actions will automatically build and deploy
```

### Method 2: Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

## 🌐 Accessing Your Site

After successful deployment, your portfolio will be available at:
```
https://yourusername.github.io/portfolio
```

## 🔍 Troubleshooting

### Common Issues:

1. **404 Error**: 
   - Check that repository name matches basePath in config
   - Ensure GitHub Pages is enabled in repository settings

2. **CSS/JS Not Loading**:
   - Verify assetPrefix is correctly set
   - Check that .nojekyll file exists in public folder

3. **Build Fails**:
   - Check GitHub Actions logs in the Actions tab
   - Ensure all dependencies are listed in package.json

4. **Images Not Displaying**:
   - Use relative paths for images
   - Place images in the `public` folder

### Checking Deployment Status:

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Check the latest workflow run
4. Green checkmark = successful deployment
5. Red X = failed deployment (click to see error logs)

## 🎯 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📱 Mobile Testing

Test your deployed site on various devices:
- Desktop browsers
- Mobile devices
- Tablet devices

## 🔄 Updating Your Portfolio

To update your portfolio:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push changes
4. GitHub Actions will automatically redeploy

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

## 📊 Analytics (Optional)

Add Google Analytics or other tracking:

1. Get tracking ID from analytics provider
2. Add tracking code to your layout component
3. Deploy changes

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] GitHub Pages enabled in settings
- [ ] Repository name matches configuration
- [ ] .nojekyll file in public folder
- [ ] GitHub Actions workflow file present
- [ ] All dependencies in package.json
- [ ] Site builds successfully locally
- [ ] Images and assets load correctly
- [ ] Mobile responsive design tested
- [ ] All links work properly
- [ ] SEO meta tags configured

## 🎉 Success!

Your portfolio should now be live at `https://yourusername.github.io/portfolio`

Share your portfolio URL with potential employers and on your social media profiles!

---

**Need Help?**
- Check GitHub Actions logs for build errors
- Verify all file paths are correct
- Ensure repository settings are configured properly
