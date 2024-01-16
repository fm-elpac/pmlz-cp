import { da_post } from "./util.js";

// 系统: 执行 `sync` 命令
export async function cp_sys_sync() {
  return await da_post("sys/sync", 0);
}

// DEBUG
window.cp_sys_sync = cp_sys_sync;
