import { writeFile, mkdir, readdir, unlink, lstat, rm } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import openapiTS from 'openapi-typescript'
import fetch from 'node-fetch'
import { EOL } from 'os'
import $RefParser from '@apidevtools/json-schema-ref-parser'
import { OpenAPIV3 } from 'openapi-types'

import Config from './config'

if (existsSync(Config.outputDir) === false) {
  await mkdir(Config.outputDir, { recursive: true })
} else if (Config.clean) {
  const contents = await readdir(Config.outputDir)

  for (const content of contents) {
    const path = join(Config.outputDir, content)

    const stat = await lstat(path)

    if (stat.isDirectory()) {
      await rm(path, { recursive: true, force: true })
    } else {
      await unlink(path)
    }
  }
}
