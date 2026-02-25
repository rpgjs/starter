import { LocalStorageSaveStorageStrategy, provideSaveStorage, provideServerModules } from "@rpgjs/server";
import { configCommon } from "./config.common";
import { provideActionBattle } from "@rpgjs/action-battle/server";
import { provideStudioGame } from "@rpgjs/studio/server";

export const configServer = {
  providers: [
    ...configCommon.providers,
    provideStudioGame(),
    provideServerModules([]),
    provideSaveStorage(new LocalStorageSaveStorageStrategy({ key: "rpgjs-studio" })),
    provideActionBattle()
  ],
};
