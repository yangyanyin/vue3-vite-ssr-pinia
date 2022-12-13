import path from 'node:path'
import { defineConfig} from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
// import ssr from 'vite-plugin-ssr/plugin'
// import viteSSR from 'vite-ssr/plugin.js'
// import vueJsx from '@vitejs/plugin-vue-jsx'

const virtualFile = '@virtual-file'
const virtualId = '\0' + virtualFile
const nestedVirtualFile = '@nested-virtual-file'
const nestedVirtualId = '\0' + nestedVirtualFile

const base = '/'

// preserve this to test loading __filename & __dirname in ESM as Vite polyfills them.
// if Vite incorrectly load this file, node.js would error out.
globalThis.__vite_test_filename = __filename
globalThis.__vite_test_dirname = __dirname

export default defineConfig(({ command, ssrBuild }) => ({
  base,
  plugins: [
    // viteSSR(),
    vuePlugin(),
    // Example of a plugin that injects a helper from a virtual module that can
    // be used in renderBuiltUrl
    (function () {
      const queryRE = /\?.*$/s
      const hashRE = /#.*$/s
      const cleanUrl = (url) => url.replace(hashRE, '').replace(queryRE, '')
      let config

      const virtualId = '\0virtual:ssr-vue-built-url'
      return {
        name: 'built-url',
        enforce: 'post',
        configResolved(_config) {
          config = _config
        },
        resolveId(id) {
          if (id === virtualId) {
            return id
          }
        },
        load(id) {
          if (id === virtualId) {
            return {
              code: `export const __ssr_vue_processAssetPath = (url) => '${base}' + url`,
              moduleSideEffects: 'no-treeshake'
            }
          }
        },
        transform(code, id) {
          const cleanId = cleanUrl(id)
          if (
            config.build.ssr &&
            (cleanId.endsWith('.js') || cleanId.endsWith('.vue')) &&
            !code.includes('__ssr_vue_processAssetPath')
          ) {
            return {
              code:
                `import { __ssr_vue_processAssetPath } from '${virtualId}';__ssr_vue_processAssetPath;` +
                code,
              sourcemap: null // no sourcemap support to speed up CI
            }
          }
        }
      }
    })()
  ],
  resolve: { // 设置项目文件导入路径
    alias: {
        '@': path.resolve(__dirname, './src')
    }
  },
  experimental: {
    renderBuiltUrl(filename, { hostType, type, ssr }) {
      if (ssr && type === 'asset' && hostType === 'js') {
        return {
          runtime: `__ssr_vue_processAssetPath(${JSON.stringify(filename)})`
        }
      }
    }
  },
  build: {
    minify: false,
    rollupOptions: {
      input: './src/template/index.html'
    }
  },
  ssr: {
    noExternal: [
      // this package has uncompiled .vue files
      'example-external-component'
    ]
  },
  optimizeDeps: {
    exclude: ['example-external-component']
  }
}))
