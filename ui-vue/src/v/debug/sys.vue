<script setup>
import { ref, onMounted } from "vue";
import { 格式化uptime } from "@/util/时间.js";
import { 格式化json } from "@/util/json.js";
import { os_cpus, os_loadavg, os_uptime, os_memory, os_networkInterfaces } from "@/api/ea/mod.js";
import c代码块 from "@/c/简单/代码块.vue";

const uptime = ref("");
const memory = ref("");
const loadavg = ref("");
const net = ref("");

const cpus = ref("");

function 格式化内存(m) {
  const 已用字节 = m.total - m.free;
  const 百分比 = Math.ceil((已用字节 / m.total) * 100);
  const 系数 = 1024 * 1024;  // MB
  const 总计 = Math.floor(m.total / 系数);
  const 已用 = Math.ceil(已用字节 / 系数);

  return `${百分比}% (${已用} / ${总计} MB)`;
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

onMounted(async () => {
  uptime.value = 格式化uptime(await os_uptime());
  memory.value = 格式化内存(await os_memory());
  loadavg.value = 格式化平均负载(await os_loadavg());
  net.value = 格式化IP地址(await os_networkInterfaces());

  cpus.value = 格式化json(await os_cpus());
});
</script>

<template>
  <div class="v-debug-sys">
    <p>运行时间: {{ uptime }}</p>
    <p>内存: {{ memory }}</p>
    <p>平均负载: {{ loadavg }}</p>

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
</style>
