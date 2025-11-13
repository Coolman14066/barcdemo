This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/vite.svg
README.md
src/App.tsx
src/assets/react.svg
src/components/BuddiButton.tsx
src/components/BuddiChat.tsx
src/components/ChatComposer.tsx
src/components/ConversationFlow.tsx
src/components/HomeScreen.tsx
src/components/Icon.tsx
src/components/PlanModal.tsx
src/context/DemoContext.tsx
src/data/bellaProfile.ts
src/index.css
src/main.tsx
src/types/index.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: .gitignore
````
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
````

## File: eslint.config.js
````javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
````

## File: index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <title>Barclays - Buddi Demo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: package.json
````json
{
  "name": "buddi-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@rollup/rollup-win32-x64-msvc": "^4.53.2",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.0",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react": "^5.1.0",
    "autoprefixer": "^10.4.22",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.3",
    "vite": "^7.2.2"
  }
}
````

## File: postcss.config.js
````javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: public/vite.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
````

## File: README.md
````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
````

## File: src/App.tsx
````typescript
import { DemoProvider } from './context/DemoContext';
import HomeScreen from './components/HomeScreen';
import BuddiButton from './components/BuddiButton';
import BuddiChat from './components/BuddiChat';
import PlanModal from './components/PlanModal';

function App() {
  return (
    <DemoProvider>
      <div className="app-stage">
        <div className="mobile-shell">
          <div className="relative min-h-[820px] bg-transparent">
            <HomeScreen />
            <BuddiButton />
            <BuddiChat />
            <PlanModal />
          </div>
        </div>
      </div>
    </DemoProvider>
  );
}

export default App;
````

## File: src/assets/react.svg
````
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
````

## File: src/components/BuddiButton.tsx
````typescript
import React from 'react';
import { useDemoContext } from '../context/DemoContext';

const BuddiButton: React.FC = () => {
  const { state, setState } = useDemoContext();

  const handleClick = () => {
    if (state === 'pre-plan' || state === 'post-plan') {
      setState('chat-open');
    }
  };

  // Don't show button when chat is open or plan modal is showing
  if (state === 'chat-open' || state === 'plan-modal') {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-6 right-5 z-30 flex items-center gap-3 rounded-pill bg-gradient-to-r from-barclays-cerulean to-barclays-ocean px-5 py-3 text-white shadow-buddi hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 active:scale-[0.98]"
      aria-label="Ask Buddi"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
      <div className="text-left">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Buddi
        </p>
        <p className="text-sm font-semibold leading-tight">Ask anything</p>
      </div>
    </button>
  );
};

export default BuddiButton;
````

## File: src/components/BuddiChat.tsx
````typescript
import React, { useEffect, useState } from 'react';
import { useDemoContext } from '../context/DemoContext';
import ConversationFlow from './ConversationFlow';

const BuddiChat: React.FC = () => {
  const { state, setState } = useDemoContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (state === 'chat-open') {
      const timer = setTimeout(() => setVisible(true), 15);
      return () => clearTimeout(timer);
    }
    setVisible(false);
    return undefined;
  }, [state]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setState('pre-plan'), 250);
  };

  if (state !== 'chat-open') {
    return null;
  }

  return (
    <>
      <div
        className={`absolute inset-0 z-30 bg-slate-900/50 backdrop-blur-md transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      <section
        className={`absolute inset-x-0 bottom-0 z-40 rounded-t-[38px] bg-white shadow-sheet transition-transform duration-500 ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ minHeight: '72%', maxHeight: '78%' }}
      >
        <div className="flex items-center justify-center py-3">
          <div className="h-1 w-10 rounded-full bg-slate-200" />
        </div>

        <header className="px-6 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-barclays-cerulean to-barclays-ocean text-white shadow-chip flex items-center justify-center">
                B
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Buddi</p>
                <h3 className="text-lg font-semibold text-slate-900">Buddi, your Barclays money coach</h3>
                <p className="text-xs text-slate-500">Helping you line up your wedding and future home goals.</p>
              </div>
            </div>
            <button
              className="h-9 w-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
              aria-label="Close chat"
              onClick={handleClose}
            >
              <svg className="mx-auto h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs text-slate-500">
            Buddi can open accounts, automate transfers, or tee up human advisors — all with your permission.
          </div>
        </header>

        <div className="h-[calc(100%-140px)]">
          <ConversationFlow />
        </div>
      </section>
    </>
  );
};

