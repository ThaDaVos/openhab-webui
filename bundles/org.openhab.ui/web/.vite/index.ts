import type { ConfigEnv } from 'vite'
import { sortByAfterAndBefore } from '../src/lib'
import vue from './vue'
import vuejsx from './vueJsx'
import vueDevTools from './vueDevTools'
import svg from './svg'
import pages from './pages'
import autoImport from './autoImport'
import components from './components'
import pwa from './pwa'
import inspector from './inspector'
import checker from './checker'

export default function (config: ConfigEnv) {
  return sortByAfterAndBefore([
    vue,
    vuejsx,
    vueDevTools,
    svg,
    pages,
    autoImport,
    components,
    pwa,
    inspector,
    checker,
  ]).map((plugin) =>
    typeof plugin.configuration === 'function'
      ? plugin.configuration(config)
      : plugin.configuration,
  )
}
