import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import checker from 'vite-plugin-checker'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'checker'
  // before? = ''
  // after? = ''
  configuration = checker({
    vueTsc: true,
    typescript: true,
    // eslint: {
    //   lintCommand: Package.scripts.lint,
    // },
  })
}

export default new Plugin()
