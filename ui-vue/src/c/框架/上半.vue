<script setup>
import c顶栏 from "./顶栏.vue";
import c导航栏 from "./导航栏.vue";

import c大时钟 from "../上半/大时钟.vue";
</script>

<template>
  <div class="b-上半">
    <c顶栏 />
    <div class="c-上半">
      <c大时钟 />
    </div>
    <c导航栏 />
  </div>
</template>

<style scoped>
.b-上半 {
  display: flex;
  flex-direction: column;
}

.c-上半 {
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
