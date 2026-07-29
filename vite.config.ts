import fs from 'fs';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// Support both Replit (PORT + BASE_PATH env vars) and local development
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || '/';
const appRoot = path.resolve(import.meta.dirname);
const assetsDir = fs.existsSync(path.resolve(appRoot, 'attached_assets'))
  ? path.resolve(appRoot, 'attached_assets')
  : path.resolve(appRoot, '..', '..', 'attached_assets');

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.REPL_ID !== undefined
      ? [
          await import('@replit/vite-plugin-runtime-error-modal').then((m) =>
            m.default()
          ),
          ...(process.env.NODE_ENV !== 'production'
            ? [
                await import('@replit/vite-plugin-cartographer').then((m) =>
                  m.cartographer({
                    root: path.resolve(import.meta.dirname, '..'),
                  })
                ),
                await import('@replit/vite-plugin-dev-banner').then((m) =>
                  m.devBanner()
                ),
              ]
            : []),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': assetsDir,
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: false,
    host: '0.0.0.0',
    allowedHosts: true,
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
