// pmlz-cp electronjs
const path = require("node:path");
const { readFile } = require("node:fs/promises");
const os = require("node:os");
const { app, BrowserWindow, ipcMain } = require("electron");

const LOGP = "pmlz-cp electronjs";

function logi(t) {
  console.log(LOGP + t);
}

// DEBUG
logi(": main.js");

const 开发地址 = "http://localhost:5173"; // vue `npm run dev`

function 获取加载地址() {
  const 端口 = process.env["PMLZ_CP_PORT"];
  if (端口 != null) {
    return `http://127.0.0.1:${端口}/index.html`;
  }
  return 开发地址;
}

function 获取kiosk() {
  if (process.env["PMLZ_CP"] == "1") {
    return true;
  }
  return false;
}

function 初始化接口() {
  // 获取 electronjs 版本信息
  async function electron_version() {
    return process.versions;
  }

  // 读取 deno/fresh server http token
  async function read_token() {
    const 口令文件 = process.env["PMLZ_CP_TOKEN"];
    logi(" read token: " + 口令文件);

    return await readFile(口令文件, { encoding: "utf8" });
  }

  async function getAppMetrics() {
    return app.getAppMetrics();
  }

  async function getGPUFeatureStatus() {
    return app.getGPUFeatureStatus();
  }

  async function getGPUInfo() {
    return await app.getGPUInfo("complete");
  }

  async function os_cpus() {
    return os.cpus();
  }

  async function os_loadavg() {
    return os.loadavg();
  }

  async function os_uptime() {
    return os.uptime();
  }

  // 获取系统内存信息
  async function os_memory() {
    return {
      free: os.freemem(),
      total: os.totalmem(),
    };
  }

  async function os_networkInterfaces() {
    return os.networkInterfaces();
  }

  ipcMain.handle("ea:electron_version", electron_version);
  ipcMain.handle("ea:read_token", read_token);

  ipcMain.handle("ea:getAppMetrics", getAppMetrics);
  ipcMain.handle("ea:getGPUFeatureStatus", getGPUFeatureStatus);
  ipcMain.handle("ea:getGPUInfo", getGPUInfo);
  ipcMain.handle("ea:os_cpus", os_cpus);
  ipcMain.handle("ea:os_loadavg", os_loadavg);
  ipcMain.handle("ea:os_uptime", os_uptime);
  ipcMain.handle("ea:os_memory", os_memory);
  ipcMain.handle("ea:os_networkInterfaces", os_networkInterfaces);
}

function 初始化隐藏鼠标指针(w) {
  const CSS = "* { cursor: none !important; }";
  let 隐藏 = false;
  let css_key = null;

  async function 隐藏鼠标指针() {
    css_key = await w.webContents.insertCSS(CSS);

    logi(": cursor hide");
    隐藏 = true;
  }

  async function 显示鼠标指针() {
    await w.webContents.removeInsertedCSS(css_key);

    logi(": cursor show");
    隐藏 = false;
  }

  async function 切换显示() {
    if (隐藏) {
      await 显示鼠标指针();
    } else {
      await 隐藏鼠标指针();
    }
  }

  // 默认隐藏鼠标指针
  w.webContents.on("dom-ready", async () => {
    await 隐藏鼠标指针();
  });
  // 按 F1 键切换隐藏/显示鼠标指针
  w.webContents.on("before-input-event", async (event, input) => {
    if (input.type == "keyUp") {
      // 不能同时按下 Shift, Ctrl, Alt, Meta 键
      if (
        (input.key == "F1") && (!input.shift) && (!input.control) &&
        (!input.alt) && (!input.meta)
      ) {
        await 切换显示();
      }
    }
  });
}

function 初始化滚动条(w) {
  // 设置 <body> 滚动条样式
  const CSS = `
  body::-webkit-scrollbar {
    width: 2px;
    background-color: #000;
  }

  body::-webkit-scrollbar-button {
    display: none;
  }
  `;

  w.webContents.on("dom-ready", async () => {
    await w.webContents.insertCSS(CSS);
  });
}

function 创建窗口() {
  const w = new BrowserWindow({
    width: 1080,
    height: 1350, // 1920

    backgroundColor: "#666",
    autoHideMenuBar: true,

    kiosk: 获取kiosk(),

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),

      // 默认页面缩放
      zoomFactor: 1.4,
    },
  });

  初始化隐藏鼠标指针(w);
  初始化滚动条(w);

  const url = 获取加载地址();

  logi(" URL: " + url);
  w.loadURL(url);
}

app.whenReady().then(() => {
  初始化接口();
  创建窗口();
});

app.on("window-all-closed", () => {
  app.quit();
});
