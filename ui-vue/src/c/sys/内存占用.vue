<script setup>
import { computed } from "vue";
import { useSysInfo } from "@/hook/sys.js";

const 系统信息 = useSysInfo();

const 内存占用 = computed(function () {
  // 格式化内存占用
  const 百分比 = Math.ceil(系统信息.内存占用.value * 100);
  const 已用 = 系统信息.内存已用.value;
  const 总计 = 系统信息.内存总计.value;

  return `${百分比}% (${已用} / ${总计} MB)`;
});
</script>

<template>
  <span class="c-内存占用">内存占用: {{ 内存占用 }}</span>
</template>

<style scoped>
</style>
