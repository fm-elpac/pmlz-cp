import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";

function 获取端口(): number {
  const p = Deno.env.get("PMLZ_CP_PORT");
  if (p != null) {
    const p1 = Number.parseInt(p);
    if (!Number.isNaN(p1)) {
      return p1;
    }
  }

  // 默认端口
  return 20100;
}

export default function getConfig() {
  return defineConfig({
    plugins: [tailwind()],

    server: {
      port: 获取端口(),

      hostname: "127.0.0.1",

      onListen: (p: { hostname: string; port: number }) => {
        console.log("pmlz-cp deno/fresh: listen");
        console.log(p);

        // 启动图形界面
        if (Deno.env.get("PMLZ_CP") == "1") {
          const ui_cmd = Deno.env.get("PMLZ_CP_UI_CMD");
          console.log("pmlz-cp deno run: " + ui_cmd);

          const c = new Deno.Command("/bin/sh", {
            args: ["-c", ui_cmd],
          });
          c.spawn();
        }
      },
    },
  });
}
