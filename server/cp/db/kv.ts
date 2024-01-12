// 用户数据库 (deno-kv)
// 数据库文件: ~/.config/pmlz-cp/pmlz-cp-user.db
import { join } from "$std/path/join.ts";

import { ENV_HOME, FP_USER_DB } from "../conf.ts";
import { logi } from "../log.ts";
import { 建上级目录 } from "../util.ts";

// 打开的数据库实例
const etc = {
  kv: null,
};

export async function 初始化数据库() {
  const 数据库文件 = join(Deno.env.get(ENV_HOME), FP_USER_DB);
  logi(" db: " + 数据库文件);

  await 建上级目录(数据库文件);
  const kv = await Deno.openKv(数据库文件);

  etc.kv = kv;
}

export function kv() {
  return etc.kv;
}
