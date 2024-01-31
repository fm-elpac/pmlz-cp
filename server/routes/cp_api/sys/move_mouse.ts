import { Handlers } from "$fresh/server.ts";
import { res_json } from "../../../cp/util.ts";
import { 移动鼠标 } from "../../../cp/sys.ts";

// POST /cp_api/sys/move_mouse
// 用于解决 cage 无法隐藏鼠标指针的 BUG
export const handler: Handlers = {
  async POST(_req, _ctx) {
    const e = await 移动鼠标();

    return res_json({
      // 将进程退出码作为错误码返回 (0 表示成功)
      e,
    });
  },
};
