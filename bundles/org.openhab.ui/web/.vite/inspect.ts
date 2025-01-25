import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import inspect from 'vite-plugin-inspect'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'inspect'
  // before? = ''
  // after? = ''
  configuration = inspect({
    build: true,
    outputDir: '.vite-inspect',
  })
}

export default new Plugin()
