# pmlz-cp

<https://github.com/fm-elpac/pmlz-cp>

胖喵小窝中控台 (web-ui)

![CI](https://github.com/fm-elpac/pmlz-cp/actions/workflows/ci.yml/badge.svg)

镜像:

- TODO

## 简介

主要交互界面 (典型配置):

- 23.6 英寸显示器, 分辨率 1920x1080, **竖屏**, 内置喇叭 (HDMI), 红外触摸框
  (TODO), **壁挂** (屏幕下边距离地面高度 1.0 ~ 1.2m)

  强烈建议: 壁挂, 竖屏.

测试设备:

- 香橙派 Orange pi Zero 3 (内存 1GB, 处理器 全志 H618)

  操作系统: Debian 12 (官方镜像, Linux 6.1)

  <http://www.orangepi.cn/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-Zero-3.html>

软件开发环境 (技术栈):

- 编程语言: js (web)

  <https://developer.mozilla.org/en-US/docs/Web/javascript>

- electronjs (提供浏览器环境)

  <https://www.electronjs.org/>

- vue (图形界面, 前端)

  <https://vuejs.org/>

- deno (fresh): 后端 (本机运行)

  <https://deno.com/> <https://fresh.deno.dev/>

- ddcutil (DDC/CI 控制显示器)

  <https://www.ddcutil.com/> <https://github.com/rockowitz/ddcutil>

- systemd user unit (开机自动启动)

  <https://systemd.io/>

- 文本编辑器: vscode

  <https://code.visualstudio.com/>

## LICENSE

GNU General Public License v3.0 or later (SPDX Identifier: `GPL-3.0-or-later`)

<https://spdx.org/licenses/GPL-3.0-or-later.html>
