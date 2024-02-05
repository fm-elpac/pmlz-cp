<script setup>
const p = defineProps({
  图标: String,
});
</script>

<template>
  <div class="c-qw天气图标 text-primary">
    <i :class="`qi-${p.图标}`" />
  </div>
</template>

<style scoped>
.c-qw天气图标 {
  font-size: 1.2em;
}
</style>
