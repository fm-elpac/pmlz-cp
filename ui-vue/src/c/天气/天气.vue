<script setup>
import { computed } from "vue";
import { 格式化时分 } from "@/util/时间.js";
import { useWeather } from "@/hook/天气.js";

const { 天气配置, 天气正在加载, 天气数据, 天气错误 } = useWeather();

const api = computed(() => 天气配置.value.api);

const 更新时间 = computed(() => {
  if ("qweather" == api.value) {
    const d = new Date(天气数据.value.now.obsTime);
    return 格式化时分(d);
  }
  return "";
});
</script>

<template>
  <v-card
    class="c-天气"
    title="天气"
  >
    <v-card-text v-if="天气正在加载 && (null == 天气错误)">
      <v-progress-circular color="primary" indeterminate />
    </v-card-text>
    <v-card-text v-if="天气错误 != null">
      <v-alert title="错误" :text="天气错误" type="error" />
    </v-card-text>

    <template v-if="!天气正在加载">
      <template v-if="api == 'qweather'">
        <v-card-text class="py-0 d-flex">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="d-flex align-start">
                <div class="text-h2">{{ 天气数据.now.temp }}</div>
                <div class="text-h2 温度单位"><span>&deg;C</span></div>

                <div class="text-h3 天气状况">{{ 天气数据.now.text }}</div>
              </div>

              <p class="信息2 d-flex py-2 justify-space-between text-medium-emphasis">
                <span>湿度 {{ 天气数据.now.humidity }}%</span>
                <span>气压 {{ (Number.parseFloat(天气数据.now.pressure) / 10).toFixed(1) }}kPa</span>
              </p>
            </v-col>

            <v-col col="8">
              <div class="d-flex justify-center">(TODO)</div>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider class="mt-3" />
        <v-card-actions class="数据来源0">
          <span class="数据来源 text-medium-emphasis">数据来源: <a href="https://www.qweather.com" target="_blank">和风天气</a></span>
          <span class="更新时间 text-medium-emphasis">(更新时间 {{ 更新时间 }})</span>
        </v-card-actions>
      </template>

    </template>
  </v-card>
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
  font-size: 1.2em;
}

.数据来源 {
  flex-grow: 1;
}

.数据来源0 {
  font-size: 0.8em;
}
</style>
