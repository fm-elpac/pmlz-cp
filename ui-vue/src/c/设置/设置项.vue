<script setup>
const p = defineProps({
  名称: String,
  描述: String,
  加载: Boolean,
  按钮: Boolean,
});
</script>

<template>
  <v-card
    class="c-设置项"
    :title="p.名称"
    :subtitle="p.描述"
    :loading="加载"
  >
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions v-if="p.按钮">
      <slot name="按钮" />
    </v-card-actions>
  </v-card>
</template>

<style scoped>
</style>
