import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'auto-import'
  // before? = ''
  // after? = ''
  configuration = AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      // /\.md$/, // .md
      // /\.svg$/, // .svg
    ],

    // global imports to register
    imports: ['vue'],

    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    dirs: ['src/composables', 'src/stores'],

    // Filepath to generate corresponding .d.ts file.
    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
    // Set `false` to disable.
    dts: 'src/auto-imports.d.ts',

    // Auto import inside Vue template
    // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
    vueTemplate: true,

    // Custom resolvers, compatible with `unplugin-vue-components`
    // see https://github.com/antfu/unplugin-auto-import/pull/23/
    resolvers: [
      /* ... */
    ],

    // Generate corresponding .eslintrc-auto-import.json file.
    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  })
}

export default new Plugin()
