<script setup>
import { RouterView } from "vue-router";
import c侧栏 from "../侧栏/侧栏.vue";
</script>

<template>
  <div class="c-下半左右">
    <div class="左">
      <c侧栏>
        <slot />
      </c侧栏>
    </div>
    <div class="右">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.c-下半左右 {
  height: 100%;
  overflow-y: auto;

  display: flex;
}

.左, .右 {
  height: 100%;
  overflow-y: auto;
}

.右 {
  flex-grow: 1;
  flex-shrink: 1;
}

.左 {
  width: 14em;
}
</style>
