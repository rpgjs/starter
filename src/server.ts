import { createServer } from "@rpgjs/server";
import { configServer } from "./config/config.server";

export default createServer(configServer);