import { da_get, da_post } from "./util.js";

// 获取后端版本号
export async function cp_version() {
  return await da_get("version");
}

// TODO

// DEBUG
window.cp_version = cp_version;
