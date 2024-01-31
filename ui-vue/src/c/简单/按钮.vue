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
  <v-btn class="c-按钮" @click="点击">
    <span>{{ p.文本 }}</span>
    <span class="kb">{{ 按键帮助文本 }}</span>
  </v-btn>
</template>

<style scoped>
</style>
