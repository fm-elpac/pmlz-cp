<script setup>
import { ref } from "vue";
import { useKbScroll } from "@/kb/mod.js";

const e = ref(null);
useKbScroll(e);
</script>

<template>
  <div ref="e" class="c-下半简单">
    <slot />
  </div>
</template>

<style scoped>
.c-下半简单 {
  padding: 0.8em;
  height: 100%;
  overflow-y: auto;
}
</style>
