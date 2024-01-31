<script setup>
import { useKb帮助 } from "@/kb/mod.js";
import c按钮 from "@/c/简单/按钮.vue";
import c设置项 from "./设置项.vue";

const p = defineProps({
  名称: String,
  描述: String,
  最小: Number,
  最大: Number,
  步长: Number,
  按键减: String,
  按键加: String,
  按键步长: Number,
  加载: Boolean,
  // 当前值
  值: Number,
});

const emit = defineEmits(["设"]);

const kb帮助 = useKb帮助();

function 更新(值) {
  emit("设", 值);
}

function 减() {
  let v = p.值 - p.按键步长;
  if (v < p.最小) {
    v = p.最小;
  }
  更新(v);
}

function 加() {
  let v = p.值 + p.按键步长;
  if (v > p.最大) {
    v = p.最大;
  }
  更新(v);
}
</script>

<template>
  <c设置项
    class="c-设置滑条"
    :名称="p.名称"
    :描述="p.描述"
    :加载="加载"
    :按钮="kb帮助"
  >
    <v-slider
      :min="p.最小"
      :max="p.最大"
      :step="p.步长"
      color="primary"
      :disabled="加载"
      :modelValue="p.值"
      @update:modelValue="更新"
    />

    <template v-if="kb帮助" #按钮>
      <c按钮 文本="-" :按键="p.按键减" @点击="减" />
      <c按钮 文本="+" :按键="p.按键加" @点击="加" />
    </template>
  </c设置项>
</template>

<style scoped>
</style>
