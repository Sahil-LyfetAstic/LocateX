# Install LocateX Extension in Chrome

This guide will help you build and install the LocateX extension in Google Chrome.

## Prerequisites

- Node.js >= 22.0.0
- pnpm >= 8.7.5
- Google Chrome browser

## Step 1: Install Dependencies

If you haven't already, install dependencies:

```bash
cd /home/codey/Templates/locatorjs
source ~/.nvm/nvm.sh  # If using nvm
nvm use 22  # Ensure Node.js 22+ is active
pnpm install
```

## Step 2: Build the Extension

Build the Chrome extension:

```bash
cd apps/extension
pnpm build
```

The built extension will be in: `apps/extension/build/production_chrome/`

## Step 3: Load Extension in Chrome

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **"Load unpacked"** button
5. Select the build directory:
   ```
   /home/codey/Templates/locatorjs/apps/extension/build/production_chrome
   ```
6. The extension should now appear in your extensions list

## Step 4: Verify Installation

1. Look for the "LocateX" extension icon in your Chrome toolbar
2. Click the extension icon to open the popup
3. The extension should be ready to use

## Usage

- Hold **Alt** (or **Option** on Mac) and click on any React/component element in a web page
- The extension will open the component's source code in your editor
- Make sure your development server is running in development mode

## Troubleshooting

### Extension doesn't load
- Make sure you selected the correct `build/production_chrome` directory
- Check the Chrome extensions page for error messages
- Verify the build completed successfully

### Extension doesn't work on pages
- Ensure your web app is running in **development mode**
- Check that your build tool (Vite, Webpack, etc.) includes source maps
- Verify babel-plugin-transform-react-jsx-source is configured

### Build fails
- Ensure Node.js version is 22.0.0 or higher: `node --version`
- If using nvm: `nvm use 22` or `nvm install 22`
- Clear node_modules and reinstall: `rm -rf node_modules && pnpm install`

## Development Mode

To develop the extension with hot reload:

```bash
cd apps/extension
pnpm dev
```

This will start a development server and watch for changes.

## Packaging for Distribution

To create a zip file for Chrome Web Store submission:

```bash
cd apps/extension
pnpm pack:chrome
```

The zip file will be created at: `build/chrome.zip`

