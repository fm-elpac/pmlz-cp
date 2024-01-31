import { Handlers } from "$fresh/server.ts";
import { res_json } from "../../../cp/util.ts";
import { setvcp } from "../../../cp/sys.ts";

// POST /cp_api/sys/setvcp
// ddcutil setvcp ? ?
export const handler: Handlers = {
  async POST(req, _ctx) {
    const { vcp, v } = await req.json() as { vcp: string; v: string };

    const o = await setvcp(vcp, v);

    return res_json(o);
  },
};
