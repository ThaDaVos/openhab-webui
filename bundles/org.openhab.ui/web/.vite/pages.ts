import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import Pages from 'vite-plugin-pages'
import { resolve } from 'node:path'
import { writeFile } from 'node:fs/promises'

export class Plugin implements VitePlugin<PluginVite> {
  id = 'pages'
  // before? = ''
  // after? = ''
  configuration = Pages({
    extensions: ['vue'],
    dirs: [{ dir: 'src/pages', baseRoute: '' }],
    importMode: 'async',
    exclude: ['node_modules', '.git'],
    /**
     * Next: @see https://nextjs.org/docs/routing/introduction
     * Nuxt: @see https://nuxtjs.org/docs/features/file-system-routing/
     * Remix: @see https://remix.run/docs/en/v1/guides/routing
     */
    routeStyle: 'next', // default: "next", others: "nuxt", "remix",
    resolver: 'vue',
    async onRoutesGenerated(routes) {
      await writeFile(resolve(__dirname, '../src/lib/routes.json'), JSON.stringify(routes, null, 2))
    },
  })
}

export default new Plugin()
