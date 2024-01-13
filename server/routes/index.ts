import { FreshContext } from "$fresh/server.ts";

// GET / -> /index.html
export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response("", {
    status: 302,
    headers: {
      Location: "/index.html",
    },
  });
};
