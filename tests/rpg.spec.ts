import { RpgWorld, RpgPlayer } from '@rpgjs/server'
import { testing } from '@rpgjs/testing'
import modules from '../src/modules'

let player: RpgPlayer

beforeEach(async () => {
    const fixture = testing(modules, {
        basePath: __dirname + '/../'
    })
    const client = await fixture.createClient()
    player = RpgWorld.getPlayer(client.playerId)
})

test('test player', () => {
    expect(player).toBeDefined()
})
