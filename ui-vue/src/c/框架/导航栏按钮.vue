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
  <div class="b-导航栏按钮" :class="{ 激活 }" @click="点击">
    <span>{{ p.文本 }}</span>
  </div>
</template>

<style scoped>
.b-导航栏按钮 {
  padding: 1em 3em;

  cursor: pointer;

  position: relative;
  top: 0;
  left: 0;
}

.b-导航栏按钮::after {
  content: " ";
  display: block;
  width: 100%;
  height: 0.2em;
  position: absolute;
  left: 0;
  bottom: -0.2em;
}

span {
  font-size: 2em;
  color: var(--c-文字2);
}

.b-导航栏按钮:hover span,
.b-导航栏按钮.激活 span {
  color: var(--c-标题);
  text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);
}

.b-导航栏按钮:hover::after,
.b-导航栏按钮.激活::after {
  background-color: var(--c-标题);
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.2);
}
</style>
