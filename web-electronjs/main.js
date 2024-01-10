// pmlz-cp electronjs
const { app, BrowserWindow } = require("electron");

// DEBUG
console.log("pmlz-cp electronjs: main.js");

const 开发地址 = "http://localhost:5173"; // vue `npm run dev`

function 获取加载地址() {
  const port = process.env["PMLZ_CP_PORT"];
  if (port != null) {
    return `http://127.0.0.1:${port}/index.html`;
  }
  return 开发地址;
}

function 获取kiosk() {
  if (process.env["PMLZ_CP"] == "1") {
    return true;
  }
  return false;
}

function 创建窗口() {
  const w = new BrowserWindow({
    width: 1080,
    height: 1350, // 1920

    backgroundColor: "#666",
    autoHideMenuBar: true,

    kiosk: 获取kiosk(),
  });

  const url = 获取加载地址();

  console.log("pmlz-cp electronjs: " + url);
  w.loadURL(url);
}

app.whenReady().then(() => {
  创建窗口();
});

app.on("window-all-closed", () => {
  app.quit();
});
