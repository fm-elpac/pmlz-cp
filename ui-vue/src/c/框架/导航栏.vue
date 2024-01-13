<script setup>
import c导航栏按钮 from "./导航栏按钮.vue";
</script>

<template>
  <div class="c-导航栏">
    <div class="行">
      <c导航栏按钮 文本="首页" 路径="/" 按键="F2" />
      <c导航栏按钮 文本="功能" 路径="/功能" 按键="F3" />
      <c导航栏按钮 文本="设置" 路径="/设置" 按键="F4" />
      <c导航栏按钮 文本="关于" 路径="/about" 按键="F6" />
    </div>
  </div>
</template>

<style scoped>
.c-导航栏 {
  border-bottom: solid 0.2em var(--c-边框);

  background-color: rgba(0, 0, 0, 0.1);
}

.行 {
  display: flex;
}
</style>
