#!/bin/bash

# Deploy Next.js portfolio to S3 with correct content types
echo "🚀 Deploying Next.js portfolio to S3..."

# Build the project first
echo "📦 Building Next.js project..."
npm run build

# Clear existing bucket contents
echo "🧹 Clearing existing S3 bucket contents..."
aws s3 rm s3://lewisawe.fun --recursive

# Upload all files
echo "📤 Uploading files to S3..."
aws s3 sync out/ s3://lewisawe.fun --exclude ".git/*"

# Set correct content types
echo "🔧 Setting correct content types..."

# HTML files
aws s3 cp s3://lewisawe.fun/ s3://lewisawe.fun/ --recursive --exclude "*" --include "*.html" --content-type "text/html" --metadata-directive REPLACE

# CSS files
aws s3 cp s3://lewisawe.fun/ s3://lewisawe.fun/ --recursive --exclude "*" --include "*.css" --content-type "text/css" --metadata-directive REPLACE

# JavaScript files
aws s3 cp s3://lewisawe.fun/ s3://lewisawe.fun/ --recursive --exclude "*" --include "*.js" --content-type "application/javascript" --metadata-directive REPLACE

# SVG files
aws s3 cp s3://lewisawe.fun/ s3://lewisawe.fun/ --recursive --exclude "*" --include "*.svg" --content-type "image/svg+xml" --metadata-directive REPLACE

# Favicon
aws s3 cp s3://lewisawe.fun/favicon.ico s3://lewisawe.fun/favicon.ico --content-type "image/x-icon" --metadata-directive REPLACE

# Font files
aws s3 cp s3://lewisawe.fun/ s3://lewisawe.fun/ --recursive --exclude "*" --include "*.woff2" --content-type "font/woff2" --metadata-directive REPLACE

echo "✅ Deployment complete!"
echo "🌐 Your portfolio is live at: http://lewisawe.fun.s3-website-us-west-2.amazonaws.com"
