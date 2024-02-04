<script setup>
import { ref, onMounted } from "vue";
import { getvcp } from "@/util/vcp.js";
import { useInterval } from "@/hook/定时器.js";

const 屏幕亮度 = ref(-1);

async function 加载数据() {
  const { v } = await getvcp("10");
  屏幕亮度.value = v;
}
// 每 10s 刷新一次
useInterval(加载数据, 10e3);
onMounted(加载数据);
</script>

<template>
  <span class="c-屏幕亮度">屏幕亮度: {{ 屏幕亮度 }}%</span>
</template>

<style scoped>
</style>
