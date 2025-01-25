import type { ConfigEnv } from 'vite'

export type ConfigurationFn<T> = (config: ConfigEnv) => T

export interface VitePlugin<T = unknown> {
  id: string
  before?: string
  after?: string
  configuration: T | ConfigurationFn<T>
}
