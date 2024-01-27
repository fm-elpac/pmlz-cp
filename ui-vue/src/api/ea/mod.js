// electronjs api

// preload.js
const ea = window.pmlz_cp_ea;

// 检查是否在 electronjs 环境中运行
export function ea可用() {
  return null != window.pmlz_cp_ea;
}

// 获取 electronjs 版本信息
export async function electron版本() {
  return await ea.electron_version();
}

// 读取 deno/fresh server http token
export async function 读口令() {
  return await ea.read_token();
}

export async function getAppMetrics() {
  return await ea.getAppMetrics();
}

export async function getGPUFeatureStatus() {
  return await ea.getGPUFeatureStatus();
}

export async function getGPUInfo() {
  return await ea.getGPUInfo();
}

export async function os_cpus() {
  return await ea.os_cpus();
}

export async function os_loadavg() {
  return await ea.os_loadavg();
}

export async function os_uptime() {
  return await ea.os_uptime();
}

export async function os_memory() {
  return await ea.os_memory();
}

export async function os_networkInterfaces() {
  return await ea.os_networkInterfaces();
}
