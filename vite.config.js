import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      // Replit dynamically assigns hosts — wildcard is safe for dev
      '.replit.dev',
      '.repl.co',
      'localhost'
    ],
    hmr: {
      clientPort: 5000
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true
  }
})
