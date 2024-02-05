<script setup>
import { computed } from "vue";
import { 格式化时分 } from "@/util/时间.js";
import cqw天气图标 from "./qw天气图标.vue";

const p = defineProps({
  天气数据: Object,
});

const 显示数据 = computed(() => {
  const 结果 = p.天气数据.hourly.map((x) => ({
    时间: 格式化时分(new Date(x.fxTime)),
    温度: x.temp,
    t: Number.parseFloat(x.temp),
    图标: x.icon,
  }));
  // 温度范围
  let 最小 = 0;
  let 最大 = 0;

  for (const i of 结果) {
    if (i.t < 最小) {
      最小 = i.t;
    }
    if (i.t > 最大) {
      最大 = i.t;
    }
  }
  // 最大最小要有足够的差值
  if ((最大 - 最小) < 1) {
    最小 = 最大 - 1;
  }
  // 最大最小按 10 跳变
  最小 = Math.floor(最小 / 10) * 10;
  最大 = Math.ceil(最大 / 10) * 10;

  // 温度条
  for (const i of 结果) {
    i.p = ((i.t - 最小) / (最大 - 最小)) * 100;
  }

  // 只显示 12 个, 太多显示不下
  return 结果.slice(0, 12);
});
</script>

<template>
  <v-col class="c-qw小时预报 ml-2" col="8">
    <v-row class="内容" no-gutters>
      <template v-for="(i, j) in 显示数据">
        <v-col class="列" col="1">
          <div class="顶部">
            <span>{{ i.温度 }}&deg;C</span>
            <cqw天气图标 :图标="i.图标" />
          </div>

          <div class="温度条0">
            <div class="温度条1">
              <div class="温度条2">
                <v-progress-linear
                  :model-value="i.p"
                  :height="16"
                  color="primary"
                  rounded
                />
              </div>
            </div>
          </div>

          <span
            v-if="j % 3 == 0"
            class="text-medium-emphasis"
          >{{ i.时间 }}</span>
          <span
            v-if="j % 3 != 0"
            class="占位 text-medium-emphasis"
          >-</span>
        </v-col>
      </template>
    </v-row>
  </v-col>
</template>

<style scoped>
.内容 {
  height: 100%;
}

.列 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.顶部 {
  position: relative;
  top: 0;
  left: 0;
}

.c-qw天气图标 {
  position: absolute;
  left: 0;
  bottom: 140%;
  width: 100%;
  text-align: center;
}

.温度条0 {
  position: relative;
  top: 0;
  left: 0;
  flex-grow: 1;
}

.温度条1 {
  position: absolute;
  top: 40%;
  left: -45px;
}

.温度条2 {
  width: 90px;
  rotate: -90deg;
}

.占位 {
  opacity: 0;
}
</style>
