<script setup>
import { ref, computed } from "vue";
import { 格式化时间 } from "@/util/时间.js";
import { useInterval } from "@/hook/定时器.js";

const d = ref(new Date());

const 时间 = computed(() => 格式化时间(d.value));

// 更新时间
useInterval(() => {
  d.value = new Date();
}, 1e3);
</script>

<template>
  <div class="c-顶栏时间">
    {{ 时间 }}
  </div>
</template>

<style scoped>
.c-顶栏时间 {
  font-size: 1.2em;
}
</style>
