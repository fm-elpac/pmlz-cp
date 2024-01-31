import { Handlers } from "$fresh/server.ts";
import { res_json } from "../../../cp/util.ts";
import { getvcp } from "../../../cp/sys.ts";

// POST /cp_api/sys/getvcp
// ddcutil getvcp ?
export const handler: Handlers = {
  async POST(req, _ctx) {
    const { vcp } = await req.json() as { vcp: string };

    const o = await getvcp(vcp);

    return res_json(o);
  },
};
