import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import {fileURLToPath} from "node:url";
// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [
      AutoImport({
          include: [
              /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
              /\.vue$/,
              /\.vue\?vue/, // .vue
              /\.md$/, // .md
          ],
          imports: [
              'vue',
              'vue-router',
          ],
          dirs: ['./src/utils'],
          dts: fileURLToPath(new URL('./auto-import.d.ts', import.meta.url)),
          eslintrc: {
              // 有配置文件设置为 false， 更新时设置为true
              enabled: false,
              filepath: fileURLToPath(new URL('./eslintrc-auto-import.json', import.meta.url)),
              globalsPropValue: true
          },
      }),
      vue(),
  ]
})
