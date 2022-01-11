import { RpgPlayer, RpgPlayerHooks, Control } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('male012')
        player.setHitbox(32, 16)
        player.changeMap('mymap')
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        await player.showText('Welcome to the start of RPGJS. Short presentation of the structure:')
        await player.showText('1. Open the map src/modules/main/server/maps/tmx/samplemap.tmx with Tiled Map Editor !')
        await player.showText('2. All the modules are in src/modules/index.ts, it is a suite of systems to make a complete set. Remove modules or add some!')
        await player.showText('3. The global configuration is done in src/config')
        await player.showText('And, please, support the project on github https://github.com/RSamaium/RPG-JS ! :)')
    }
}