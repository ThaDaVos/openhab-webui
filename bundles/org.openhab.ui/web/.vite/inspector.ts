import { VitePlugin } from '../src/types'
import { PluginOption } from 'vite'
import inspector from 'vite-plugin-vue-inspector'

export class Plugin implements VitePlugin<PluginOption> {
  id = 'inspector'
  // before? = ''
  // after? = ''
  configuration = inspector({
    toggleComboKey: 'control-shift',
  })
}

export default new Plugin()
