import type { Plugin as UserPluginContract } from '@/types'
import type { App, Plugin as VuePluginContract } from 'vue'
import { sortByAfterAndBefore } from '@/lib'

const plugins: VuePluginContract = {
  install: (app: App) => {
    const plugins: UserPluginContract[] = Object.values(
      // Retrieve all plugins from the ./plugins folder
      // https://vitejs.dev/guide/features.html#glob-import
      import.meta.glob<UserPluginContract>(['./*.ts', './*/index.ts', '!./index.ts'], {
        eager: true,
        import: 'default',
      }),
    )

    const sorted = sortByAfterAndBefore(plugins)

    for (const plugin of sorted) {
      plugin.install({ app })
    }

    return this
  },
}

export default plugins
