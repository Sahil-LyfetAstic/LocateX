#!/bin/bash
# Build script for LocateX Chrome Extension
# This script builds all dependencies and then the extension itself

set -e  # Exit on error

echo "🚀 Building LocateX Extension..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 22 ]; then
  echo -e "${YELLOW}⚠️  Warning: Node.js 22+ is required. Current version: $(node --version)${NC}"
  echo "   If using nvm, run: nvm use 22"
fi

# Step 1: Build workspace dependencies
echo -e "${BLUE}📦 Step 1: Building workspace dependencies...${NC}"
pnpm build --filter '@locator/babel-jsx' \
           --filter '@locator/react-devtools-hook' \
           --filter '@locator/shared' \
           --filter '@locator/runtime'

if [ $? -ne 0 ]; then
  echo -e "${YELLOW}❌ Failed to build dependencies${NC}"
  exit 1
fi

echo ""
echo -e "${BLUE}📦 Step 2: Building extension...${NC}"
cd apps/extension
pnpm build

if [ $? -ne 0 ]; then
  echo -e "${YELLOW}❌ Extension build failed${NC}"
  exit 1
fi

echo ""
echo -e "${GREEN}✅ Build completed successfully!${NC}"
echo ""
echo "📁 Extension output: apps/extension/build/production_chrome/"
echo ""
echo "To install in Chrome:"
echo "  1. Open chrome://extensions/"
echo "  2. Enable 'Developer mode'"
echo "  3. Click 'Load unpacked'"
echo "  4. Select: $(pwd)/build/production_chrome"
echo ""

