import { RpgServer, RpgModule } from '@rpgjs/server'
import { SampleMap } from './maps/samplemap'
import { player } from './player'

@RpgModule<RpgServer>({ 
    player,
    maps: [
        SampleMap
    ]
})
export default class RpgServerEngine {}