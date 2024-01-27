<script setup>
import { ref } from "vue";
import { cp_sys_sync } from "@/api/da/mod.js";
import c块按钮 from "@/c/简单/块按钮.vue";

// 0: 初始
// 1: 正在执行
// 2: 成功
// 3: 错误
const sync状态 = ref(0);

async function 执行sync() {
  // 避免同时执行 2 个
  if (1 == sync状态.value) {
    return;
  }

  try {
    sync状态.value = 1;

    await cp_sys_sync();

    sync状态.value = 2;
  } catch (e) {
    console.log(e);

    sync状态.value = 3;
  }
}
</script>

<template>
  <div class="c-sys-sync">
    <c块按钮 文本="执行 sync 命令" 按键="y" :运行="1 == sync状态" @点击="执行sync" />
    <v-alert v-if="1 == sync状态" type="info" title="正在执行 sync" />
    <v-alert v-if="2 == sync状态" type="success" title="sync 成功" closable />
    <v-alert v-if="3 == sync状态" type="error" title="sync 失败" closable />
  </div>
</template>

<style scoped>
</style>
