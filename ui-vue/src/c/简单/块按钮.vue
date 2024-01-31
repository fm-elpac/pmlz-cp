<script setup>
import { useKb } from "@/kb/mod.js";

const p = defineProps({
  文本: String,
  按键: String,
  运行: Boolean,
});

const emit = defineEmits(["点击"]);

function 点击() {
  emit("点击");
}

const { 按键帮助文本 } = useKb(p.按键, 点击);
</script>

<template>
  <div class="c-块按钮">
    <v-btn block size="x-large" :disabled="p.运行" @click="点击">
      <span>{{ p.文本 }}</span>
      <span class="kb">{{ 按键帮助文本 }}</span>

      <template #append v-if="p.运行">
        <v-progress-circular indeterminate color="primary" />
      </template>
    </v-btn>
  </div>
</template>

<style scoped>
.c-块按钮 {
  margin: 0.8em;
}
</style>
