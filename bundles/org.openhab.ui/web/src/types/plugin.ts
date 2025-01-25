import type { App } from 'vue'

export interface PluginOptions {
  app: App
}

export interface Plugin {
  id: string
  before?: string
  after?: string
  install(options: PluginOptions): this
}
