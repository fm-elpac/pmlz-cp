<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import { 播放启动声音 } from "./util/声音.js";
import { cp_version } from "./api/da/mod.js";
import { cp_sys_move_mouse } from "./api/da/sys.js";
import { 初始化键盘控制 } from "./kb/mod.js";
import { useSysInfoSetup } from "./hook/sys.js";

import c上半 from "./c/框架/上半.vue";

useSysInfoSetup();

onMounted(async () => {
  初始化键盘控制();
  播放启动声音();

  // 初始化接口
  console.log(await cp_version());

  // 用于解决 cage 无法隐藏鼠标指针的 BUG
  cp_sys_move_mouse();
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
