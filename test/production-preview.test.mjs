import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
import { test } from 'node:test'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))

test('production preview serves Tiled maps from the runtime path', async () => {
  await access(join(projectRoot, 'dist', 'map', 'simplemap.tmx'))

  const server = await preview({
    root: projectRoot,
    configFile: false,
    preview: {
      host: '127.0.0.1',
      port: 0,
      strictPort: true
    }
  })

  try {
    const address = server.httpServer.address()
    assert(address && typeof address === 'object')

    const url = 'http://127.0.0.1:' + address.port + '/map/simplemap.tmx'
    const response = await fetch(url)
    assert.equal(response.status, 200)
    assert.match(await response.text(), /<map\b/)
  } finally {
    await new Promise((resolve, reject) => {
      server.httpServer.close(error => error ? reject(error) : resolve())
    })
  }
})
