<script setup>
import { computed } from "vue";
import { 格式化uptime } from "@/util/时间.js";
import { useSysInfo } from "@/hook/sys.js";

const 系统信息 = useSysInfo();

const 运行时长 = computed(() => 格式化uptime(系统信息.uptime.value));
</script>

<template>
  <span class="c-运行时长">运行时长: {{ 运行时长 }}</span>
</template>

<style scoped>
</style>
