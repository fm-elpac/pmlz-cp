<script setup>
import { ref, onMounted } from "vue";
import { 格式化json } from "@/util/json.js";
import { getGPUFeatureStatus, getGPUInfo, getAppMetrics } from "@/api/ea/mod.js";
import c代码块 from "@/c/简单/代码块.vue";

const gpuFeatureStatus = ref("");
const gpuInfo = ref("");
const appMetrics = ref("");

onMounted(async () => {
  gpuFeatureStatus.value = 格式化json(await getGPUFeatureStatus());

  gpuInfo.value = 格式化json(await getGPUInfo());

  appMetrics.value = 格式化json(await getAppMetrics());
});
</script>

<template>
  <div class="v-debug-gpu">
    <p>getGPUFeatureStatus()</p>
    <c代码块 :文本="gpuFeatureStatus" />
    <p>getGPUInfo()</p>
    <c代码块 :文本="gpuInfo" />
    <p>getAppMetrics()</p>
    <c代码块 :文本="appMetrics" />
  </div>
</template>

<style scoped>
.v-debug-gpu {
  padding: 0.8em;
}

p {
  font-size: 1.2em;
  margin: 1em 0 0.4em 0;
}

p:first-child {
  margin-top: 0;
}
</style>
