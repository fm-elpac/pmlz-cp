// pmlz-cp deno server
import {
  ENV_PMLZ_CP,
  ENV_PMLZ_CP_PORT,
  ENV_PMLZ_CP_TOKEN,
  ENV_PMLZ_CP_UI_CMD,
  默认端口,
} from "./conf.ts";
import { logi } from "./log.ts";
import { 初始化口令, 口令文件路径 } from "./token.ts";
import { 初始化数据库 } from "./db/kv.ts";

// 获取 http 服务器监听的端口号
export function 获取端口(): number {
  const p = Deno.env.get(ENV_PMLZ_CP_PORT);
  if (p != null) {
    const p1 = Number.parseInt(p);
    if (!Number.isNaN(p1)) {
      return p1;
    }
  }

  return 默认端口;
}

// http 服务器开始监听后的回调
export function onListen(p: { hostname: string; port: number }) {
  logi("/fresh: listen");
  console.log(p);

  // 启动图形界面
  if (Deno.env.get(ENV_PMLZ_CP) == "1") {
    const ui_cmd = Deno.env.get(ENV_PMLZ_CP_UI_CMD);
    logi(" run: " + ui_cmd);

    const c = new Deno.Command("/bin/sh", {
      args: ["-c", ui_cmd],
      env: {
        [ENV_PMLZ_CP_TOKEN]: 口令文件路径(),
      },
    });
    c.spawn();
  }

  // TODO
}

// http 服务器监听之前的初始化
export async function 初始化() {
  logi(": init");

  await 初始化口令();
  await 初始化数据库();
}
