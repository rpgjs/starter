import { RpgClient, RpgModule } from '@rpgjs/client'
import { Characters } from './characters/characters';
import { MapTilesets } from './maps/map';

@RpgModule<RpgClient>({ 
    spritesheets: [
        MapTilesets,
        Characters
    ]
})
export default class RpgClientEngine {}