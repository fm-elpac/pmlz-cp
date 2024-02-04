<script setup>
import { computed } from "vue";
import { 格式化时分 } from "@/util/时间.js";
import cqw实时天气 from "./qw实时天气.vue";
import cqw小时预报 from "./qw小时预报.vue";

const p = defineProps({
  天气配置: Object,
  天气数据: Object,
});

const 更新时间 = computed(() => {
  const d = new Date(p.天气数据.实时.now.obsTime);
  return 格式化时分(d);
});
</script>

<template>
  <v-card-text class="py-0 d-flex">
    <v-row no-gutters>
      <cqw实时天气 :天气数据="p.天气数据.实时" />
      <cqw小时预报 :天气数据="p.天气数据.小时预报" />
    </v-row>
  </v-card-text>

  <v-divider class="mt-3" />
  <v-card-actions class="数据来源0">
    <span class="数据来源 text-medium-emphasis">数据来源: 和风天气 https://www.qweather.com</span>
    <span class="更新时间 text-medium-emphasis">(更新时间 {{ 更新时间 }})</span>
  </v-card-actions>
</template>

<style scoped>
.数据来源 {
  flex-grow: 1;
}

.数据来源0 {
  font-size: 0.8em;
}
</style>
