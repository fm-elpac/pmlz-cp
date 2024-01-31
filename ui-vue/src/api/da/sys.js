import { da_post } from "./util.js";

// 系统: 执行 `sync` 命令
export async function cp_sys_sync() {
  return await da_post("sys/sync", 0);
}

// 用于解决 cage 无法隐藏鼠标指针的 BUG
export async function cp_sys_move_mouse() {
  return await da_post("sys/move_mouse", 0);
}

// ddcutil getvcp ?
export async function cp_sys_getvcp(vcp) {
  return await da_post("sys/getvcp", {
    vcp,
  });
}

// ddcutil setvcp ? ?
export async function cp_sys_setvcp(vcp, v) {
  return await da_post("sys/setvcp", {
    vcp,
    v,
  });
}

// DEBUG
window.cp_sys_sync = cp_sys_sync;
window.cp_sys_move_mouse = cp_sys_move_mouse;
window.cp_sys_getvcp = cp_sys_getvcp;
window.cp_sys_setvcp = cp_sys_setvcp;
