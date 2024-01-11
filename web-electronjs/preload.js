// pmlz-cp electronjs preload.js
const { contextBridge, ipcRenderer } = require("electron");

// electronjs 接口桥接
contextBridge.exposeInMainWorld("pmlz_cp_ea", {
  electron_version: () => ipcRenderer.invoke("ea:electron_version"),
  read_token: () => ipcRenderer.invoke("ea:read_token"),
  // TODO
});
