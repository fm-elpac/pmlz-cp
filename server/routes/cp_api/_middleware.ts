import { FreshContext } from "$fresh/server.ts";

import { HH_TOKEN } from "../../cp/conf.ts";
import { 检查口令 } from "../../cp/token.ts";

interface 状态 {
  // TODO
}

// /cp_api/* header: x-token
// 检查口令 (认证)
export async function handler(
  req: Request,
  ctx: FreshContext<状态>,
) {
  const token = req.headers.get(HH_TOKEN);
  if ((null == token) || (!检查口令(token))) {
    return new Response("HTTP 403", {
      status: 403,
    });
  }

  return await ctx.next();
}
