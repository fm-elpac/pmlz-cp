<script setup>
import { useKb } from "@/kb/mod.js";

const p = defineProps({
  文本: String,
  按键: String,
});

const emit = defineEmits(["点击"]);

function 点击() {
  emit("点击");
}

const { 按键帮助文本 } = useKb(p.按键, 点击);
</script>

<template>
  <div class="c-块按钮">
    <v-btn block size="x-large" @click="点击">
      <span>{{ p.文本 }}{{ 按键帮助文本 }}</span>
    </v-btn>
  </div>
</template>

<style scoped>
.c-块按钮 {
  margin: 1em;
}
</style>
