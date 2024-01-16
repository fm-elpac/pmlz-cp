import { Handlers } from "$fresh/server.ts";
import { res_json } from "../../cp/util.ts";
import { conf_get } from "../../cp/db/conf.ts";

// POST /cp_api/conf_get
// 读取配置键值
export const handler: Handlers = {
  async POST(req, _ctx) {
    const 参数 = await req.json();

    const 结果 = await conf_get(参数);

    return res_json(结果);
  },
};
