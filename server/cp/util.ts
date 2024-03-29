// 工具
import { dirname } from "$std/path/dirname.ts";
//import { join } from "$std/path/join.ts";

// 确保目录存在 (类似 mkdir -p)
export async function 建目录(p: string) {
  await Deno.mkdir(p, { recursive: true });
}

// 确保指定文件的上级目录存在
export async function 建上级目录(p: string) {
  await 建目录(dirname(p));
}

// 返回 json 响应
export function res_json(数据: unknown) {
  return new Response(JSON.stringify(数据), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
