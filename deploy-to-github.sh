#!/bin/bash

# Lewis Sawe Portfolio - Deploy to lewisawe.github.io
# This script deploys your portfolio to your GitHub Pages site

echo "🚀 Deploying Lewis Sawe Portfolio to GitHub Pages"
echo "================================================="
echo "Target: https://lewisawe.github.io"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    
    echo "🔗 Adding remote origin for lewisawe.github.io..."
    git remote add origin https://github.com/lewisawe/lewisawe.github.io.git
else
    # Check if the correct remote is set
    CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null)
    EXPECTED_REMOTE="https://github.com/lewisawe/lewisawe.github.io.git"
    
    if [ "$CURRENT_REMOTE" != "$EXPECTED_REMOTE" ]; then
        echo "🔄 Updating remote origin to lewisawe.github.io..."
        git remote set-url origin $EXPECTED_REMOTE
    fi
fi

echo "🏗️  Building portfolio for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if there are changes to commit
git add .

if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    echo "💬 Enter commit message (or press Enter for default):"
    read -r COMMIT_MSG
    COMMIT_MSG=${COMMIT_MSG:-"Update portfolio $(date '+%Y-%m-%d %H:%M:%S')"}
    
    echo "📝 Committing changes..."
    git commit -m "$COMMIT_MSG"
fi

echo "🚀 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🔄 GitHub Actions will automatically deploy your site."
    echo "⏱️  Deployment usually takes 2-5 minutes."
    echo ""
    echo "🌐 Your portfolio will be live at:"
    echo "   https://lewisawe.github.io"
    echo ""
    echo "📋 What happens next:"
    echo "1. GitHub Actions builds your site"
    echo "2. Static files are deployed to GitHub Pages"
    echo "3. Your site becomes accessible worldwide"
    echo ""
    echo "🔍 To monitor deployment:"
    echo "1. Go to https://github.com/lewisawe/lewisawe.github.io"
    echo "2. Click the 'Actions' tab"
    echo "3. Watch the deployment progress"
else
    echo "❌ Failed to push to GitHub."
    echo "💡 Possible solutions:"
    echo "1. Check your GitHub credentials"
    echo "2. Ensure you have push access to the repository"
    echo "3. Try: git push origin main --force (use with caution)"
fi

echo ""
echo "🎉 Deployment script completed!"
