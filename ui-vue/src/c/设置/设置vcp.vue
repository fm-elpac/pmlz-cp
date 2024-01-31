<script setup>
import { ref, computed, onMounted } from "vue";
import { cp_sys_getvcp, cp_sys_setvcp } from "@/api/da/sys.js";
import c设置滑条 from "./设置滑条.vue";

const p = defineProps({
  名称: String,
  描述: String,
  vcp: String,
  按键减: String,
  按键加: String,
});

const 最大 = ref(1);
const 步长 = ref(1);

const 值 = ref(0);
const 已加载 = ref(false);

const 名称 = computed(() => `${p.名称} (${值.value})`);

async function 加载vcp() {
  const { v, M } = await cp_sys_getvcp(p.vcp);

  最大.value = M;
  值.value = v;

  已加载.value = true;
}

async function 设(v) {
  if (!已加载.value) {
    return;
  }
  已加载.value = false;

  await cp_sys_setvcp(p.vcp, v);
  await 加载vcp();
}

onMounted(加载vcp);
</script>

<template>
  <c设置滑条
    class="c-设置vcp"
    :名称="名称"
    :描述="p.描述"
    :最小="0"
    :最大="最大"
    :步长="步长"
    :按键减="p.按键减"
    :按键加="p.按键加"
    :按键步长="10"
    :加载="!已加载"
    :值="值"
    @设="设"
  />
</template>

<style scoped>
</style>
