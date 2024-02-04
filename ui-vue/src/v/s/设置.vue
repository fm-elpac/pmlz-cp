<script setup>
import c下半左右 from "@/c/框架/下半左右.vue";
import c侧栏按钮 from "@/c/侧栏/侧栏按钮.vue";
</script>

<template>
  <c下半左右 class="v-设置">
    <c侧栏按钮 文本="闹钟" 路径="/设置/闹钟" 按键="a" />
    <c侧栏按钮 文本="显示器" 路径="/设置/显示器" 按键="s" />
    <c侧栏按钮 文本="小夜灯" 路径="/设置/小夜灯" 按键="l" />
  </c下半左右>
</template>

<style scoped>
</style>
