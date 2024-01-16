#!/usr/bin/env -S deno run -A
// pmlz-cp/server/bin/conf.js: 配置修改工具
// 使用 /cp_api/conf_get, /cp_api/conf_set 接口
//
// 用法:
// + ./conf.js get XXX
// + ./conf.js set XXX VVV
import {
  ENV_XDG_RUNTIME_DIR,
  FP_PORT,
  FP_TOKEN,
  HH_TOKEN,
  监听地址,
} from "../cp/conf.ts";

// join path
function join(a, b) {
  return a + b;
}

async function 读取口令() {
  const 文件 = join(Deno.env.get(ENV_XDG_RUNTIME_DIR), FP_TOKEN);
  return await Deno.readTextFile(文件);
}

// 获取接口请求地址
async function url(路径) {
  // 读取端口号
  const 文件 = join(Deno.env.get(ENV_XDG_RUNTIME_DIR), FP_PORT);
  const 端口 = Number.parseInt(await Deno.readTextFile(文件));

  return `http://${监听地址}:${端口}/cp_api/${路径}`;
}

// 对请求 /cp_api/* 的封装
async function da(路径, 数据) {
  const 响应 = await fetch(await url(路径), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [HH_TOKEN]: await 读取口令(),
    },
    body: JSON.stringify(数据),
  });

  // 错误检查
  if (!响应.ok) {
    throw new Error("HTTP " + 响应.status);
  }
  const 结果 = await 响应.json();
  if ((结果.e != null) && (结果.e != 0)) {
    throw new Error(`e ${结果.e}: ${结果.t}`);
  }
  // 没有错误
  return 结果;
}

function 帮助信息() {
  console.log("Usage:");
  console.log("  ./conf.js get XXX");
  console.log("  ./conf.js set XXX VVV");
}

async function main() {
  const 操作 = Deno.args[0];

  function 键() {
    const k = Deno.args[1];

    if ((k == null) || (k.length < 1)) {
      throw new Error("bad key: " + k);
    }
    return k;
  }

  if (操作 == "get") {
    const 结果 = await da("conf_get", [键()]);
    console.log(结果);
  } else if (操作 == "set") {
    const 值 = Deno.args[2];
    const 结果 = await da("conf_set", {
      [键()]: 值,
    });
    console.log(结果);
  } else if (操作 == "--help") {
    帮助信息();
  } else {
    throw new Error("unknown command " + 操作);
  }
}

// 程序入口
await main();
