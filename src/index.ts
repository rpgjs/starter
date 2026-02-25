import { mergeConfig } from "@signe/di";
import { provideRpg, startGame } from "@rpgjs/client";
import { configClient } from "./config/config.client";
import startServer from "./server";

startGame(
  mergeConfig(configClient, {
    providers: [provideRpg(startServer)],
  })
);