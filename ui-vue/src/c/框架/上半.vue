<script setup>
import c顶栏 from "./顶栏.vue";
import c导航栏 from "./导航栏.vue";

import c主 from "../上半/主.vue";
</script>

<template>
  <div class="c-上半">
    <c顶栏 />
    <c主 class="中心区域" />
    <c导航栏 />
  </div>
</template>

<style scoped>
.c-上半 {
  display: flex;
  flex-direction: column;
}

.中心区域 {
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
