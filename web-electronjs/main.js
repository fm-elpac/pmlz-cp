// pmlz-cp electronjs
const { app, BrowserWindow } = require("electron");

// DEBUG
console.log("pmlz-cp electronjs: main.js");

const 开发地址 = "http://localhost:5173"; // vue `npm run dev`

function 创建窗口() {
  const w = new BrowserWindow({
    width: 1080,
    height: 1200, // 1920

    backgroundColor: "#333",
    autoHideMenuBar: true,

    // TODO
    kiosk: false,
  });

  // TODO
  const url = 开发地址;

  console.log("pmlz-cp electronjs: " + url);
  w.loadURL(url);
}

app.whenReady().then(() => {
  创建窗口();
});

app.on("window-all-closed", () => {
  app.quit();
});
