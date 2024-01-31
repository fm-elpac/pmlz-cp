import { logi } from "./log.ts";
import { 执行命令_不安全, 执行命令输出 } from "./rp.ts";

// 用于解决 cage 无法隐藏鼠标指针的 BUG
export async function 移动鼠标() {
  const 命令 =
    "evemu-event $(cat /run/pmlz-cp/vmouse) --type EV_REL --code REL_X --value 1920 --sync";

  logi(": move mouse");
  return await 执行命令_不安全(命令);
}

export interface Vcp结果 {
  // 错误代码 (进程退出码)
  e: number;
  // stderr 输出
  t: string;
  // stdout 输出
  o: string;
  // vcp
  vcp: string;
  // vcp 当前值
  v?: number;
  // vcp 最大值
  M?: number;
}

function 解析vcp(原始: string, o: Vcp结果) {
  try {
    // VCP 10 C 0 100
    const a = 原始.split("VCP ")[1];
    const b = a.split(" ");
    o.vcp = b[0];

    // VCP 62 CNC x00 x64 x00 x14
    if ("62" == o.vcp) {
      const v = Number.parseInt("0" + b[5]);
      if (!Number.isNaN(v)) {
        o.v = v;
      }
      const M = Number.parseInt("0" + b[3]);
      if (!Number.isNaN(M)) {
        o.M = M;
      }
    } else if (b[1] == "C") {
      const v = Number.parseInt(b[2]);
      if (!Number.isNaN(v)) {
        o.v = v;
      }
      const M = Number.parseInt(b[3]);
      if (!Number.isNaN(M)) {
        o.M = M;
      }
    }
  } catch (_e) {
    // TODO
  }
}

export async function getvcp(vcp: string): Promise<Vcp结果> {
  const 参数 = ["-t", "getvcp", vcp];
  const { code, stdout, stderr } = await 执行命令输出("ddcutil", 参数);

  const o = {
    e: code,
    t: stderr,
    o: stdout,
    vcp,
  };
  解析vcp(stdout, o);
  return o;
}

export async function setvcp(vcp: string, v: string): Promise<Vcp结果> {
  const 参数 = ["setvcp", vcp, v];
  const { code, stdout, stderr } = await 执行命令输出("ddcutil", 参数);

  return {
    e: code,
    t: stderr,
    o: stdout,
    vcp,
  };
}
