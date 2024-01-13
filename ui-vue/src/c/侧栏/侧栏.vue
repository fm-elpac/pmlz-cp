<script setup>
</script>

<template>
  <div class="c-侧栏">
    <div class="列">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.c-侧栏 {
  border-right: solid 0.2em var(--c-边框);
  min-height: 100%;
}
</style>
