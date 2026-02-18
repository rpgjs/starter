import { defineModule } from "@rpgjs/common";
import { RpgPlayer, RpgServer } from "@rpgjs/server";
import { player } from './player'

export default defineModule<RpgServer>({
  player,
  maps: [
    {
      id: 'simplemap'
    }
  ]
});
