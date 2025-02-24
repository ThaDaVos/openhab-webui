import { writeFile } from 'node:fs/promises'
import openapiTS, { astToString } from 'openapi-typescript'
import { join } from 'node:path'
import { ensureDirectoryExists, retrieveOpenAPI } from './utils'
import Config from './config'
import { EOL } from 'node:os'

await ensureDirectoryExists(Config.outputDir, Config.clean)

const openAPISpecUrl = new URL(
  `${Config.instance.scheme}://${Config.instance.host}:${Config.instance.port}${Config.instance.path}`,
)

const document = await retrieveOpenAPI(openAPISpecUrl)

console.log('OpenAPI document retrieved')

const ast = await openapiTS(document, {})

console.log('OpenAPI document converted to TypeScript')

const code = astToString(ast)

console.log('Generated TypeScript code')

await writeFile(join(Config.outputDir, 'openapi.d.ts'), code)

await writeFile(
  join(Config.outputDir, 'client.ts'),
  [
    `import createClient, { Client, ClientOptions } from 'openapi-fetch'`,
    `import type { paths } from './openapi'`,
    ``,
    `declare global {`,
    `  interface Window {`,
    `    location: {`,
    `      href: string`,
    `    }`,
    `  }`,
    `  var window: Window;`,
    `}`,
    ``,
    `export default function clientFactory(baseUrl: string = window.location.href, options: ClientOptions | null = null): Client<paths> {`,
    `  return createClient<paths>({ baseUrl, ...(options ?? {}) })`,
    `}`,
  ].join(EOL),
)
