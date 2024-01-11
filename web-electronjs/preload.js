// pmlz-cp electronjs preload.js
const { contextBridge, ipcRenderer } = require("electron");

// electronjs 接口桥接
contextBridge.exposeInMainWorld("pmlz_cp_ea", {
  electron_version: () => ipcRenderer.invoke("ea:electron_version"),
  read_token: () => ipcRenderer.invoke("ea:read_token"),

  getAppMetrics: () => ipcRenderer.invoke("ea:getAppMetrics"),
  getGPUFeatureStatus: () => ipcRenderer.invoke("ea:getGPUFeatureStatus"),
  getGPUInfo: () => ipcRenderer.invoke("ea:getGPUInfo"),
  os_cpus: () => ipcRenderer.invoke("ea:os_cpus"),
  os_loadavg: () => ipcRenderer.invoke("ea:os_loadavg"),
  os_uptime: () => ipcRenderer.invoke("ea:os_uptime"),
  os_memory: () => ipcRenderer.invoke("ea:os_memory"),
  os_networkInterfaces: () => ipcRenderer.invoke("ea:os_networkInterfaces"),
});
