<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { 格式化时分秒, 格式化星期 } from "@/util/时间.js";

// 当前时间
const d = ref(new Date());

// 时:分:秒
const t = computed(() => 格式化时分秒(d.value));
// 星期
const 星期 = computed(() => 格式化星期(d.value));

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
  <div class="b-大时钟">
    <div class="r1">
      <span class="时">{{ t[0] }}</span>
      <span class="d1">:</span>
      <span class="分">{{ t[1] }}</span>
      <span class="d2">:</span>
      <span class="秒">{{ t[2] }}</span>
    </div>
    <div class="r2">
      <span class="星期">星期{{ 星期 }}</span>
    </div>
  </div>
</template>

<style scoped>
.b-大时钟 {
  padding: 4em 0;
}

.r1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}

.时, .分, .d1 {
  font-size: 8em;
  line-height: 1em;
  letter-spacing: 4px;
}

.d1 {
  padding: 0 16px;
}

.秒, .d2 {
  font-size: 6em;
  line-height: 1em;
  letter-spacing: 6px;
}

.d2 {
  padding: 0 16px;
}

.d1, .d2 {
  opacity: 0.8;
}

.r2 {
  display: flex;
  justify-content: center;
}

.星期 {
  font-size: 4em;
  opacity: 0.8;
}
</style>
