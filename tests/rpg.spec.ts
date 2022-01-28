import { RpgWorld, RpgPlayer } from '@rpgjs/server'
import { testing, clear } from '@rpgjs/testing'
import main from '../src/modules/main'
import defaultGui from '@rpgjs/default-gui' 

let player: RpgPlayer

beforeEach(async () => {
    const fixture = testing([
        main,
        defaultGui
    ], {
        basePath: __dirname + '/../'
    })
    const client = await fixture.createClient()
    player = RpgWorld.getPlayer(client.playerId)
})

test('test player', () => {
    expect(player).toBeDefined()
})

afterEach(() => {
    clear()
})