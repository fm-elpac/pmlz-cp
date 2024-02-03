<script setup>
import { 播放启动声音 } from "@/util/声音.js";
import c设置vcp from "@/c/设置/设置vcp.vue";

function 更新声音() {
  播放启动声音();
}
</script>

<template>
  <div class="v-s-显示器">
    <c设置vcp
      名称="亮度"
      描述="(DDC/CI) 设置显示器背光的亮度"
      vcp="10"
      按键减="1"
      按键加="2"
    />
    <c设置vcp
      名称="对比度"
      描述="(DDC/CI) 设置显示器的对比度"
      vcp="12"
      按键减="3"
      按键加="4"
    />
    <c设置vcp
      名称="音量"
      描述="(DDC/CI) 显示器内置喇叭的音量"
      vcp="62"
      按键减="5"
      按键加="6"
      @更新="更新声音"
    />
  </div>
</template>

<style scoped>
.v-s-显示器 {
  padding: 0.8em;
}

.c-设置vcp {
  margin-bottom: 0.8em;
}
</style>
