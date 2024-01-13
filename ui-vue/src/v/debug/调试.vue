<script setup>
import c下半左右 from "@/c/框架/下半左右.vue";
import c侧栏按钮 from "@/c/侧栏/侧栏按钮.vue";
</script>

<template>
  <c下半左右 class="v-调试">
    <c侧栏按钮 文本="系统信息" 路径="/debug/sys" 按键="s" />
    <c侧栏按钮 文本="GPU" 路径="/debug/gpu" 按键="g" />
  </c下半左右>
</template>

<style scoped>
</style>
