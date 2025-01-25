import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import vue, { Api } from '@vitejs/plugin-vue'

export class Plugin implements VitePlugin<PluginVite<Api>> {
  id = 'vue'
  // before? = ''
  // after? = ''
  configuration = vue()
}

export default new Plugin()
