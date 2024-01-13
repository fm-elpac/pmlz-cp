import { FreshContext } from "$fresh/server.ts";
import { P_VERSION } from "../cp/conf.ts";

// GET /version
export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response(P_VERSION);
};
