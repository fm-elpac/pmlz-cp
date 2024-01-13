import { FreshContext } from "$fresh/server.ts";

// GET /time
export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const 时间 = new Date().toISOString();
  return new Response(时间);
};
