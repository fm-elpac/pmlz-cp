<script setup>
const p = defineProps({
  文本: String,
});
</script>

<template>
  <div class="c-代码块">
    <pre>{{ p.文本 }}</pre>
  </div>
</template>

<style scoped>
.c-代码块 {
  padding: 1em;
  background-color: var(--c-边框);
  overflow-x: auto;
}

pre {
  font-size: 1.6em;
}
</style>
