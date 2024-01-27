<script setup>
import { computed } from "vue";
import { useSysInfo } from "@/hook/sys.js";

const 系统信息 = useSysInfo();

const 内存占用 = computed(function () {
  return 系统信息.内存占用.value * 100;
});
</script>

<template>
  <v-progress-linear
    class="c-内存占用条"
    :modelValue="内存占用"
    color="deep-orange"
    height="24"
    striped
  />
</template>

<style scoped>
</style>
