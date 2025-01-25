import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import svg from 'vite-svg-loader'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'svg'
  // before? = ''
  // after? = ''
  configuration = svg({
    defaultImport: 'url',
  })
}

export default new Plugin()
