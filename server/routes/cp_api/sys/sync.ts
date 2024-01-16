import { Handlers } from "$fresh/server.ts";
import { res_json } from "../../../cp/util.ts";
import { 执行命令 } from "../../../cp/rp.ts";

// POST /cp_api/sys/sync
// 系统: 执行 `sync` 命令
export const handler: Handlers = {
  async POST(_req, _ctx) {
    const code = await 执行命令("sync");

    return res_json({
      // 将进程退出码作为错误码返回 (0 表示成功)
      e: code,
    });
  },
};
