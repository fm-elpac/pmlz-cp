<script setup>
import c顶栏时间 from "./顶栏时间.vue";
</script>

<template>
  <div class="b-顶栏">
    <h1>胖喵小窝中控台</h1>
    <c顶栏时间 />
  </div>
</template>

<style scoped>
.b-顶栏 {
  display: flex;
  align-items: center;

  padding: 1em;

  border-bottom: solid 0.2em var(--c-边框);
}

h1 {
  font-size: 2em;
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: normal;
  color: var(--c-文字2);
}
</style>
