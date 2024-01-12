import { Handlers } from "$fresh/server.ts";
import { res_json } from "../../cp/util.ts";
import { conf_set } from "../../cp/db/conf.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    const 参数 = await req.json();

    await conf_set(参数);

    return res_json({});
  },
};
