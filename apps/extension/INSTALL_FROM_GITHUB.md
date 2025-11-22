# Installing LocateX Extension from GitHub

## Method 1: Download from GitHub Releases (Recommended)

1. Go to the [Releases page](https://github.com/YOUR_USERNAME/LocateX/releases) of this repository
2. Download the latest `chrome.zip` file
3. Extract the zip file to a folder on your computer
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable **Developer mode** (toggle in the top right corner)
6. Click **Load unpacked**
7. Select the extracted folder (should contain `manifest.json`)

## Method 2: Build from Source

### Prerequisites
- Node.js 22+
- pnpm 8.7.5+

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/LocateX.git
   cd LocateX
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Build the extension:**
   ```bash
   pnpm build:extension
   ```
   
   Or from the extension directory:
   ```bash
   cd apps/extension
   pnpm build:all
   ```

4. **Load in Chrome:**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode**
   - Click **Load unpacked**
   - Select the folder: `apps/extension/build/production_chrome`

## Method 3: Direct GitHub URL (Advanced)

You can also load the extension directly from a GitHub repository using a Chrome extension loader:

1. Install a Chrome extension like [GitHub Extension Installer](https://chrome.google.com/webstore/detail/github-extension-installer/ckkpgodghnjgkjlkbmjcnbejicpdnjdl) (if available)
2. Or use this URL format: `https://github.com/YOUR_USERNAME/LocateX/tree/main/apps/extension/build/production_chrome`

**Note:** Chrome doesn't allow loading extensions directly from remote URLs for security reasons. You'll need to download and load locally.

## Updating the Extension

When a new version is released:

1. **If using Method 1:** Download the new `chrome.zip` and replace the old folder
2. **If using Method 2:** Pull the latest changes and rebuild:
   ```bash
   git pull
   pnpm build:extension
   ```
   Then reload the extension in Chrome (click the reload icon on `chrome://extensions/`)

## Troubleshooting

### Extension won't load
- Make sure you selected the folder containing `manifest.json`
- Check that the build completed successfully
- Ensure Developer mode is enabled

### Extension not working
- Check the browser console for errors (F12)
- Verify all dependencies were built correctly
- Try rebuilding: `pnpm build:extension`

### Build errors
- Make sure Node.js 22+ is installed: `node --version`
- Ensure pnpm is installed: `pnpm --version`
- Try cleaning and rebuilding:
  ```bash
  pnpm clean
  pnpm install
  pnpm build:extension
  ```

