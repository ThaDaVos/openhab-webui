import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import Components from 'unplugin-vue-components/vite'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'components'
  // before? = ''
  // after? = ''
  configuration = Components({
    extensions: ['vue', 'svg'],
    dirs: ['src/components', 'src/assets'],
    deep: true,
    // allow auto import and register components used in markdown and SVG
    include: [/\.vue$/, /\.vue\?vue/, /\.svg$/],
    dts: 'src/components.d.ts',
    types: [
      {
        from: 'vue-i18n',
        names: ['i18n-t'],
      },
    ],
    importPathTransform: (path) => (path.endsWith('.svg') ? `${path}?component` : undefined),
    resolvers: [
      (name) => {
        console.log(`Resolving ${name}`)
        if (name.toLowerCase().startsWith('f7')) {
          // Possible kebab-case to PascalCase conversion
          name = name.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
          // Convert PascalCase to camelCase
          name = name.charAt(0).toLowerCase() + name.slice(1)

          console.log(`Resolved ${name}`)

          return {
            name,
            from: 'framework7-vue',
          }
        }
      },
    ],
  })
}

export default new Plugin()
