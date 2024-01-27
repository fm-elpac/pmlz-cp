<script setup>
import { ref, onMounted } from "vue";
import { 格式化json } from "@/util/json.js";
import { useInterval } from "@/hook/定时器.js";
import {
  os_cpus,
  os_networkInterfaces,
} from "@/api/ea/mod.js";

import c代码块 from "@/c/简单/代码块.vue";

import c运行时长 from "@/c/sys/运行时长.vue";
import c内存占用 from "@/c/sys/内存占用.vue";
import c内存占用条 from "@/c/sys/内存占用条.vue";
import c平均负载 from "@/c/sys/平均负载.vue";

import cSysSync from "./sysSync.vue";

const net = ref("");
const cpus = ref("");

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
  net.value = 格式化IP地址(await os_networkInterfaces());
  cpus.value = 格式化json(await os_cpus());
}

onMounted(加载数据);
useInterval(加载数据, 1e3);
</script>

<template>
  <div class="v-debug-sys">
    <p><c运行时长 /></p>
    <p><c内存占用 /></p>
    <c内存占用条 />
    <p><c平均负载 /></p>

    <cSysSync />

    <p class="t">IP 地址:</p>
    <c代码块 :文本="net" />

    <p class="t">CPU</p>
    <c代码块 :文本="cpus" />
  </div>
</template>

<style scoped>
.v-debug-sys {
  padding: 0.8em;
}

p {
  font-size: 1.2em;
  margin-bottom: 0.4em;
}

p.t {
  margin-top: 1em;
}

.c-内存占用条 {
  margin-bottom: 1em;
}
</style>
