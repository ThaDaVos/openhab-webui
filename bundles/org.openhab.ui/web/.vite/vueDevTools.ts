import { VitePlugin } from '../src/types'
import { PluginOption } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export class Plugin implements VitePlugin<PluginOption> {
  id = 'vue-devtools'
  // before? = ''
  // after? = ''
  configuration = vueDevTools()
}

export default new Plugin()
