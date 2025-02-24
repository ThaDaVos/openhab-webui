import type { OpenAPI3 } from 'openapi-typescript'

export async function retrieveOpenAPI(
  specUrl: URL,
): Promise<OpenAPI3> {
  const response = await fetch(specUrl, { method: 'GET' })

  const json = (await response.json()) as OpenAPI3

  if (!json || !json.paths) {
    throw new Error('Invalid OpenAPI specification: missing paths')
  }

  return json
}
