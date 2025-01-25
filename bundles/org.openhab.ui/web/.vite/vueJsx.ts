import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'vue-jsx'
  // before? = ''
  // after? = ''
  configuration = vueJsx()
}

export default new Plugin()
