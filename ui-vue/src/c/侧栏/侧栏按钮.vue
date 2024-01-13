<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const p = defineProps({
  文本: String,
  路径: String,
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
</script>

<template>
  <div class="c-侧栏按钮" :class="{ 激活 }" @click="点击">
    <span>{{ p.文本 }}</span>
  </div>
</template>

<style scoped>
.c-侧栏按钮 {
  padding: 1em 2em 1em 1em;
  text-align: right;

  cursor: pointer;

  position: relative;
  top: 0;
  right: 0;
}

.c-侧栏按钮::after {
  content: "";
  display: block;
  height: 100%;
  width: 0.2em;
  position: absolute;
  top: 0;
  right: -0.2em;
}

span {
  font-size: 2em;
  color: var(--c-文字2);
}

.c-侧栏按钮:hover,
.c-侧栏按钮.激活 {
  background-color: rgba(0, 0, 0, 0.1);
}

.c-侧栏按钮:hover span,
.c-侧栏按钮.激活 span {
  color: var(--c-标题);
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);
}

.c-侧栏按钮:hover::after,
.c-侧栏按钮.激活::after {
  background-color: var(--c-标题);
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);
}
</style>
