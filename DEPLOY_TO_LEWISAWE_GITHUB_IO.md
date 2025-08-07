# 🚀 Deploy to lewisawe.github.io

This guide will help you deploy your portfolio to your GitHub Pages site at `https://lewisawe.github.io`.

## ✅ **Pre-configured for lewisawe.github.io**

Your portfolio is already configured for deployment to:
- **Repository**: `https://github.com/lewisawe/lewisawe.github.io`
- **Live URL**: `https://lewisawe.github.io`

## 🚀 **Quick Deployment**

### Option 1: Automated Script (Recommended)

```bash
# Run the deployment script
./deploy-to-github.sh
```

This script will:
- Build your portfolio for production
- Initialize git (if needed)
- Set the correct remote repository
- Commit and push your changes
- Trigger automatic GitHub Pages deployment

### Option 2: Manual Deployment

```bash
# 1. Build the project
npm run build

# 2. Initialize git (if not already done)
git init

# 3. Add remote repository
git remote add origin https://github.com/lewisawe/lewisawe.github.io.git

# 4. Add and commit files
git add .
git commit -m "Deploy portfolio to GitHub Pages"

# 5. Push to GitHub
git push origin main
```

## 🔧 **GitHub Repository Setup**

1. **Repository exists**: `lewisawe.github.io` should already exist on GitHub
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Set Source to "GitHub Actions"
   - The workflow will handle the rest

## ⏱️ **Deployment Timeline**

1. **Push to GitHub**: Immediate
2. **GitHub Actions Build**: 2-3 minutes
3. **Site Live**: 2-5 minutes total

## 🌐 **Access Your Site**

After successful deployment:
- **Primary URL**: https://lewisawe.github.io
- **Status Check**: https://github.com/lewisawe/lewisawe.github.io/actions

## 🔍 **Monitoring Deployment**

1. Go to https://github.com/lewisawe/lewisawe.github.io
2. Click the **Actions** tab
3. Watch the latest workflow run
4. ✅ Green checkmark = successful deployment
5. ❌ Red X = failed deployment (click for logs)

## 🛠️ **Troubleshooting**

### Common Issues:

**Build Fails:**
- Check GitHub Actions logs
- Ensure all dependencies are in package.json
- Verify no TypeScript errors locally

**Site Not Loading:**
- Wait 5-10 minutes for DNS propagation
- Check GitHub Pages settings
- Verify .nojekyll file exists

**Assets Not Loading:**
- Configuration is set for root domain (no basePath)
- All assets should load from root

**Permission Denied:**
- Ensure you have push access to lewisawe.github.io
- Check GitHub authentication

## 🔄 **Updating Your Portfolio**

To update your live site:

```bash
# Make your changes
# Then run deployment script
./deploy-to-github.sh
```

Or manually:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## 📱 **Testing Before Deployment**

```bash
# Test locally
npm run dev

# Test production build
npm run build
npm run start
```

## ✅ **Deployment Checklist**

- [ ] Portfolio builds successfully (`npm run build`)
- [ ] All personal information updated
- [ ] GitHub repository `lewisawe.github.io` exists
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] All links and images work locally
- [ ] Mobile responsiveness tested
- [ ] SEO meta tags configured

## 🎉 **Success!**

Your portfolio will be live at:
**https://lewisawe.github.io**

This is your primary GitHub Pages site - perfect for showcasing your DevOps expertise to potential employers!

---

**Need Help?**
- Check GitHub Actions logs for detailed error messages
- Ensure repository permissions are correct
- Verify all file paths are relative and correct
