// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { name } from './package.json'
import vue from '@vitejs/plugin-vue'
console.log(name)
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.js'),
      name: 'VPdf',
      // the proper extensions will be added
      fileName: name,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
