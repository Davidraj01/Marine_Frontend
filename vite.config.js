import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    // Use esbuild for fast minification
    minify: 'esbuild',
    // Enable CSS minification + code splitting
    cssMinify: true,
    cssCodeSplit: true,
    // No source maps in production
    sourcemap: false,
    // Skip compressed size reporting to speed up builds
    reportCompressedSize: false,
    // Target modern browsers for smaller output
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animation: ['framer-motion'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          lottie: ['lottie-react', '@lottiefiles/react-lottie-player'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    // Inline assets smaller than 4KB
    assetsInlineLimit: 4096,
  },
  esbuild: {
    // Remove console.log and debugger in production
    drop: ['console', 'debugger'],
    // Remove legal comments for smaller output
    legalComments: 'none',
  },
})
