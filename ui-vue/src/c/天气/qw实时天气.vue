<script setup>
import { computed } from "vue";

const p = defineProps({
  天气数据: Object,
});

const 当前气温 = computed(() => p.天气数据.now.temp);
const 天气状况 = computed(() => p.天气数据.now.text);
const 相对湿度 = computed(() => p.天气数据.now.humidity);
const 大气压强 = computed(() => (Number.parseFloat(p.天气数据.now.pressure) / 10).toFixed(1));
const 风向 = computed(() => p.天气数据.now.windDir);
const 风级 = computed(() => p.天气数据.now.windScale);
const 风速 = computed(() => p.天气数据.now.windSpeed);
</script>

<template>
  <v-col class="c-qw实时天气" cols="4">
    <div class="d-flex align-start">
      <div class="text-h2">{{ 当前气温 }}</div>
      <div class="text-h2 温度单位"><span>&deg;C</span></div>

      <div class="text-h4 天气状况">{{ 天气状况 }}</div>
    </div>

    <p class="信息2 d-flex py-2 justify-space-between text-medium-emphasis">
      <span>湿度 {{ 相对湿度 }}%</span>
      <span>气压 {{ 大气压强 }}kPa</span>
    </p>
    <p class="信息2 py-2 text-medium-emphasis">
      <span>{{ 风向 }}, {{ 风级 }} 级 ({{ 风速 }}km/h)</span>
    </p>
  </v-col>
</template>

<style scoped>
.温度单位 {
  flex-grow: 1;
  line-height: 0.5em;
}

.温度单位 span {
  font-size: 0.6em;
}

.信息2 {
  font-size: 1.4em;
}
</style>
