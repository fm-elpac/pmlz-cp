<script setup>
import { computed } from "vue";
import { useWeather } from "@/hook/天气.js";
import c天气qw from "./天气qw.vue";

const { 天气配置, 天气正在加载, 天气数据, 天气错误 } = useWeather();

const api = computed(() => 天气配置.value.api);
const 正在加载 = computed(() => 天气正在加载.value && (null == 天气错误.value));
const 显示错误 = computed(() => null != 天气错误.value);
const 显示内容 = computed(() => !天气正在加载.value);
</script>

<template>
  <v-card
    class="c-天气"
    title="天气"
  >
    <v-card-text v-if="正在加载" class="d-flex justify-center">
      <v-progress-circular color="primary" indeterminate />
    </v-card-text>
    <v-card-text v-if="显示错误">
      <v-alert title="错误" :text="天气错误" type="error" />
    </v-card-text>

    <template v-if="显示内容">
      <c天气qw
        v-if="api == 'qweather'"
        :天气配置="天气配置"
        :天气数据="天气数据"
      />
    </template>
  </v-card>
</template>

<style scoped>
</style>
