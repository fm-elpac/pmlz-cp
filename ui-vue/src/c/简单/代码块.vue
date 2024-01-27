<script setup>
const p = defineProps({
  文本: String,
});
</script>

<template>
  <div class="c-代码块 text-medium-emphasis">
    <pre>{{ p.文本 }}</pre>
  </div>
</template>

<style scoped>
.c-代码块 {
  padding: 0.8em;
  overflow-x: auto;

  background-color: rgba(var(--v-theme-primary), 0.2);
}

pre {
  font-size: 1.2em;
}
</style>
