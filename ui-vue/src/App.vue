<script setup>
import { RouterView } from 'vue-router';
import c上半 from "./c/框架/上半.vue";
</script>

<template>
  <c上半 class="b-半" />

  <div class="b-半">
    <RouterView />
  </div>
</template>

<style scoped>
.b-半 {
  height: 50%;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
