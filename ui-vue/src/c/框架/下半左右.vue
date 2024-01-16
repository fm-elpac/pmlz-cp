<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useKbScroll } from "@/kb/mod.js";
import c侧栏 from "../侧栏/侧栏.vue";

const e = ref(null);
useKbScroll(e);
</script>

<template>
  <div class="c-下半左右">
    <div class="左">
      <c侧栏>
        <slot />
      </c侧栏>
    </div>
    <div ref="e" class="右">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.c-下半左右 {
  height: 100%;

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
  overflow-x: visible;
}
</style>
