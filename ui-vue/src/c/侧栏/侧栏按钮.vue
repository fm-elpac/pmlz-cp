<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useKb } from "@/kb/mod.js";

const p = defineProps({
  文本: String,
  路径: String,
  按键: String,
});

const router = useRouter();
const route = useRoute();

function 点击() {
  router.push({
    path: p.路径,
  });
}

const 激活 = computed(() => {
  return route.path == p.路径;
});

const { 按键帮助文本 } = useKb(p.按键, 点击);
</script>

<template>
  <div class="c-侧栏按钮" :class="{ 激活, 'text-medium-emphasis': !激活 }" @click="点击">
    <span>{{ p.文本 }}{{ 按键帮助文本 }}</span>
  </div>
</template>

<style scoped>
.c-侧栏按钮 {
  padding: 0.8em;
  padding-right: 1.6em;
  text-align: right;

  cursor: pointer;

  position: relative;
  top: 0;
  right: 0;
  width: 100%;
}

.c-侧栏按钮::after {
  content: "";
  display: block;
  height: 100%;
  width: 0.1em;
  position: absolute;
  top: 0;
  right: -0.1em;
}

span {
  font-size: 1.6em;
}

.c-侧栏按钮:hover,
.c-侧栏按钮.激活 {
  background-color: rgb(var(--v-theme-primary-darken-1));
}

.c-侧栏按钮:hover span,
.c-侧栏按钮.激活 span {
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);
}

.c-侧栏按钮:hover::after,
.c-侧栏按钮.激活::after {
  background-color: rgba(var(--v-border-color), 0.6);
}
</style>
