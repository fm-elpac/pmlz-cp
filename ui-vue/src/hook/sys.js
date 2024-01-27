import { inject, provide, ref } from "vue";
import { useInterval } from "@/hook/定时器.js";
import { os_loadavg, os_memory, os_uptime } from "@/api/ea/mod.js";

// provide/inject
const K = "sys-info-1";

async function 加载数据(o) {
  o.uptime.value = await os_uptime();
  o.loadavg.value = await os_loadavg();

  const m = await os_memory();
  const 已用字节 = m.total - m.free;
  const 内存占用 = 已用字节 / m.total;
  const 系数 = 1024 * 1024; // MB
  const 总计 = Math.floor(m.total / 系数);
  const 已用 = Math.ceil(已用字节 / 系数);
  o.内存总计.value = 总计;
  o.内存已用.value = 已用;
  o.内存占用.value = 内存占用;
}

// 初始化周期更新的系统信息
export function useSysInfoSetup() {
  const 系统信息 = {
    // 运行时长 (秒)
    uptime: ref(0),
    // 平均负载
    loadavg: ref([0, 0, 0]),

    // 内存总量 (MB)
    内存总计: ref(0),
    // 已使用的内存 (MB)
    内存已用: ref(0),
    // 内存占用率 (0 ~ 1)
    内存占用: ref(1),
  };

  useInterval(() => 加载数据(系统信息), 1e3);
  加载数据(系统信息); // 立即加载

  provide(K, 系统信息);
}

// 使用系统信息
export function useSysInfo() {
  return inject(K);
}
