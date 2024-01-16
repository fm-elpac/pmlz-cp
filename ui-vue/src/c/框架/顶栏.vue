<script setup>
import { useTheme } from "vuetify";
import c顶栏时间 from "./顶栏时间.vue";

const 主题 = useTheme();

function 切换明暗() {
  主题.global.name.value = 主题.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <div class="c-顶栏 elevation-4">
    <h1 class="text-medium-emphasis" @click="切换明暗">胖喵小窝中控台</h1>
    <c顶栏时间 />
  </div>
</template>

<style scoped>
.c-顶栏 {
  display: flex;
  align-items: center;

  padding: 1em;
}

h1 {
  font-size: 2em;
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: normal;
}
</style>
