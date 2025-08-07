#!/bin/bash

# GitHub Pages Deployment Script for Lewis Sawe Portfolio
# This script helps with initial setup and manual deployment

echo "🚀 GitHub Pages Deployment Script"
echo "=================================="

# Check if this is initial setup
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    
    echo "📝 Please enter your GitHub username:"
    read -r GITHUB_USERNAME
    
    echo "📝 Please enter your repository name (default: portfolio):"
    read -r REPO_NAME
    REPO_NAME=${REPO_NAME:-portfolio}
    
    echo "🔗 Adding remote origin..."
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
    
    echo "📋 Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "🌐 Future site URL: https://$GITHUB_USERNAME.github.io/$REPO_NAME"
fi

echo "🏗️  Building portfolio for production..."
NODE_ENV=production npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if we're in a git repository
if [ -d ".git" ]; then
    echo "📤 Preparing to commit and push..."
    
    # Add all files
    git add .
    
    # Check if there are changes to commit
    if git diff --staged --quiet; then
        echo "ℹ️  No changes to commit."
    else
        echo "💬 Enter commit message (or press Enter for default):"
        read -r COMMIT_MSG
        COMMIT_MSG=${COMMIT_MSG:-"Update portfolio $(date '+%Y-%m-%d %H:%M:%S')"}
        
        git commit -m "$COMMIT_MSG"
        
        echo "🚀 Pushing to GitHub..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Successfully pushed to GitHub!"
            echo "🔄 GitHub Actions will automatically deploy your site."
            echo "⏱️  Deployment usually takes 2-5 minutes."
            echo ""
            echo "📋 Next steps:"
            echo "1. Go to your repository on GitHub"
            echo "2. Navigate to Settings > Pages"
            echo "3. Set Source to 'GitHub Actions'"
            echo "4. Wait for deployment to complete"
            echo ""
            echo "🌐 Your site will be available at:"
            echo "   https://yourusername.github.io/repository-name"
        else
            echo "❌ Failed to push to GitHub. Please check your credentials and try again."
        fi
    fi
else
    echo "⚠️  Not in a Git repository. Please initialize Git first."
fi

echo ""
echo "📚 For detailed instructions, see: GITHUB_PAGES_DEPLOYMENT.md"
