# GitHub Extension Distribution Guide

This guide explains how to store your Chrome extension on GitHub and load it into Chrome.

## Overview

There are two main approaches:
1. **GitHub Releases** - Automated builds and releases (Recommended)
2. **Manual Distribution** - Build locally and commit/push

## Method 1: Automated GitHub Releases (Recommended)

### Setup

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add extension build workflow"
   git push origin main
   ```

2. **Create a release:**
   - Go to your GitHub repository
   - Click "Releases" → "Create a new release"
   - Create a new tag (e.g., `v1.3.1`)
   - The GitHub Actions workflow will automatically:
     - Build all dependencies
     - Build the extension
     - Package it as `chrome.zip`
     - Attach it to the release

3. **Or trigger manually:**
   - Go to "Actions" tab
   - Select "Build and Release Extension"
   - Click "Run workflow"
   - Enter version tag (e.g., `v1.3.1`)

### Users Install from Release

1. Go to your repository's Releases page
2. Download `chrome.zip` from the latest release
3. Extract the zip file
4. Load in Chrome:
   - Open `chrome://extensions/`
   - Enable Developer mode
   - Click "Load unpacked"
   - Select the extracted folder

## Method 2: Manual Distribution

### Build and Package Locally

```bash
# From root directory
pnpm pack:chrome
```

This creates `apps/extension/build/chrome.zip`

### Option A: Commit Built Extension (Not Recommended)

⚠️ **Note:** The `build` folder is in `.gitignore` for good reason. Committing built files can cause merge conflicts and bloat the repository.

If you must commit it:
1. Temporarily remove `/build` from `.gitignore`
2. Build the extension
3. Commit the `build/production_chrome` folder
4. Push to GitHub

### Option B: Use GitHub Releases Manually

1. Build and package:
   ```bash
   pnpm pack:chrome
   ```

2. Go to GitHub → Releases → "Draft a new release"
3. Upload `apps/extension/build/chrome.zip`
4. Users download and install

## Loading Extension in Chrome from GitHub

### From GitHub Releases (Easiest)

1. Download `chrome.zip` from Releases
2. Extract it
3. Load in Chrome as unpacked extension

### From GitHub Repository (Build Required)

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LocateX.git
   cd LocateX
   ```

2. Build the extension:
   ```bash
   pnpm install
   pnpm build:extension
   ```

3. Load in Chrome:
   - Open `chrome://extensions/`
   - Enable Developer mode
   - Click "Load unpacked"
   - Select `apps/extension/build/production_chrome`

## GitHub Actions Workflow

The workflow (`.github/workflows/release-extension.yml`) automatically:
- Builds on tag push or manual trigger
- Creates a GitHub Release
- Attaches `chrome.zip` to the release
- Includes installation instructions

### Triggering a Release

**Via Git Tag:**
```bash
git tag v1.3.1
git push origin v1.3.1
```

**Via GitHub UI:**
- Actions → "Build and Release Extension" → "Run workflow"

## Best Practices

1. ✅ **Use GitHub Releases** - Clean, automated, versioned
2. ✅ **Don't commit build files** - Keep repository clean
3. ✅ **Use semantic versioning** - Tag releases as `v1.2.3`
4. ✅ **Include changelog** - Document what's new in each release
5. ✅ **Test before releasing** - Build and test locally first

## File Structure

```
LocateX/
├── .github/
│   └── workflows/
│       └── release-extension.yml  # Auto-build workflow
├── apps/
│   └── extension/
│       ├── build/
│       │   ├── production_chrome/  # Built extension (gitignored)
│       │   └── chrome.zip          # Packaged extension (gitignored)
│       └── INSTALL_FROM_GITHUB.md  # Installation guide
└── GITHUB_EXTENSION_GUIDE.md      # This file
```

## Troubleshooting

### GitHub Actions Fails
- Check Node.js version matches (22+)
- Verify pnpm version (8.7.5)
- Check build logs in Actions tab

### Extension Won't Load
- Ensure you selected the folder with `manifest.json`
- Check Developer mode is enabled
- Verify the build completed successfully

### Users Can't Install
- Provide clear instructions in release notes
- Link to `INSTALL_FROM_GITHUB.md`
- Include screenshots if needed

## Security Notes

- ⚠️ Never commit `.pem` private keys
- ⚠️ Don't store sensitive data in built files
- ⚠️ Review code before releasing
- ✅ Use GitHub's security features (Dependabot, etc.)

## Next Steps

1. Update `YOUR_USERNAME` in the workflow and documentation
2. Test the GitHub Actions workflow
3. Create your first release
4. Share the Releases page URL with users

