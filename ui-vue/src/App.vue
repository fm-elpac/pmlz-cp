<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { 播放启动声音 } from "./util/声音.js";
import { cp_version } from "./api/da/mod.js";
import { 初始化键盘控制 } from "./kb/mod.js";
import c上半 from "./c/框架/上半.vue";

onMounted(async () => {
  // 初始化接口
  console.log(await cp_version());

  初始化键盘控制();
  播放启动声音();
});
</script>

<template>
  <c上半 class="app-半" />

  <div class="app-半">
    <RouterView />
  </div>
</template>

<style scoped>
.app-半 {
  height: 50%;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
