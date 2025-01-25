import type { Plugin as PluginContract, PluginOptions } from '@/types'

import { sortByAfterAndBefore } from '@/lib'

export class Plugin implements PluginContract {
  id = 'template'

  install({ app }: PluginOptions) {
    const plugins: PluginContract[] = Object.values(
      // Retrieve all plugins from the ./plugins folder
      // https://vitejs.dev/guide/features.html#glob-import
      import.meta.glob<PluginContract>(['./*.ts', '!./index.ts'], {
        eager: true,
        import: 'default',
      }),
    )

    const sorted = sortByAfterAndBefore(plugins)

    for (const plugin of sorted) {
      plugin.install({ app })
    }

    return this
  }
}

export default new Plugin()
