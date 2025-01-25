import { VitePlugin } from '../src/types'
import { Plugin as PluginVite } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export class Plugin implements VitePlugin<PluginVite[]> {
  id = 'vite-pwa'
  // before? = ''
  // after? = ''
  configuration = VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['public/favicon.ico'],
    manifest: {
      name: '__TEMPLATE__',
      short_name: '__TEMPLATE__',
      theme_color: '#ffffff',
      icons: [
        // {
        //   src: "/pwa-192x192.png",
        //   sizes: "192x192",
        //   type: "image/png",
        // },
        // {
        //   src: "/pwa-512x512.png",
        //   sizes: "512x512",
        //   type: "image/png",
        // },
        // {
        //   src: "/pwa-512x512.png",
        //   sizes: "512x512",
        //   type: "image/png",
        //   purpose: "any maskable",
        // },
      ],
    },
  })
}

export default new Plugin()
