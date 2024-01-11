#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import getConfig from "./fresh.config.ts";
import "$std/dotenv/load.ts";

import { 初始化 } from "./cp/server.ts";

await 初始化();

await dev(import.meta.url, "./main.ts", getConfig());
