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
  padding: 1em;
  overflow-x: auto;

  background-color: #DCEDC8; /* light-green-lighten-4 */
}

pre {
  font-size: 1.6em;
}
</style>
