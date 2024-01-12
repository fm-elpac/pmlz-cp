<script setup>
const p = defineProps({
  文本: String,
});

const emit = defineEmits(["点击"]);

function 点击() {
  emit("点击");
}
</script>

<template>
  <button class="c-按钮" type="button" @click="点击">{{ p.文本 }}</button>
</template>

<style scoped>
</style>
