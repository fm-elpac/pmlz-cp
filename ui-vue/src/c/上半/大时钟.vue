<script setup>
import { computed } from "vue";
import { 格式化时分秒, 格式化星期 } from "@/util/时间.js";
import { useInterval1s } from "@/hook/定时器.js";

// 当前时间
const d = useInterval1s();

// 时:分:秒
const t = computed(() => 格式化时分秒(d.value));
// 星期
const 星期 = computed(() => 格式化星期(d.value));
</script>

<template>
  <div class="c-大时钟">
    <div class="行1">
      <span class="时">{{ t[0] }}</span>
      <span class="d1">:</span>
      <span class="分">{{ t[1] }}</span>
      <span class="d2">:</span>
      <span class="秒">{{ t[2] }}</span>
    </div>
    <div class="行2">
      <span class="星期">星期{{ 星期 }}</span>
    </div>
  </div>
</template>

<style scoped>
.c-大时钟 {
  padding: 4em 0;
}

.行1 {
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

.行2 {
  display: flex;
  justify-content: center;
}

.星期 {
  font-size: 4em;
  opacity: 0.8;
}
</style>
