<script setup>
import { ref, onMounted } from "vue";
import { 格式化uptime } from "@/util/时间.js";
import { 格式化json } from "@/util/json.js";
import { useInterval } from "@/hook/定时器.js";
import {
  os_cpus,
  os_loadavg,
  os_uptime,
  os_memory,
  os_networkInterfaces,
} from "@/api/ea/mod.js";
import { cp_sys_sync } from "@/api/da/mod.js";
import c代码块 from "@/c/简单/代码块.vue";
import c块按钮 from "@/c/简单/块按钮.vue";

const uptime = ref("");
const memory = ref("");
const loadavg = ref("");
const net = ref("");
const 内存占用 = ref(1);

const cpus = ref("");

// 0: 初始
// 1: 正在执行
// 2: 成功
// 3: 错误
const sync状态 = ref(0);

async function 执行sync() {
  // 避免同时执行 2 个
  if (1 == sync状态.value) {
    return;
  }

  try {
    sync状态.value = 1;

    await cp_sys_sync();

    sync状态.value = 2;
  } catch (e) {
    console.log(e);

    sync状态.value = 3;
  }
}

function 格式化内存(m) {
  const 已用字节 = m.total - m.free;
  const 内存占用 = 已用字节 / m.total;
  const 百分比 = Math.ceil(内存占用 * 100);
  const 系数 = 1024 * 1024;  // MB
  const 总计 = Math.floor(m.total / 系数);
  const 已用 = Math.ceil(已用字节 / 系数);

  return [`${百分比}% (${已用} / ${总计} MB)`, 内存占用];
}

function 格式化平均负载(a) {
  return a.join(", ");
}

function 格式化IP地址(n) {
  const 结果 = [];

  for (let i of Object.keys(n)) {
    const 列表 = n[i].filter(x => !x.internal).map(x => x.cidr);
    if (列表.length < 1) {
      continue;
    }

    结果.push(i);
    for (let j of 列表) {
      结果.push("  " + j);
    }
  }
  return 结果.join("\n");
}

async function 加载数据() {
  uptime.value = 格式化uptime(await os_uptime());
  [memory.value, 内存占用.value] = 格式化内存(await os_memory());
  loadavg.value = 格式化平均负载(await os_loadavg());
  net.value = 格式化IP地址(await os_networkInterfaces());

  cpus.value = 格式化json(await os_cpus());
}

onMounted(加载数据);
useInterval(加载数据, 1e3);
</script>

<template>
  <div class="v-debug-sys">
    <p>运行时长: {{ uptime }}</p>

    <p>内存占用: {{ memory }}</p>
    <v-progress-linear :modelValue="内存占用 * 100" color="deep-orange" height="24" striped />

    <p>平均负载: {{ loadavg }}</p>

    <c块按钮 文本="执行 sync 命令" 按键="y" :运行="1 == sync状态" @点击="执行sync" />
    <v-alert v-if="1 == sync状态" type="info" title="正在执行 sync" />
    <v-alert v-if="2 == sync状态" type="success" title="sync 成功" closable />
    <v-alert v-if="3 == sync状态" type="error" title="sync 失败" closable />

    <p class="t">IP 地址:</p>
    <c代码块 :文本="net" />

    <p class="t">CPU</p>
    <c代码块 :文本="cpus" />
  </div>
</template>

<style scoped>
.v-debug-sys {
  padding: 1em;
}

p {
  font-size: 1.6em;
  margin-bottom: 0.4em;
}

p.t {
  margin-top: 1em;
}

.v-progress-linear {
  margin-bottom: 1em;
}
</style>
