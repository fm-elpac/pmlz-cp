// pmlz-cp electronjs
const path = require("node:path");
const { app, BrowserWindow, ipcMain } = require("electron");

// DEBUG
console.log("pmlz-cp electronjs: main.js");

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
    // TODO
  }

  // TODO

  ipcMain.handle("ea:electron_version", electron_version);
  ipcMain.handle("ea:read_token", read_token);
}

function 初始化隐藏鼠标指针(w) {
  const CSS = "* { cursor: none !important; }";
  let 隐藏 = false;
  let css_key = null;

  async function 隐藏鼠标指针() {
    css_key = await w.webContents.insertCSS(CSS);

    console.log("pmlz-cp electronjs: cursor hide");
    隐藏 = true;
  }

  async function 显示鼠标指针() {
    await w.webContents.removeInsertedCSS(css_key);

    console.log("pmlz-cp electronjs: cursor show");
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
      if (input.key == "F1") {
        await 切换显示();
      }
    }
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
    },
  });

  初始化隐藏鼠标指针(w);

  const url = 获取加载地址();

  console.log("pmlz-cp electronjs: " + url);
  w.loadURL(url);
}

app.whenReady().then(() => {
  初始化接口();
  创建窗口();
});

app.on("window-all-closed", () => {
  app.quit();
});
