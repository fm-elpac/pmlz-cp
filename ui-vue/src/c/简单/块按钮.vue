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
    <button type="button" @click="点击">
      <span>{{ p.文本 }}{{ 按键帮助文本 }}</span>
    </button>
  </div>
</template>

<style scoped>
.c-块按钮 {
  margin: 1em;
}

button {
  display: block;
  color: var(--c-文字);
  padding: 1em;
  background: none;
  border: solid 0.2em var(--c-边框);
  border-radius: 0.4em;
  text-align: center;
  cursor: pointer;
}

button:hover, button:active {
  color: var(--c-标题);
  box-shadow: 0 0 0.6em rgba(0, 0, 0, 0.2);
}

span {
  font-size: 2em;
}
</style>
