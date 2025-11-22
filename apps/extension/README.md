<img src="src/assets/img/icon-128.png" width="64" alt="LocateX Logo"/>

# LocateX

**LocateX** - Click on any UI component in your browser to instantly open its source code in your IDE.

![LocateX Demo](./src/assets/img/logo-animated.svg)

## What is LocateX?

LocateX is a powerful browser extension that helps developers quickly navigate from UI components in the browser directly to their source code. Simply hold **Alt** (or **Option** on Mac) and click on any component to jump straight to its code in your editor.

## Features

- 🎯 **One-click navigation** - Click any component to open its code
- ⚡ **Lightning fast** - Works with React, Vue, Svelte, SolidJS, and more
- 🔍 **Smart detection** - Automatically detects components in development mode
- 🛠️ **Editor integration** - Works with VS Code, WebStorm, and other editors
- 🎨 **Visual feedback** - See component boundaries with hover effects

## Installation

### Option 1: Install from GitHub Releases (Easiest)

1. Go to the [Releases page](https://github.com/YOUR_USERNAME/LocateX/releases)
2. Download the latest `chrome.zip` file
3. Extract the zip file
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable **Developer mode** (toggle in top-right)
6. Click **"Load unpacked"**
7. Select the extracted folder

### Option 2: Build from Source

#### Chrome / Brave / Edge / Opera

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LocateX.git
   cd LocateX
   ```
2. Install dependencies and build:
   ```bash
   pnpm install
   pnpm build:extension
   ```
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable **Developer mode** (toggle in top-right)
5. Click **"Load unpacked"**
6. Select the `apps/extension/build/production_chrome` directory

#### Firefox

1. Build the extension (see Chrome instructions above)
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Select the `manifest.json` from `apps/extension/build/production_firefox` directory

For detailed installation instructions, see [INSTALL_FROM_GITHUB.md](./INSTALL_FROM_GITHUB.md)

## Quick Start

1. **Build the extension:**
   ```bash
   pnpm build:extension
   ```

2. **Load in browser** (see Installation above)

3. **Use it:**
   - Open any React/Vue/Svelte app in development mode
   - Hold **Alt** (or **Option** on Mac) and hover over components
   - Click to open the source code in your editor

## Requirements

**Extension works automatically in development mode** with all modern stacks (NextJS, Create React App, Vite, etc).

They automatically include [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react) which includes [babel-plugin-transform-react-jsx-source](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-source). Non-babel stacks use similar alternatives.

If you don't have [babel-plugin-transform-react-jsx-source](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-source), you should set it up manually.

## Troubleshooting

### No component boundaries showing

- **Make sure you are running your project in development mode.**
- If you have **custom webpack config or anything using Babel** make sure you have [babel-preset-react](https://babeljs.io/docs/en/babel-preset-react) preset or [babel-plugin-transform-react-jsx-source](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx-source) plugin.
- Check `process.env.NODE_ENV` is set to `development`

### Clicking doesn't open editor

- Your editor may not have registered URL handler. Check browser console for errors.
- If you see `Failed to launch 'vscode://...'`, try reinstalling your editor.
- Make sure your editor supports URL scheme handlers (VS Code, WebStorm, etc.)

## Development

### Run in development mode
```bash
pnpm dev
```

### Build Extension

#### Quick Build (from extension directory)
```bash
pnpm build
```
This builds only the extension (assumes dependencies are already built).

#### Full Build (recommended)
From the **root directory**, build all dependencies and the extension:
```bash
pnpm build:extension
```

Or from the extension directory:
```bash
pnpm build:all
```

This will:
1. Build all workspace dependencies (`@locator/babel-jsx`, `@locator/react-devtools-hook`, `@locator/shared`, `@locator/runtime`)
2. Build the extension
3. Output to `build/production_chrome/`

### Generate Icons
```bash
pnpm generate-icons
```

## Contributing

Feel free to create issues or pull requests!

For more information, see [contributing guide](./../../contributing.md)

## License

MIT
