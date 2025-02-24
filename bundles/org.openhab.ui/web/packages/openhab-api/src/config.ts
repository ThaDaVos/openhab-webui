import * as dotenv from 'dotenv'

dotenv.config()

export default {
  clean: process.env.CLEAN || true,
  dereference: process.env.CONFIG_DEREFERENCE || true,
  outputDir: process.env.OUTPUT_DIR || 'lib',
  instance: {
    scheme: process.env.OPENHAB_SCHEME || 'https',
    host: process.env.OPENHAB_HOST || 'demo.openhab.org',
    port: process.env.OPENHAB_PORT || 443,
    path: process.env.OPENHAB_PATH || '/rest/spec',
  }
}
