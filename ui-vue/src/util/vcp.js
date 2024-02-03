// getvcp/setvcp 管理器
// 一次只能执行一个 vcp 请求
import { cp_sys_getvcp, cp_sys_setvcp } from "../api/da/sys.js";

const etc = {
  队列: [],

  运行: false,
};

function 检查队列() {
  if (etc.运行) {
    return;
  }

  if (etc.队列.length > 0) {
    // 取出第一个任务
    const [f, resolve, reject] = etc.队列.shift();

    etc.运行 = true;
    f().then((r) => {
      etc.运行 = false;
      检查队列();

      resolve(r);
    }).catch((e) => {
      etc.运行 = false;
      检查队列();

      reject(e);
    });
  }
}

function 调度(f) {
  return new Promise((resolve, reject) => {
    // 入队
    etc.队列.push([f, resolve, reject]);

    检查队列();
  });
}

// async
export function getvcp(vcp) {
  return 调度(async () => {
    return await cp_sys_getvcp(vcp);
  });
}

// async
export function setvcp(vcp, v) {
  return 调度(async () => {
    return await cp_sys_setvcp(vcp, v);
  });
}
