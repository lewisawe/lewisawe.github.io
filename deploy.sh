#!/bin/bash

# Lewis Sawe Portfolio - Production Deployment Script for AWS S3
# Update the variables below with your actual AWS resources

BUCKET_NAME="lewis-sawe-portfolio"
DISTRIBUTION_ID="" # Optional: Add your CloudFront distribution ID for cache invalidation
REGION="us-east-1" # Update with your preferred AWS region

echo "🚀 Building Next.js portfolio for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "📦 Build completed successfully!"

echo "☁️  Uploading to S3 bucket: $BUCKET_NAME..."
aws s3 sync out/ s3://$BUCKET_NAME --delete --region $REGION

if [ $? -ne 0 ]; then
    echo "❌ S3 upload failed. Please check your AWS credentials and bucket permissions."
    exit 1
fi

echo "🔧 Setting optimal cache headers..."

# Set long cache for static assets (JS, CSS, images)
aws s3 cp s3://$BUCKET_NAME/_next/ s3://$BUCKET_NAME/_next/ --recursive \
    --cache-control "max-age=31536000,public,immutable" \
    --metadata-directive REPLACE --region $REGION

# Set shorter cache for HTML files
aws s3 cp s3://$BUCKET_NAME/ s3://$BUCKET_NAME/ --recursive \
    --exclude "*" --include "*.html" \
    --cache-control "max-age=3600,public" \
    --metadata-directive REPLACE --region $REGION

# Set cache for other assets
aws s3 cp s3://$BUCKET_NAME/ s3://$BUCKET_NAME/ --recursive \
    --exclude "*" --include "*.ico" --include "*.txt" \
    --cache-control "max-age=86400,public" \
    --metadata-directive REPLACE --region $REGION

# Optional: Invalidate CloudFront cache
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --region $REGION
    
    if [ $? -eq 0 ]; then
        echo "✅ CloudFront cache invalidation initiated"
    else
        echo "⚠️  CloudFront invalidation failed, but deployment was successful"
    fi
fi

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Your portfolio is now live!"
echo ""
echo "📍 S3 Website URL: https://$BUCKET_NAME.s3-website-$REGION.amazonaws.com"
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "🚀 CloudFront URL: https://your-domain.com (if configured)"
fi
echo ""
echo "🔗 Don't forget to:"
echo "   • Configure your custom domain (if using one)"
echo "   • Set up SSL certificate via AWS Certificate Manager"
echo "   • Update DNS records to point to your S3/CloudFront endpoint"
