<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { 格式化时间 } from "@/util/时间.js";

const d = ref(new Date());

const 时间 = computed(() => 格式化时间(d.value));

// 更新时间
let 定时器;
onMounted(() => {
  定时器 = setInterval(() => {
    d.value = new Date();
  }, 1e3);
});
// 清理
onUnmounted(() => clearInterval(定时器));
</script>

<template>
  <div class="b-顶栏时间">
    {{ 时间 }}
  </div>
</template>

<style scoped>
.b-顶栏时间 {
  font-size: 1.6em;
}
</style>
