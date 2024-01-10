import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

export default function getConfig() {
  return defineConfig({
    plugins: [tailwind()],

    server: {
      // TODO
      port: 20100,

      hostname: "127.0.0.1",

      onListen: (p: { hostname: string; port: number }) => {
        // TODO
        console.log("pmlz-cp deno/fresh: listen");
        console.log(p);
      },
    },
  });
}