export default BuddiChat;
````

## File: src/components/ChatComposer.tsx
````typescript
import React from 'react';

interface ChatComposerProps {
  disabled?: boolean;
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const ChatComposer: React.FC<ChatComposerProps> = ({ disabled, value, onChange, onSend }) => {
  return (
    <div className="px-5 pb-safe pt-3">
      <div className="rounded-3xl border border-slate-100 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(1,31,61,0.12)] focus-within:border-barclays-cerulean/60">
        <div className="flex items-end gap-3">
          <button
            className="h-9 w-9 flex-shrink-0 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100"
            aria-label="More options"
            type="button"
          >
            <svg className="mx-auto h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <textarea
            className="h-16 flex-1 resize-none border-none bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
            placeholder="Type a message"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
          />
          <button
            className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-barclays-cerulean to-barclays-ocean text-white shadow-buddi disabled:opacity-50"
            aria-label="Send"
            type="button"
            onClick={onSend}
            disabled={disabled || value.trim().length === 0}
          >
            <svg className="mx-auto h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComposer;
````

## File: src/components/ConversationFlow.tsx
````typescript
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChatComposer from './ChatComposer';
import { useDemoContext } from '../context/DemoContext';
import type { BellaProfile } from '../types';

interface QuickReply {
  text: string;
  value: string;
  userText?: string | ((profile: BellaProfile) => string);
  emphasis?: 'primary' | 'secondary';
}

const initialReplies: QuickReply[] = [
  {
    text: 'Keep the wedding on track',
    value: 'wedding',
    userText: () => "Let's keep the wedding on track.",
  },
  {
    text: 'Start a Future Home pot',
    value: 'home',
    userText: () => "I want to start saving for a future home.",
  },
  {
    text: 'Balance both goals',
    value: 'both',
    userText: () => "I'd like to balance the wedding and a future home.",
  },
];

const monthlyReplies: QuickReply[] = [
  { text: '£400 per month', value: '400', userText: () => '£400 per month feels comfortable.' },
  { text: '£600 per month', value: '600', userText: () => '£600 per month is doable.' },
  { text: '£800 per month', value: '800', userText: () => "Let's model £800 per month." },
  { text: 'Not sure yet', value: 'unsure', userText: () => "I'm not sure - help me pick an amount." },
];

const planReplies: QuickReply[] = [
  {
    text: 'Preview the 5-step plan',
    value: 'see-plan',
    userText: () => 'Yes, show me how it works.',
    emphasis: 'primary',
  },
  {
    text: 'Fine-tune the budget first',
    value: 'tune-budget',
    userText: () => "Let's fine-tune the budget again.",
  },
];

const ConversationFlow: React.FC = () => {
  const { conversationTurn, setConversationTurn, messages, addMessage, setState, profile } =
    useDemoContext();
  const [composerValue, setComposerValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [showReplies, setShowReplies] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedAmountDisplay = useMemo(() => {
    const lastUser = [...messages].reverse().find((m) => m.sender === 'bella');
    return lastUser?.text?.match(/£(\d+)/)?.[1] ?? profile.monthlyBudget.toString();
  }, [messages, profile.monthlyBudget]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, showReplies]);

  useEffect(() => {
    if (conversationTurn === 0 && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        const firstName = profile.name.split(' ')[0];
        addMessage({
          sender: 'buddi',
          text: `Hi ${firstName}, I'm Buddi, your Barclays money coach.\n\nI can see you've built up £${profile.currentSavings.toLocaleString()} in Everyday Saver, and you're planning for around £${profile.weddingGoalAmount.toLocaleString()} on the wedding over the next ${profile.weddingGoalYears} years, with a future home a bit further out.\n\nWhat would you like to focus on today?`,
        });
        setQuickReplies(initialReplies);
        setShowReplies(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [conversationTurn, messages.length, addMessage, profile]);

  const pushUserMessage = (reply: QuickReply) => {
    const text =
      typeof reply.userText === 'function'
        ? reply.userText(profile)
        : reply.userText || reply.text;
    addMessage({ sender: 'bella', text });
  };

  const handleQuickReply = (reply: QuickReply) => {
    pushUserMessage(reply);
    setShowReplies(false);

    if (conversationTurn === 0) {
      const focusLabel =
        reply.value === 'wedding'
          ? 'keep the wedding on track'
          : reply.value === 'home'
          ? 'start a Future Home pot'
          : 'balance the wedding and a future home';
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          sender: 'buddi',
          text: `Got it - we'll ${focusLabel}.\n\nLooking at your recent spending, you usually have around £${profile.monthlyBudget} left each month after essentials. How much of that would you feel comfortable committing to your long-term goals?`,
        });
        setQuickReplies(monthlyReplies);
        setShowReplies(true);
        setConversationTurn(1);
      }, 900);
      return;
    }

    if (conversationTurn === 1) {
      const friendlyAmount =
        reply.value === 'unsure'
          ? 'a flexible amount we can adjust together'
          : `£${reply.value} per month`;
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage({
          sender: 'buddi',
          text: `Thanks, that helps.\n\nWith ${friendlyAmount}, I can set up an automatic plan that:\n• keeps a safety buffer in your current account\n• sends a regular transfer into a Wedding Fund pot\n• builds a small "Future Home" pot from round-ups and a monthly top-up.\n\nWould you like to preview a 5-step plan before you switch it on?`,
        });
        setQuickReplies(planReplies);
        setShowReplies(true);
        setConversationTurn(2);
      }, 1000);
      return;
    }

    if (conversationTurn === 2) {
      if (reply.value === 'see-plan') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage({
            sender: 'buddi',
            text: "Great - I'll pull your latest balances into a 5-step Wedding + Home plan.",
          });
          setTimeout(() => {
            setState('plan-modal');
            setConversationTurn(3);
          }, 400);
        }, 600);
        setQuickReplies([]);
        return;
      }

      if (reply.value === 'tune-budget') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          addMessage({
            sender: 'buddi',
            text: "No problem. Let's revisit the monthly amount until it feels right.",
          });
          setQuickReplies(monthlyReplies);
          setShowReplies(true);
          setConversationTurn(1);
        }, 800);
        return;
      }
    }
  };

  const handleComposerSend = () => {
    const trimmed = composerValue.trim();
    if (!trimmed) return;
    addMessage({ sender: 'bella', text: trimmed });
    setComposerValue('');
    setShowReplies(false);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage({
        sender: 'buddi',
        text: `Got it - I've logged that.\n\nWhen you're ready, use the buttons below or type "plan" and I'll keep building around about £${selectedAmountDisplay} per month.`,
      });
      if (conversationTurn > 0 && quickReplies.length) {
        setShowReplies(true);
      }
    }, 900);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map((message) => {
          const isBuddi = message.sender === 'buddi';
          return (
            <div
              key={message.id}
              className={`flex w-full ${isBuddi ? 'justify-start' : 'justify-end'}`}
            >
              {isBuddi && (
                <div className="mr-3 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-barclays-cerulean to-barclays-ocean text-white shadow-chip">
                  B
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  isBuddi
                    ? 'rounded-tl-md bg-slate-50 text-slate-800'
                    : 'rounded-tr-md bg-gradient-to-br from-barclays-cerulean to-barclays-ocean text-white'
                }`}
              >
                <p className="whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 rounded-3xl rounded-tl-md bg-slate-50 px-4 py-3 text-slate-500 shadow-sm">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                style={{ animationDelay: '0.15s' }}
              />
              <span
                className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
            Buddi is drafting…
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {showReplies && quickReplies.length > 0 && (
        <div className="px-5 pb-3">
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply.value}
                onClick={() => handleQuickReply(reply)}
                className={`rounded-pill px-4 py-2 text-sm font-semibold shadow-sm transition-all ${
                  reply.emphasis === 'primary'
                    ? 'bg-gradient-to-r from-barclays-cerulean to-barclays-ocean text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-barclays-cerulean hover:text-barclays-cerulean'
                }`}
              >
                {reply.text}
              </button>
            ))}
          </div>
        </div>
      )}

      <ChatComposer
        value={composerValue}
        onChange={setComposerValue}
        onSend={handleComposerSend}
        disabled={isTyping}
      />
    </div>
  );
};

export default ConversationFlow;
````

## File: src/components/HomeScreen.tsx
````typescript
import React from 'react';
import { useDemoContext } from '../context/DemoContext';
import Icon, { type IconName } from './Icon';

type AccountCard = {
  name: string;
  balance: number;
  subtitle: string;
  accent: 'cerulean' | 'dusk' | 'midnight' | 'ocean';
  icon: IconName;
};

type QuickAction = {
  label: string;
  detail: string;
  icon: IconName;
};

const quickActions: QuickAction[] = [
  { label: 'Your cards', detail: 'Manage credit & debit', icon: 'cards' },
  { label: 'Rewards', detail: 'View offers', icon: 'rewards' },
  { label: 'Spending', detail: 'Track in real time', icon: 'spending' },
  { label: 'Payments', detail: 'Send or schedule', icon: 'payments' },
  { label: 'Insight', detail: 'Tailored nudges', icon: 'insight' },
  { label: 'Support', detail: 'Speak to an expert', icon: 'support' },
];

const accentMap: Record<AccountCard['accent'], string> = {
  cerulean: 'from-barclays-cerulean to-barclays-ocean',
  dusk: 'from-barclays-dusk to-barclays-midnight',
  midnight: 'from-barclays-midnight to-barclays-dusk',
  ocean: 'from-barclays-ocean to-barclays-cerulean',
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const HomeScreen: React.FC = () => {
  const { profile } = useDemoContext();
  const projectedHomeSeedFiveYears = profile.homeSeedMonthly * 12 * 5;

  const accountCards: AccountCard[] = [
    {
      name: 'Barclays Current Account',
      balance: 2300,
      subtitle: 'Available today',
      accent: 'cerulean',
      icon: 'current-account',
    },
    {
      name: 'Everyday Saver',
      balance: profile.currentSavings,
      subtitle: 'General savings',
      accent: 'ocean',
      icon: 'saver',
    },
    {
      name: 'Barclays Credit Card',
      balance: 1500,
      subtitle: 'Available credit: £8,500',
      accent: 'midnight',
      icon: 'credit-card',
    },
  ];

  const weddingProgress = Math.min(
    100,
    (profile.currentSavings / profile.weddingGoalAmount) * 100
  );
  const futureHomeProgress = Math.min(100, (profile.homeSeedMonthly * 12 * 2) / 2000 * 100);

  const goalCards = [
    {
      title: 'Wedding Fund',
      helper: `£${profile.weddingMonthlyTarget}/month · ${profile.weddingGoalYears} years out`,
      progress: weddingProgress,
      copy: `Currently at ${formatCurrency(profile.currentSavings)} of ${formatCurrency(
        profile.weddingGoalAmount
      )} goal.`,
    },
    {
      title: 'Future Home Seed',
      helper: `Round-ups & £${profile.homeSeedMonthly}/month`,
      progress: futureHomeProgress,
      copy: `Seed £${profile.homeSeedMonthly} monthly to catch the next opportunity.`,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Light header */}
      <header className="bg-white px-6 pt-safe pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">BARCLAYS</p>
            <h1 className="text-2xl font-semibold text-slate-900 mt-1">
              Good afternoon, {profile.name.split(' ')[0]}
            </h1>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-barclays-cerulean text-white text-lg font-semibold shadow-sm">
              {profile.name[0]}
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 space-y-4">
        {/* Buddi Insight + Small Cards Row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="flex-1 rounded-3xl bg-white px-5 py-4 shadow-sm border border-gray-100">
            <p className="text-[10px] uppercase tracking-[0.4em] text-barclays-cerulean font-semibold">Buddi insight</p>
            <h2 className="mt-2 text-base font-semibold text-slate-900 leading-snug">
              Redirecting £{profile.homeSeedMonthly}/month towards "Future Home" would build roughly {formatCurrency(projectedHomeSeedFiveYears)} in 5 years.
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              You usually have room in your budget. Tap Buddi to set up a Future Home pot without touching your essentials.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:w-44">
            <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm border border-gray-100">
              Brita reward tier
              <p className="text-xs font-normal text-gray-500 mt-0.5">Tier 2 · £12 cashback waiting</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm border border-gray-100">
              Upcoming payment
              <p className="text-xs font-normal text-gray-500 mt-0.5">Mortgage review · 12 Sep</p>
            </div>
          </div>
        </div>

        {/* Accounts Section */}
        <div className="rounded-3xl bg-white p-5 shadow-sm border border-gray-100">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">
              Accounts
            </h2>
            <span className="text-xs font-semibold text-barclays-cerulean">View all</span>
          </div>
          <div className="space-y-3">
            {accountCards.map((account) => (
              <div
                key={account.name}
                className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-11 w-11 rounded-xl bg-gradient-to-br ${accentMap[account.accent]} flex items-center justify-center text-white shadow-sm`}
                    >
                      <Icon name={account.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{account.name}</p>
                      <p className="text-xs text-slate-500">{account.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-slate-900">{formatCurrency(account.balance)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {quickActions.slice(0, 4).map((action) => (
              <button
                key={action.label}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:border-barclays-cerulean hover:bg-white transition"
              >
                <Icon name={action.icon} className="h-5 w-5 flex-shrink-0 mt-0.5 text-barclays-cerulean" />
                <div>
                  <p>{action.label}</p>
                  <p className="text-xs font-normal text-slate-500">{action.detail}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">Goals & challenges</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">Buddi is plotting your next steps.</h3>
            </div>
            <span className="text-xs font-semibold text-barclays-cerulean">Edit goals</span>
          </div>
          <div className="grid gap-3">
            {goalCards.map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">{goal.title}</p>
                    <p className="text-base font-semibold text-slate-900 mt-1">{goal.helper}</p>
                  </div>
                  <span className="text-sm font-bold text-barclays-cerulean">
                    {Math.round(goal.progress)}%
                  </span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-barclays-cerulean to-barclays-ocean"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-600">{goal.copy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buddi Connection Info */}
        <section className="rounded-3xl border border-dashed border-gray-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium">Connection</p>
              <p className="text-base font-semibold text-slate-900 mt-1">Your Barclays money coach</p>
            </div>
            <span className="rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-semibold text-green-700">
              Buddi live
            </span>
          </div>
          <p className="mt-3 leading-relaxed text-slate-600">
            Buddi can suggest plans, open accounts, or nudge you when balances change. Tap the Buddi button
            to continue the conversation.
          </p>
        </section>
      </div>
    </main>
  );
};

export default HomeScreen;
````

## File: src/components/Icon.tsx
````typescript
import React from 'react';

export type IconName =
  | 'current-account'
  | 'saver'
  | 'credit-card'
  | 'cards'
  | 'rewards'
  | 'spending'
  | 'payments'
  | 'insight'
  | 'support'
  | 'safety-buffer'
  | 'wedding-fund'
  | 'home-seed'
  | 'home-growth'
  | 'retirement';

interface IconProps {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = 'h-6 w-6' }) => {
  const icons: Record<IconName, JSX.Element> = {
    'current-account': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    saver: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    'credit-card': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    cards: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
        <line x1="5" y1="15" x2="9" y2="15" />
      </svg>
    ),
    rewards: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M8.56 2.75c.37-.12.77.07.89.44l.88 2.64 2.64.88c.37.12.56.52.44.89l-.88 2.64.88 2.64c.12.37-.07.77-.44.89l-2.64.88-.88 2.64c-.12.37-.52.56-.89.44l-2.64-.88-2.64.88c-.37.12-.77-.07-.89-.44l-.88-2.64-2.64-.88a.67.67 0 0 1-.44-.89l.88-2.64-.88-2.64c-.12-.37.07-.77.44-.89l2.64-.88.88-2.64c.12-.37.52-.56.89-.44l2.64.88 2.64-.88z" />
        <path d="M12 14v7" />
      </svg>
    ),
    spending: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    payments: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    insight: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    support: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    'safety-buffer': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    'wedding-fund': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    'home-seed': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    'home-growth': (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    retirement: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;
````

## File: src/components/PlanModal.tsx
````typescript
import React, { useState, useEffect } from 'react';
import { useDemoContext } from '../context/DemoContext';

const PlanStepIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconClass = "h-6 w-6";

  switch (name) {
    case 'safety-buffer':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'wedding-fund':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'home-seed':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'home-growth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'retirement':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
  }
};

const PlanModal: React.FC = () => {
  const { state, setState, planSteps, updateStepStatus, allStepsConfirmed } = useDemoContext();
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const confirmedCount = planSteps.filter((step) => step.status === 'confirmed').length;
  const progressPercentage = (confirmedCount / planSteps.length) * 100;

  useEffect(() => {
    if (state === 'plan-modal') {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [state]);

  useEffect(() => {
    if (allStepsConfirmed && !showSuccess) {
      setShowSuccess(true);
    }
  }, [allStepsConfirmed, showSuccess]);

  const handleStepExpand = (stepId: number) => {
    const step = planSteps.find((s) => s.id === stepId);
    if (step && step.status === 'pending') {
      updateStepStatus(stepId, 'expanded');
    }
  };

  const handleStepConfirm = (stepId: number) => {
    updateStepStatus(stepId, 'confirmed');
  };

  const handleReturnHome = () => {
    setIsVisible(false);
    setTimeout(() => {
      setState('post-plan');
    }, 300);
  };

  if (state !== 'plan-modal') {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`bg-white w-full max-w-md h-full sm:h-auto sm:max-h-[90vh] rounded-t-modal sm:rounded-modal shadow-2xl flex flex-col transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : 'translate-y-full sm:translate-y-0 sm:scale-95'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-barclays-cerulean to-barclays-astronaut text-white px-6 py-6 rounded-t-modal">
            <h2 className="text-xl font-bold mb-2">
              Bella's Wedding + Home Plan
            </h2>
            <p className="text-sm opacity-90">powered by Buddi</p>
            <p className="text-xs opacity-75 mt-2">
              You can tweak amounts later. For now, tap through each step to activate it.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                {confirmedCount} of {planSteps.length} steps activated
              </span>
              <span className="text-sm font-bold text-barclays-cerulean">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-barclays-cerulean to-barclays-astronaut transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mx-6 mt-4 bg-green-50 border-2 border-green-200 rounded-card p-4">
              <div className="flex items-start gap-3">
                <svg className="h-8 w-8 text-green-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <div>
                  <h3 className="text-base font-bold text-green-900 mb-1">
                    Plan activated!
                  </h3>
                  <p className="text-sm text-green-700">
                    Your Wedding Fund and Future Home Seed are now on autopilot. You'll see them pinned to your home screen.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Steps Container */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {planSteps.map((step) => (
              <div
                key={step.id}
                className={`border-2 rounded-card transition-all ${
                  step.status === 'confirmed'
                    ? 'border-green-500 bg-green-50'
                    : step.status === 'expanded'
                    ? 'border-barclays-cerulean bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => handleStepExpand(step.id)}
                  disabled={step.status === 'confirmed'}
                  className="w-full p-4 text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-gray-700">
                      <PlanStepIcon name={step.icon} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {step.id}. {step.title}
                        </h3>
                        {step.status === 'confirmed' && (
                          <svg
                            className="w-6 h-6 text-green-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.summary}
                      </p>

                      {/* Expanded Content */}
                      {(step.status === 'expanded' || step.status === 'confirmed') && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-700 leading-relaxed mb-3">
                            {step.expandedText}
                          </p>
                          {step.status === 'expanded' && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStepConfirm(step.id);
                              }}
                              className="w-full bg-barclays-cerulean hover:bg-barclays-astronaut text-white font-semibold py-2 px-4 rounded-full transition-all active:scale-95"
                            >
                              {step.buttonText}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-modal">
            {allStepsConfirmed ? (
              <button
                onClick={handleReturnHome}
                className="w-full bg-gradient-to-r from-barclays-cerulean to-barclays-astronaut hover:shadow-lg text-white font-bold py-3 px-6 rounded-full transition-all active:scale-95"
              >
                Return to home
              </button>
            ) : (
              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-full cursor-not-allowed"
              >
                Activate all steps ({confirmedCount}/{planSteps.length})
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanModal;
````

## File: src/context/DemoContext.tsx
````typescript
import React, { createContext, useContext, useState, useCallback } from 'react';
import type { DemoContextType, DemoState, ConversationTurn, Message, PlanStep, StepStatus } from '../types';
import { bellaProfile, initialPlanSteps } from '../data/bellaProfile';

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DemoState>('pre-plan');
  const [conversationTurn, setConversationTurn] = useState<ConversationTurn>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [planSteps, setPlanSteps] = useState<PlanStep[]>(initialPlanSteps);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString() + Math.random(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const updateStepStatus = useCallback((stepId: number, status: StepStatus) => {
    setPlanSteps((prev) =>
      prev.map((step) => (step.id === stepId ? { ...step, status } : step))
    );
  }, []);

  const allStepsConfirmed = planSteps.every((step) => step.status === 'confirmed');

  return (
    <DemoContext.Provider
      value={{
        state,
        setState,
        conversationTurn,
        setConversationTurn,
        messages,
        addMessage,
        planSteps,
        updateStepStatus,
        allStepsConfirmed,
        profile: bellaProfile,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemoContext = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoContext must be used within DemoProvider');
  }
  return context;
};
````

## File: src/data/bellaProfile.ts
````typescript
import type { BellaProfile, PlanStep } from '../types';

export const bellaProfile: BellaProfile = {
  name: 'Bella Roxas',
  age: 24,
  location: 'London, UK',
  currentSavings: 8000,
  weddingGoalAmount: 40000,
  weddingGoalYears: 4,
  houseGoalYears: 12,
  riskComfort: 'low_to_medium',
  monthlyBudget: 600,
  weddingMonthlyTarget: 550,
  homeSeedMonthly: 50,
};

export const initialPlanSteps: PlanStep[] = [
  {
    id: 1,
    title: 'Lock in your safety buffer',
    icon: 'safety-buffer',
    summary: "Keep £3,000 in your current account so surprise bills don't derail your plans.",
    expandedText: "We'll treat £3,000 in your Barclays Current Account as an emergency buffer. Before any automatic transfer, Buddi checks that this buffer stays intact and can warn you if a change would take you below it.",
    buttonText: 'Confirm safety buffer',
    status: 'pending',
    revenueCategory: 'Deposits / NII',
  },
  {
    id: 2,
    title: 'Put your Wedding Fund on autopilot',
    icon: 'wedding-fund',
    summary: 'Move £550/month into a labelled Wedding Fund pot from your current account.',
    expandedText: "Based on your ~£600/month budget, we'll move £550 each month into a Wedding Fund savings pot. That keeps you on track for around £40,000 in 4 years, assuming modest growth. You can pause or change the amount at any time.",
    buttonText: 'Start Wedding autopay',
    status: 'pending',
    revenueCategory: 'Deposits / NII',
  },
  {
    id: 3,
    title: "Build a 'Future Home' seed with round-ups",
    icon: 'home-seed',
    summary: 'Round up your Barclays card purchases into a new Future Home pot.',
    expandedText: "Each time you pay with your Barclays card, Buddi rounds up to the nearest pound and moves the difference into your Future Home pot. By default we cap round-ups at about £50 per month so it always feels manageable. You can change the cap whenever you like.",
    buttonText: 'Turn on round-ups',
    status: 'pending',
    revenueCategory: 'Cards / Interchange',
  },
  {
    id: 4,
    title: "Add a small 'Home Growth' investment sleeve",
    icon: 'home-growth',
    summary: 'Invest £50/month in a low-risk diversified fund for your future home.',
    expandedText: "To gently grow your home fund over 10+ years, we'll add £50 each month into a low-risk, diversified portfolio via Barclays investments. You can pause anytime or speak to a human adviser first if you prefer.",
    buttonText: 'Start Home Growth sleeve',
    status: 'pending',
    revenueCategory: 'Investments / AUM',
  },
  {
    id: 5,
    title: 'Keep your retirement on track',
    icon: 'retirement',
    summary: 'Increase your pension contribution by +1% at your next pay rise.',
    expandedText: "To make sure your home and wedding goals don't squeeze future-you, Buddi will watch for your next pay rise and suggest a 1% pension top-up. When the nudge appears in your app, it's one tap to accept or snooze.",
    buttonText: 'Set pension nudge',
    status: 'pending',
    revenueCategory: 'Retirement / Long-term AUM',
  },
];
````

## File: src/index.css
````css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    color-scheme: light;
    background-color: #010f24;
  }

  * {
    @apply box-border;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply m-0 min-h-screen font-sans text-slate-900;
    background: radial-gradient(circle at 20% -10%, rgba(0, 174, 239, 0.35), transparent 55%),
      radial-gradient(circle at 90% 0%, rgba(0, 53, 102, 0.5), transparent 45%),
      #010f24;
  }

  #root {
    min-height: 100vh;
  }

  button {
    @apply transition-all duration-300;
  }
}

@layer components {
  .app-stage {
    @apply min-h-screen flex items-stretch justify-center px-0 py-0 sm:items-start sm:px-4 sm:py-12;
  }

  .mobile-shell {
    @apply relative w-full max-w-none min-h-screen overflow-hidden bg-barclays-mist sm:max-w-[420px] sm:rounded-shell sm:border sm:border-white/10 sm:shadow-shell;
  }

  .home-gradient {
    background-image: linear-gradient(160deg, #012243 0%, #003665 45%, #0075c9 100%);
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .pt-safe {
    padding-top: calc(env(safe-area-inset-top, 0px) + 1rem);
  }

  .pb-safe {
    padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 1.25rem);
  }
}
````

## File: src/main.tsx
````typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
````

## File: src/types/index.ts
````typescript
export type DemoState = 'pre-plan' | 'chat-open' | 'plan-modal' | 'post-plan';

export type ConversationTurn = 0 | 1 | 2 | 3 | 4;

export type StepStatus = 'pending' | 'expanded' | 'confirmed';

export interface BellaProfile {
  name: string;
  age: number;
  location: string;
  currentSavings: number;
  weddingGoalAmount: number;
  weddingGoalYears: number;
  houseGoalYears: number;
  riskComfort: string;
  monthlyBudget: number;
  weddingMonthlyTarget: number;
  homeSeedMonthly: number;
}

export interface Message {
  id: string;
  sender: 'buddi' | 'bella';
  text: string;
  timestamp: Date;
  isTyping?: boolean;
}

export interface PlanStep {
  id: number;
  title: string;
  icon: string;
  summary: string;
  expandedText: string;
  buttonText: string;
  status: StepStatus;
  revenueCategory: string;
}

export interface DemoContextType {
  state: DemoState;
  setState: (state: DemoState) => void;
  conversationTurn: ConversationTurn;
  setConversationTurn: (turn: ConversationTurn) => void;
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  planSteps: PlanStep[];
  updateStepStatus: (stepId: number, status: StepStatus) => void;
  allStepsConfirmed: boolean;
  profile: BellaProfile;
}
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barclays: {
          cerulean: '#00aeef',
          ocean: '#0075c9',
          midnight: '#011f3d',
          dusk: '#002f59',
          slate: '#4f637c',
          fog: '#8ba1be',
          sky: '#dff1ff',
          mist: '#f5f8fb',
          cloud: '#f0f4f8',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', 'Inter', '"SF Pro Display"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        modal: '28px',
        shell: '44px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 10px 35px rgba(1, 31, 61, 0.12)',
        buddi: '0 12px 30px rgba(0, 136, 204, 0.35)',
        shell: '0 35px 90px rgba(0, 23, 56, 0.35)',
        sheet: '0 -20px 40px rgba(4, 24, 54, 0.22)',
        chip: '0 4px 12px rgba(1, 31, 61, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2.6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.04)', opacity: 1 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'barclays-hero': 'linear-gradient(135deg, #011f3d 0%, #003d73 45%, #00aeef 100%)',
        'barclays-sky': 'linear-gradient(180deg, #f5f8fb 0%, #ecf3fb 100%)',
      },
    },
  },
  plugins: [],
}
````

## File: tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
````

## File: tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
````
