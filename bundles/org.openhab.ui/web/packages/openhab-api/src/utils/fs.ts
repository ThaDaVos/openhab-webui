import { mkdir, readdir, unlink, lstat, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

export async function ensureDirectoryExists(
  dir: string,
  clean: boolean = false,
  skip: string[] = [],
): Promise<void> {
  if (existsSync(dir) === false) {
    await mkdir(dir, { recursive: true })
  } else if (clean) {
    const contents = await readdir(dir)

    for (const content of contents) {
      if (/^\./.test(content) || skip.includes(content)) {
        continue
      }

      const path = join(dir, content)

      const stat = await lstat(path)

      if (stat.isDirectory()) {
        await rm(path, { recursive: true, force: true })
      } else {
        await unlink(path)
      }
    }
  }
}
