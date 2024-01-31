<script setup>
import c导航栏按钮 from "./导航栏按钮.vue";
</script>

<template>
  <div class="c-导航栏 elevation-4">
    <div class="行">
      <c导航栏按钮 文本="首页" 路径="/" 按键="F2" />
      <c导航栏按钮 文本="功能" 路径="/功能" 按键="F3" />
      <c导航栏按钮 文本="设置" 路径="/设置/显示器" 按键="F4" />
      <c导航栏按钮 文本="关于" 路径="/about" 按键="F6" />
    </div>
  </div>
</template>

<style scoped>
.c-导航栏 {
  background-color: rgb(var(--v-theme-primary));

  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
}

.行 {
  display: flex;
}
</style>
