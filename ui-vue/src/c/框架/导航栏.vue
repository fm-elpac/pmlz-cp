<script setup>
import c导航栏按钮 from "./导航栏按钮.vue";
</script>

<template>
  <div class="b-导航栏">
    <div class="r">
      <c导航栏按钮 文本="首页" 路径="/" />
      <c导航栏按钮 文本="功能" 路径="/功能" />
      <c导航栏按钮 文本="设置" 路径="/设置" />
      <c导航栏按钮 文本="关于" 路径="/about" />
    </div>
  </div>
</template>

<style scoped>
.b-导航栏 {
  border-bottom: solid 0.2em var(--c-边框);

  background-color: rgba(0, 0, 0, 0.1);
}

.r {
  display: flex;
}
</style>
