#!/bin/bash

# Zylera Production Deployment Script
# This script helps verify and deploy the application to production

set -e  # Exit on any error

echo "🚀 Zylera Deployment Script"
echo "============================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored status
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Step 1: Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node -v)
print_status "Node.js version: $node_version"
echo ""

# Step 2: Install dependencies
echo "📥 Installing dependencies..."
npm ci --silent
print_status "Dependencies installed"
echo ""

# Step 3: Run production build
echo "🔨 Building for production..."
if npm run build; then
    print_status "Production build successful"
else
    print_error "Build failed! Please fix errors before deploying."
    exit 1
fi
echo ""

# Step 4: Check build output size
echo "📊 Analyzing build output..."
build_size=$(du -sh .next 2>/dev/null | cut -f1 || echo "Unknown")
print_status "Build size: $build_size"
echo ""

# Step 5: Verify critical files exist
echo "🔍 Verifying critical files..."
critical_files=(
    "package.json"
    "next.config.ts"
    "src/app/layout.tsx"
    "src/app/page.tsx"
    "src/app/globals.css"
    "public/robots.txt"
)

all_files_exist=true
for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        print_status "$file exists"
    else
        print_error "$file is missing!"
        all_files_exist=false
    fi
done
echo ""

if [ "$all_files_exist" = false ]; then
    print_error "Some critical files are missing. Please review before deploying."
    exit 1
fi

# Step 6: Environment check
echo "🔧 Checking environment configuration..."
if [ -f ".env" ]; then
    print_status ".env file found"
    print_warning "Remember to configure production environment variables on your hosting platform"
else
    print_warning "No .env file found (this may be intentional for production)"
fi
echo ""

# Step 7: Git status check
echo "📝 Checking git status..."
if [ -d ".git" ]; then
    if [[ -z $(git status -s) ]]; then
        print_status "Working directory clean"
    else
        print_warning "Uncommitted changes detected:"
        git status -s
        echo ""
        print_warning "Consider committing changes before deploying"
    fi
else
    print_warning "Not a git repository"
fi
echo ""

# Step 8: Deployment options
echo "🎯 Deployment Options"
echo "====================="
echo ""
echo "Choose your deployment platform:"
echo ""
echo "1. Vercel (Recommended for Next.js)"
echo "   Run: npx vercel --prod"
echo ""
echo "2. Netlify"
echo "   - Connect repository in Netlify dashboard"
echo "   - Configure build settings (see DEPLOYMENT.md)"
echo ""
echo "3. Self-Hosted / Docker"
echo "   Run: npm run start (after build)"
echo ""
echo "4. Static Export"
echo "   - Update next.config.ts with output: 'export'"
echo "   - Run: npm run build"
echo "   - Deploy 'out/' directory"
echo ""

print_status "Pre-deployment checks complete!"
echo ""
echo "📖 For detailed deployment instructions, see DEPLOYMENT.md"
echo ""
echo "🌐 Your application is ready to publish to production!"
