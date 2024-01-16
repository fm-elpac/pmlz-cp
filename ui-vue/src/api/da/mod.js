import { da_get, da_post } from "./util.js";

export { cp_sys_sync } from "./sys.js";

// 获取后端版本号
export async function cp_version() {
  return await da_get("version");
}

// 获取配置数据
export async function cp_conf_get(键列表) {
  return await da_post("conf_get", 键列表);
}

// 保存配置数据
export async function cp_conf_set(数据) {
  return await da_post("conf_set", 数据);
}

// TODO

// DEBUG
window.cp_version = cp_version;
window.cp_conf_get = cp_conf_get;
window.cp_conf_set = cp_conf_set;
