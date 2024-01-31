// 执行命令 (创建新进程)

// 执行输入的命令, 返回退出码
export async function 执行命令_不安全(命令: string): Promise<number> {
  const c = new Deno.Command("/bin/sh", {
    args: ["-c", 命令],
  });
  const s = await c.spawn().status;
  return s.code;
}

// 解码为 utf-8 文本
function 解码(数据: Uint8Array): string {
  return new TextDecoder("utf-8").decode(数据);
}

// 执行输入的命令, 获取其输出
export async function 执行命令输出_不安全(命令: string): Promise<{
  code: number;
  stdout: string;
  stderr: string;
}> {
  const c = new Deno.Command("/bin/sh", {
    args: ["-c", 命令],
  });
  const o = await c.output();

  return {
    code: o.code,
    stdout: 解码(o.stdout),
    stderr: 解码(o.stderr),
  };
}

// 执行输入的命令, 获取其输出
export async function 执行命令输出(程序: string, 参数: Array<string>): Promise<{
  code: number;
  stdout: string;
  stderr: string;
}> {
  const c = new Deno.Command(程序, {
    args: 参数,
  });
  const o = await c.output();

  return {
    code: o.code,
    stdout: 解码(o.stdout),
    stderr: 解码(o.stderr),
  };
}
