// electronjs api

// preload.js
const ea = window.pmlz_cp_ea;

// 获取 electronjs 版本信息
export async function electron版本() {
  return await ea.electron_version();
}

// 读取 deno/fresh server http token
export async function 读口令() {
  return await ea.read_token();
}

// TODO
