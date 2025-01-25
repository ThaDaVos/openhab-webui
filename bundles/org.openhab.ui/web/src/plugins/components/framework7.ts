import type { Plugin as PluginContract, PluginOptions } from '@/types'

// Import Framework7 Core
import Framework7 from 'framework7/lite-bundle'

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue'

import 'framework7/css/bundle'

export class Plugin implements PluginContract {
  id = 'framework7'

  install({}: PluginOptions) {
    Framework7.use(Framework7Vue)

    return this
  }
}

export default new Plugin()
