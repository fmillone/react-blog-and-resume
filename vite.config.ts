import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      template: 'index.html',
      inject: {
        data: {
          version: process.env.VITE_VERCEL_GIT_COMMIT_SHA,
        }
      }
    }),
  ],
  assetsInclude: ['**/*.md'],
})
