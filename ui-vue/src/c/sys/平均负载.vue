<script setup>
import { computed } from "vue";
import { useSysInfo } from "@/hook/sys.js";

const 系统信息 = useSysInfo();

const 平均负载 = computed(function () {
  // 格式化平均负载
  return 系统信息.loadavg.value.map((x) => x.toFixed(2)).join(", ");
});
</script>

<template>
  <span class="c-平均负载">平均负载: {{ 平均负载 }}</span>
</template>

<style scoped>
</style>
