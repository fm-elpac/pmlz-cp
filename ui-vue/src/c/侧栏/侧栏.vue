<script setup>
</script>

<template>
  <div class="c-侧栏 elevation-2">
    <div class="列">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.c-侧栏 {
  min-height: 100%;
  margin-right: 0.2em;

  background-color: rgba(var(--v-theme-secondary), 0.8);
}
</style>
