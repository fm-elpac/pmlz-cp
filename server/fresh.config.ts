import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

import { 监听地址 } from "./cp/conf.ts";
import { onListen, 获取端口 } from "./cp/server.ts";

export default function getConfig() {
  return defineConfig({
    plugins: [tailwind()],

    server: {
      port: 获取端口(),
      hostname: 监听地址,
      onListen,
    },
  });
}
