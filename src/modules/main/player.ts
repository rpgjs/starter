import { RpgPlayer, type RpgPlayerHooks, Components } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.changeMap('simplemap', {
            x: 300,
            y: 300
        })
        player.name.set('YourName')
        player.setGraphic('hero')
    },
    onInput(player: RpgPlayer, { action }) {
        if (action == 'escape') {
            player.callMainMenu()
        }
    }
}